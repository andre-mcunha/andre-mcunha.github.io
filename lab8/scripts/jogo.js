const piece1NameInput = document.getElementById('piece-1-name');
const piece2NameInput = document.getElementById('piece-2-name');
const piece3NameInput = document.getElementById('piece-3-name');

const startButton = document.getElementById("start-game");
const resetButton = document.getElementById("reset-game");

// Seleção de todas as células do tabuleiro
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

// Função para adicionar eventos de interação visual às células
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

// Adiciona eventos a todas as células do tabuleiro
cells.forEach(addCellEvents);

// Função para iniciar o jogo e aplicar os nomes das peças
function startGame() {
    cells[0].textContent = piece1NameInput.value || 'Peça 1';
    cells[1].textContent = piece2NameInput.value || 'Peça 2';
    cells[2].textContent = piece3NameInput.value || 'Peça 3';
    alert("O jogo começou! Boa sorte!");
}

// Função para resetar o jogo
function resetGame() {
    // Redefine o texto e o estilo visual das células
    cells.forEach((cell, index) => {
        cell.textContent = index + 1; // Redefine o texto da célula para o número original
        cell.style.backgroundColor = ''; // Remove a cor de fundo
        cell.style.transform = 'scale(1)'; // Redefine o tamanho para o original
    });
    alert("O jogo foi reiniciado!");
}

// Eventos para iniciar e reiniciar o jogo
startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);
