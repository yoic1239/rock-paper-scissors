function getComputerChoice() {
    // Return either rock, paper, or scissor randomly
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissor';
    }
}

function roundResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie! You both play ${playerSelection}`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissor' || 
                playerSelection === 'Paper' && computerSelection === 'Rock' || 
                playerSelection === 'Scissor' && computerSelection === 'Paper') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function playRound(playerSelection) {
    // GET computer's selection
    const computerSelection = getComputerChoice();

    // CALL roundResult to display the result
    const result = roundResult(playerSelection, computerSelection);
    const resultDiv = document.querySelector('#result');
    resultDiv.textContent = result;

    // Return player's result
    if (result.substring(0, 4) === 'Tie!') {
        return 'tie';
    } else if (result.substring(0, 8) === 'You win!') {
        return 'win';
    } else {
        return 'lose'
    }
}

function addScore(result) {
    if (result === 'win') {
        playerScore++;
    } else if (result === 'lose') {
        comScore++;
    }
}

const btns = document.querySelectorAll('button');

let playerScore = 0;
let comScore = 0;

const playerScoreUI = document.querySelector('#playerScore');
const comScoreUI = document.querySelector('#comScore');

btns.forEach((button) => {
    button.addEventListener('click', function() {
        let result = playRound(button.id);
        addScore(result);
        playerScoreUI.textContent = playerScore;
        comScoreUI.textContent = comScore;
    });
});