//1.Passa por aqui!---------------------------------------------------------
const item = document.getElementById("1")

item.addEventListener('mouseover', passar);
item.addEventListener('mouseout', sair);

function passar() {
    item.textContent = "Obrigado por passar!"
}

function sair() {
    item.textContent = "Passa por aqui!"
}

//2.Pinta-me!----------------------------------------------------------------
const red = document.getElementById("red")
const blue = document.getElementById("blue")
const green = document.getElementById("green")
const item2 = document.getElementById("2")

red.addEventListener('click', pintar);
green.addEventListener('click', pintar);
blue.addEventListener('click', pintar);


function pintar() {
    if (event.target.id === "red") {
        item2.style.color = "red";
    } else if (event.target.id === "blue") {
        item2.style.color = "blue";
    } else if (event.target.id === "green") {
        item2.style.color = "green";
    }
}


//3.Experimenta escrever...---------------------------------------------------
const fraseInput = document.getElementById("frase");

fraseInput.addEventListener('keydown', mudaCor);

function mudaCor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    fraseInput.style.backgroundColor = color;
}


//4.Escolhe uma cor em ingles:
const botaoSubmeter = document.getElementById("submeter")
const corFundo = document.getElementById("corFundo")

botaoSubmeter.addEventListener('click', mudaCorFundo);

function mudaCorFundo () {

    document.body.style.backgroundColor = corFundo.value;
}

//5.Conta---------------------------------------------------------------------
const botaoConta = document.getElementById("g")
const counter = document.getElementById("counter")
let contagem = 0

botaoConta.addEventListener('click', contar);

function contar () {
    counter.textContent = ++contagem;
}
