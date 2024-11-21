const API_BASE_URL = 'https://deisishop.pythonanywhere.com';

const artigos_disponiveis = document.getElementById('caixa-produtos');

// Garante que o código será executado somente após o DOM ser carregado
document.addEventListener('DOMContentLoaded', () => {
    fetch(`${API_BASE_URL}/products/`)
        .then(response => response.json())
        .then(data => renderizarProdutos(data))
        .catch(error => console.error('Erro ao carregar produtos:', error));
    
        fetch(`${API_BASE_URL}/categories/`)
        .then(response => response.json())
        .then(data => definirCategorias(data))
        .catch(error => console.error('Erro ao carregar categorias:', error));
    atualizarCestoUI();
});

let cesto = JSON.parse(localStorage.getItem('cesto')) || [];


function renderizarProdutos(data){
    data.forEach( prod => {
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

function adicionarAoCesto (prod) {
    cesto.push(prod);

    localStorage.setItem('cesto', JSON.stringify(cesto));

    atualizarCestoUI();
    
};

function removerDoCesto (index) {
    // Remove produto do cesto
    cesto.splice(index, 1);

    localStorage.setItem('cesto', JSON.stringify(cesto));

    atualizarCestoUI();
}

function atualizarCestoUI () {
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

    // Atualiza o preço total na interface
    const precoTotalElemento = document.getElementById('preco-total');
    if (precoTotalElemento) {
        precoTotalElemento.textContent = `Preço Total: ${precoTotal.toFixed(2)} €`;
    }

}

function definirCategorias(data) {

    const e = document.getElementById('filtros');

    data.forEach(categoria => {
        const option = document.createElement('option');
        option.value = categoria;
        option.textContent = categoria;
        e.append(option);
    })
};