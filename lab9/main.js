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
    preco.textContent = `Custo total: ${prod.price} €`;
    e.append(preco);

    const descricao = document.createElement('p');
    descricao.textContent = prod.description;
    e.append(descricao);

    const botao = document.createElement('button');
    botao.setAttribute('id', 'botao-comprar');
    botao.textContent = '+ Adicionar ao Cesto';
    e.append(botao);

    artigos_disponiveis.append(e);
});

// script.js

// Seleciona todos os botões de "Adicionar ao Cesto"
const botoesAdicionar = document.querySelectorAll('#botao-comprar');

// Seleciona o container do cesto
const caixaCesto = document.getElementById('caixa-cesto');

// Adiciona um evento de clique a cada botão
botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', () => {
        // Seleciona o cartão do produto correspondente ao botão
        const cartaoProduto = botao.parentElement;

        // Cria um clone do cartão de produto
        const cartaoClone = cartaoProduto.cloneNode(true);

        // Remove a descrição e o botão do clone
        const descricoes = cartaoClone.querySelectorAll('p');
        if (descricoes.length > 1) {
            descricoes[0].remove(); // Remove a primeira descrição
        }
        cartaoClone.querySelector('button').remove(); // Remove o botão do clone

        // Adiciona o cartão clonado ao cesto
        caixaCesto.appendChild(cartaoClone);
    });
});

