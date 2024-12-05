const API_BASE_URL = 'https://deisishop.pythonanywhere.com';

const artigos_disponiveis = document.getElementById('caixa-produtos');

let cesto = JSON.parse(localStorage.getItem('cesto')) || [];
let listaArtigos = []; 

// Garante que o código será executado somente após o DOM ser carregado
document.addEventListener('DOMContentLoaded', () => {
    fetch(`${API_BASE_URL}/products/`)
        .then(response => response.json())
        .then(data => {
            listaArtigos = data; // Armazena os produtos para reutilizar
            renderizarProdutos(listaArtigos);
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));
    
    fetch(`${API_BASE_URL}/categories/`)
        .then(response => response.json())
        .then(data => definirCategorias(data))
        .catch(error => console.error('Erro ao carregar categorias:', error));
    
    atualizarCestoUI();
});

// Listeners para filtros e ordenação
document.getElementById('filtros').addEventListener('change', filtrarProdutos);
document.getElementById('ordenar').addEventListener('change', ordenarProdutos);



// Listener para botao de compra
document.getElementById('botao-comprar').addEventListener('click', pedidoCompra);

//Listeners para novos botoes
document.getElementById('botao-adicionartudo').addEventListener('click', adicionarTodos);
document.getElementById('botao-menosinfo').addEventListener('click', renderizar);


function filtrarProdutos() {
    const categoriaSelecionada = document.getElementById('filtros').value;

    const produtosFiltrados = categoriaSelecionada
        ? listaArtigos.filter(prod => prod.category === categoriaSelecionada)
        : listaArtigos;

    artigos_disponiveis.innerHTML = '';
    renderizarProdutos(produtosFiltrados);
}

function ordenarProdutos() {
    const criterioOrdenacao = document.getElementById('ordenar').value;

    let produtosOrdenados = listaArtigos; // Cria uma cópia para evitar alterar o original

    if (criterioOrdenacao === 'crescente') {
        produtosOrdenados.sort((a, b) => a.rating.rate - b.rating.rate); // Ordena do menor para o maior preço
    } else if (criterioOrdenacao === 'decrescente') {
        produtosOrdenados.sort((a, b) => b.rating.rate - a.rating.rate); // Ordena do maior para o menor preço
    }

    artigos_disponiveis.innerHTML = '';
    renderizarProdutos(produtosOrdenados);
}

function renderizar (){
    artigos_disponiveis.innerHTML = ""

    fetch(`${API_BASE_URL}/products/`)
        .then(response => response.json())
        .then(data => {
            listaArtigos = data; // Armazena os produtos para reutilizar
            renderizarMenosInfo(listaArtigos);
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));

};


function renderizarMenosInfo(data) {
    data.forEach(prod => {
        const e = document.createElement('article');
        e.setAttribute('class', 'cartao-artigo');
    
        const titulo = document.createElement('h3');
        titulo.textContent = prod.title;
        e.append(titulo);
    
        const imagem = document.createElement('img');
        imagem.setAttribute('src', `${prod.image}`);
        imagem.setAttribute('alt', 'Artigo');
        e.append(imagem);
    
        const preco = document.createElement('p');
        preco.textContent = `Custo total: ${prod.price} €`;
        e.append(preco);

    
        const botao = document.createElement('button');
        botao.setAttribute('id', 'botao-comprar');
        botao.textContent = '+ Adicionar ao Cesto';
        botao.addEventListener('click', () => adicionarAoCesto(prod));
        e.append(botao);
    
        artigos_disponiveis.append(e);
    });
}

function renderizarProdutos(data) {
    data.forEach(prod => {
        const e = document.createElement('article');
        e.setAttribute('class', 'cartao-artigo');
    
        const titulo = document.createElement('h3');
        titulo.textContent = prod.title;
        e.append(titulo);
    
        const imagem = document.createElement('img');
        imagem.setAttribute('src', `${prod.image}`);
        imagem.setAttribute('alt', 'Artigo');
        e.append(imagem);
    
        const preco = document.createElement('p');
        preco.textContent = `Custo total: ${prod.price} €`;
        e.append(preco);
    
        const descricao = document.createElement('p');
        descricao.setAttribute('id', 'descricao');
        descricao.textContent = prod.description;
        e.append(descricao);
    
        const botao = document.createElement('button');
        botao.setAttribute('id', 'botao-comprar');
        botao.textContent = '+ Adicionar ao Cesto';
        botao.addEventListener('click', () => adicionarAoCesto(prod));
        e.append(botao);
    
        artigos_disponiveis.append(e);
    });
}

function adicionarAoCesto(prod) {
    cesto.push(prod);

    localStorage.setItem('cesto', JSON.stringify(cesto));

    atualizarCestoUI();
}

function adicionarTodos() {
    listaArtigos.forEach(adicionarAoCesto);
}

function removerDoCesto(index) {
    cesto.splice(index, 1);

    localStorage.setItem('cesto', JSON.stringify(cesto));

    atualizarCestoUI();
}

function atualizarCestoUI() {
    let precoTotal = 0;
    const caixaCesto = document.getElementById('caixa-cesto');
    caixaCesto.innerHTML = '';

    cesto.forEach((prod, index) => {
        precoTotal += parseFloat(prod.price);

        const e = document.createElement('article');
        e.setAttribute('class', 'cartao-artigo2');

        const titulo = document.createElement('h3');
        titulo.textContent = prod.title;
        e.append(titulo);

        const imagem = document.createElement('img');
        imagem.setAttribute('src', `${prod.image}`);
        imagem.setAttribute('alt', 'Artigo');
        e.append(imagem);

        const preco = document.createElement('p');
        preco.textContent = `Custo total: ${prod.price} €`;
        e.append(preco);

        const botao = document.createElement('button');
        botao.setAttribute('id', 'botao-remover');
        botao.textContent = '- Remover do Cesto';
        botao.addEventListener('click', () => removerDoCesto(index));
        e.append(botao);

        caixaCesto.append(e);
    });

    localStorage.setItem('precoTotal', precoTotal.toFixed(2));

    const precoTotalElemento = document.getElementById('preco-total');
    if (precoTotalElemento) {
        precoTotalElemento.textContent = `Preço Final: ${precoTotal.toFixed(2)} €`;
    }
}

function definirCategorias(data) {
    const e = document.getElementById('filtros');

    data.forEach(categoria => {
        const option = document.createElement('option');
        option.value = categoria;
        option.textContent = categoria;
        e.append(option);
    });
}

function pedidoCompra () {

    //Recolher info para criar o body do pedido
    const produtosIds = cesto.map(prod => prod.id); // Extrai os IDs dos produtos no cesto
    const isEstudante = document.querySelector('input[name="estudante_deisi"]').checked;
    const cupao = document.getElementById('cupao')?.value || '';
    const localizacao = document.getElementById('address')?.value || '';

    //Cosntruir corpo do POST
    const corpoPost = {
        products: produtosIds,
        student: isEstudante,
        coupon: cupao,
        address: localizacao
      };


    // Fazer a requisição POST
    fetch(`${API_BASE_URL}/buy/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpoPost)
    })
        .then(response => response.json())
        .then(data => {
            // Tratar a resposta
        const precoFinal = data.totalCost || "N/A";
        const referenciaPagamento = data.reference || "N/A";
        const morada = data.address|| "N/A";

        const pPrecoTotal = document.querySelector("#report-compra h3");
        const pReferencia = document.querySelector("#report-compra p");
        const addres = document.getElementById('morada');
        
       
        pPrecoTotal.textContent = `Valor final a pagar (com eventuais descontos): ${parseFloat(precoFinal).toFixed(2)} €`;       
        pReferencia.textContent = `Referência de pagamento: ${referenciaPagamento}`;
        addres.textContent = `${morada}`;
        })
        .catch(error => console.error('Erro ao processar a compra:', error));
}