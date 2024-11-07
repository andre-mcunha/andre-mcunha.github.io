//1.Passa por aqui!---------------------------------------------------------
const item = document.getElementById("1")

item.addEventListener('mouseover', () => {
    item.textContent = "Obrigado por passar!"
});

item.addEventListener('mouseout', () => {
    item.textContent = "Passa por aqui!"
});


//2.Pinta-me!----------------------------------------------------------------
const item2 = document.getElementById("paint")

document.querySelectorAll("#paint>button").forEach( (elem) => {
    elem.addEventListener('click', () => {        
        item2.style.color = elem.dataset.color;
    });
});




//3.Experimenta escrever...---------------------------------------------------
const fraseInput = document.getElementById("frase");

fraseInput.addEventListener('keydown', () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    fraseInput.style.backgroundColor = color;
})




//4.Escolhe uma cor em ingles:------------------------------------
document.querySelector("#escolhe").onchange = (e) => {
    document.querySelector("body").style.backgroundColor = e.currentTarget.value;
};


//5.Conta---------------------------------------------------------------------
const botaoConta = document.getElementById("g")
const counter = document.getElementById("counter")
let contagem = 0

botaoConta.addEventListener('click', () => {
    counter.textContent = ++contagem;
});


