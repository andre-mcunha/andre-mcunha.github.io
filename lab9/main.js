const artigos_disponiveis = document.getElementById('caixa-produtos');

let cesto = JSON.parse(localStorage.getItem('cesto')) || [];

atualizarCestoUI();

produtos.forEach( prod => {
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


}