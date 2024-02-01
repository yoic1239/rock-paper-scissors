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

function playRound() {
    // GET player's selection
    const playerSelection = prompt('What will you play? (Rock, Paper, or Scissor)');

    // GET computer's selection
    const computerSelection = getComputerChoice();

    // CALL roundResult to display the result
    const result = roundResult(playerSelection, computerSelection);
    console.log(result);

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
    let score = 0;

    // CALL playRound 5 times to play a five round game
    for (let i = 0; i < 5; i++) {
        // DISPLAY the results of each round
        const result = playRound();
        
        // ADD 1 point if player wins that round
        // MINUS 1 point if lose
        switch (result) {
            case 'tie':
                break;
            case 'win':
                score++;
                break;
            case 'lose':
                score--;
                break;
        }
    }

    // DISPLAY winners at the end
    if (score > 0) {
        console.log('Final result: You win!')
    } else if (score < 0) {
        console.log('Final result: You lose!')
    } else {
        console.log('Final result: Tie!')
    }
}

playGame();