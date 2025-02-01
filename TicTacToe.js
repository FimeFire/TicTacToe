let divBase = document.querySelectorAll('input');

let currentPlayer = 'O';
let gameState = Array(9).fill(null); 

let win = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
		[8, 9 , 10, 11],
		[12, 13, 14, 15],
		[0, 4, 8, 12],
		[1, 5, 9, 13],
		[2, 6, 10, 14],
		[3, 7, 11, 15],
		[0, 5, 10, 15],
		[3, 6, 9, 12],
];

divBase.forEach((input, index) => {
    input.addEventListener('click', () => {
        if (!gameState[index]) {
            gameState[index] = currentPlayer;
            input.value = currentPlayer;
						if (input.value === 'O') {
							input.style.background = 'green'
						} else {
							input.style.background = 'orange'
						}

            if (checkWinner(currentPlayer)) {
                let p = document.createElement('p');
                p.textContent = `${currentPlayer} победил`;
								p.style.fontSize = '30px'
                document.body.appendChild(p);
                disableInputs();
            } else if (gameState.every(cell => cell !== null)) {
                let p = document.createElement('p');
                p.textContent = `ничья`;
								p.style.fontSize = '30px'
                document.body.appendChild(p);
            }

            currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
        }
    });
});

function checkWinner(player) {
    return win.some(combination => {
        return combination.every(index => gameState[index] === player);
    });
}

function disableInputs() {
    divBase.forEach(input => {
        input.disabled = true;
    });
}

