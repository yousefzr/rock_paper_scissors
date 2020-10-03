let playerScore = 0;
let computerScore = 0;
let draws = 0;

function computerPlay () {   
    let random = Math.floor((Math.random() * 3) + 1);

    switch (random) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}

function playRound (playerSelection, computerSelection) {
    let roundWinner;
    computerSelection = computerPlay();

    playerSelection = prompt('What do you choose. Rock, Paper or Scissors?');
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        roundWinner = 'You lose! Paper beats Rock';
        computerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        roundWinner =  'You lose! Scissors beats Paper';
        computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        roundWinner = 'You lose! Rock beats Scissors';
        computerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        roundWinner = 'You win! Paper beats Rock';
        playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        roundWinner =  'You win! Scissors beats Paper';
        playerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        roundWinner = 'You win! Rock beats Scissors';
        playerScore++;
    } else if (playerSelection === computerSelection) {
        roundWinner = 'It\'s a tie';
        draws++;
    } else {
        roundWinner = 'something went wrong. Try again please.';
    }
    return roundWinner;
}

function game () {
    let gameWinner;
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (playerScore > computerScore) {
        gameWinner = (`After 5 rounds you had ${playerScore} wins, and your opponent had ${computerScore} you have crushed the enemy and stand victorious!`);
    } else if (playerScore < computerScore) {
        gameWinner = (`After 5 rounds you had ${playerScore} wins, and your opponent had ${computerScore} wins, the machines have won, you have failed the human race.`);
    } else {
        gameWinner = 'Yay! You both won';
    }

    console.log(gameWinner);
}

game();