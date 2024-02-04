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
    // Make playerSelection case-insensitive
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    // Return string that declares the winner or tie
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

function playGame() {
    // Initialize player's score as 0
    let playerScore = 0;
    let comScore = 0;

    // DISPLAY winners at the end
    if (score > 0) {
        console.log('Final result: You win!')
    } else if (score < 0) {
        console.log('Final result: You lose!')
    } else {
        console.log('Final result: Tie!')
    }
}

const btns = document.querySelectorAll('button');

btns.forEach((button) => {
    button.addEventListener('click', function() {
        playRound(button.id)
    });
});