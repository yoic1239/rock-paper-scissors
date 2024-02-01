function getComputerChoice() {
    // Return either rock, paper, or scissor randomly
    let randomNum = Math.floor(Math.random() * 3)
    switch (randomNum) {
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
        return 'Tie!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissor' || 
                playerSelection === 'Paper' && computerSelection === 'Rock' || 
                playerSelection === 'Scissor' && computerSelection === 'Paper') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function playRound() {
    // GET player's selection
    const playerSelection = prompt('What will you play? (Rock, Paper, or Scissors)');

    // GET computer's selection
    const computerSelection = getComputerChoice();

    // CALL roundResult to display the result
    const result = roundResult(playerSelection, computerSelection);
    console.log(result);

    // Return player's result
    if (result === 'Tie!') {
        return 'tie';
    } else if (result.substring(0, 8) === 'You win!') {
        return 'win';
    } else {
        return 'lose'
    }
}

function playGame() {
    // Initialize player's and computer's score as 0
    // CALL playRound 5 times to play a five round game
    // ADD 1 point to the winnner of each round
    // DISPLAY the results of each round
    // DISPLAY winners at the end
}

