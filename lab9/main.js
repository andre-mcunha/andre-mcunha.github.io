const artigos_disponiveis = document.getElementById('caixa-produtos')

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
    preco.textContent = `Custo total: ${prod.price}`;
    e.append(preco);

    const descricao = document.createElement('p');
    descricao.textContent = prod.description;
    e.append(descricao);

    const botao = document.createElement('button');
    botao.setAttribute('id', 'botao-comprar');
    e.append(botao);

    artigos_disponiveis.append(e);
});
