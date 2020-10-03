function computerPlay() {   
    let random = Math.floor((Math.random() * 3) + 1);

    switch (random) {
        case 1:
            console.log('rock');
            break;
        case 2:
            console.log('paper');
            break;
        case 3:
            console.log('scissors');
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    let winner;
    playerSelection = prompt('What do you choose. Rock, Paper or Scissors?');
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock') {

    }
}

