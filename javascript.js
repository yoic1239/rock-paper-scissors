function getComputerChoice() {
    // Return either rock, paper, or scissor randomly
    let randomNum = Math.floor(Math.random() * 3)
    switch (randomNum) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissor'
    }
}

function roundResult(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
    // Return string that declares the winner or tie
}

function playRound() {
    // GET player's selection
    // GET computer's selection
    // CALL roundResult to display the result
    // Return player's result
}

function playGame() {
    // Initialize player's and computer's score as 0
    // CALL playRound 5 times to play a five round game
    // ADD 1 point to the winnner of each round
    // DISPLAY the results of each round
    // DISPLAY winners at the end
}

