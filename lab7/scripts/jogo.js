// Inicia o jogo ao clicar no botão
document.getElementById("start-game").addEventListener("click", function() {
    alert("O jogo começou! Boa sorte!");
});

// 1. Jogo de Tabuleiro ------------------------------------------------------
// Seleciona todas as células do tabuleiro
const cells = document.querySelectorAll('.cell');

// Função para gerar uma cor aleatória em hexadecimal
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Função para adicionar eventos às células
function addCellEvents(cell) {
    cell.addEventListener('click', function() {
        this.style.backgroundColor = getRandomColor();
    });

    cell.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
    });

    cell.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
}

// Adiciona eventos a todas as células
cells.forEach(addCellEvents);

// 3. Inicia o jogo ao clicar no botão
const startButton = document.getElementById("start-game");

startButton.addEventListener("click", function() {
    alert("O jogo começou! Boa sorte!");
});

// 4. Adiciona evento de tecla Enter para iniciar o jogo
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        alert("O jogo começou! Boa sorte!");
    }
});
