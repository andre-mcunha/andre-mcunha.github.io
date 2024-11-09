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
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

const botaoConta = document.getElementById("g")

botaoConta.addEventListener('click', () => {
    let counter = localStorage.getItem("counter");
    counter++;
    document.getElementById('texto-counter').textContent = counter;
    localStorage.setItem('counter', counter)
});

document.getElementById('texto-counter').textContent = localStorage.getItem('counter');



//6.Submit--------------------------------------------------------------------
document.querySelector("form").onsubmit = (e) => {
    e.preventDefault()

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    document.querySelector("form").querySelector("p").textContent = `Olá, o ${nome} tem ${idade}!`
};


//7. Contador automático-----------------------------------------------------------
let contador = 0;
const contadorElemento = document.getElementById("auto-counter");

setInterval(() => {
    contador++;
    contadorElemento.textContent = contador;
}, 1000);
