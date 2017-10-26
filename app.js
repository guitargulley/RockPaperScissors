
// computer random choice
var choices = ['rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors'];
var index = Math.floor(Math.random() * 9);
var computer = choices[index];

// global variables
var generate = document.getElementById('generate');
var player = document.getElementById('player');
var myResults = document.getElementById('myResults')
var resetBtn = document.getElementById('resetBtn')
var scoreDiv = document.getElementById('scoreDiv')
let playerScore = 0
let computerScore = 0
//write score to screen
document.getElementById('playerScore').innerText = playerScore
document.getElementById('computerScore').innerText = computerScore
//play again function
function playAgain() {
    resetBtn.classList.remove('hidden')
    scoreDiv.classList.add('hidden')
    playerScore = 0
    computerScore = 0
    document.getElementById('playerScore').innerText = playerScore
    document.getElementById('computerScore').innerText = computerScore
    reset()
}
//reset function
function reset() {
    index = Math.floor((Math.random() * 9));
    computer = choices[index];
    player.className = 'question';
    generate.className = 'question';
    document.getElementById('myResults').innerHTML = '';
    rock.classList.remove('hidden');
    paper.classList.remove('hidden');
    scissors.classList.remove('hidden');
}
//show results on screen
function showResult(result) {
    document.getElementById('playerScore').innerText = playerScore
    document.getElementById('computerScore').innerText = computerScore
    document.getElementById('myResults').innerHTML = result;
}
//show winner of first to 3 games
function scoreBoard() {
    if (computerScore === 3 || playerScore === 3) {
        if (playerScore > computerScore) {
            rock.classList.add('hidden')
            paper.classList.add('hidden')
            scissors.classList.add('hidden')
            resetBtn.classList.add('hidden')
            scoreDiv.classList.remove('hidden')
            document.getElementById('scoreboard').innerHTML = 'CONGRATULATIONS! YOU BEAT THE COMPUTER!!!'
        }
        else {
            rock.classList.add('hidden')
            paper.classList.add('hidden')
            scissors.classList.add('hidden')
            resetBtn.classList.add('hidden')
            scoreDiv.classList.remove('hidden')
            document.getElementById('scoreboard').innerHTML = 'TOO BAD, THE COMPUTER WON.'
        }
    }
}
//PLAY FUNCTION HERE-------------------

function play(playerChoice) {
    var rock = document.getElementById('rock');
    var paper = document.getElementById('paper');
    var scissors = document.getElementById('scissors')
    generate.className = computer;
    player.className = playerChoice;
    rock.classList.add('hidden')
    paper.classList.add('hidden')
    scissors.classList.add('hidden')


    if (playerChoice === computer) {
        showResult('The result is a tie')
    }
    else if (playerChoice === 'rock') {
        if (computer === 'scissors') {
            playerScore++
            scoreBoard()
            showResult(`${playerChoice} beats ${computer}. You won!`)
        }
        else {
            computerScore++
            scoreBoard()
            showResult(`${computer} beats ${playerChoice}. You lose!`)
        }
    }
    else if (playerChoice === 'paper') {
        if (computer === 'rock') {
            playerScore++
            scoreBoard()
            showResult(`${playerChoice} beats ${computer}. You won!`)
        }
        else {
            computerScore++
            scoreBoard()
            showResult(`${computer} beats ${playerChoice}. You lose!`)
        }
    }
    else if (playerChoice === 'scissors') {
        if (computer === 'paper') {
            playerScore++
            scoreBoard()
            showResult(`${playerChoice} beats ${computer}. You won!`)
        }
        else {
            computerScore++
            scoreBoard()
            showResult(`${computer} beats ${playerChoice}. You lose!`)
        }
    }

}






