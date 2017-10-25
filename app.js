

var choices = ['rock', 'paper', 'scissors'];
var index = Math.floor(Math.random() * 3);
var computer = choices[index];


var generate = document.getElementById('generate');
var player = document.getElementById('player');
var myResults = document.getElementById('myResults')
var playerScore = 0
var computerScore = 0

document.getElementById('playerScore').innerText = playerScore
document.getElementById('computerScore').innerText = computerScore

function reset() {
    index = Math.floor((Math.random() * 3));
    computer = choices[index]
    player.className = 'question'
    generate.className = 'question'
    document.getElementById('myResults').innerHTML = ''
    rock.classList.remove('hidden')
    paper.classList.remove('hidden')
    scissors.classList.remove('hidden')
}

function showResult(result) {
    document.getElementById('playerScore').innerText = playerScore
    document.getElementById('computerScore').innerText = computerScore
    document.getElementById('myResults').innerHTML = result;
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
            showResult(`${playerChoice} beats ${computer}. You won1!`)
        }
        else {
            computerScore++
            scoreBoard()
            showResult(`${computer} beats ${playerChoice}. You lose2!`)
        }
    }
    else if (playerChoice === 'paper') {
        if (computer === 'rock') {
            playerScore++
            scoreBoard()
            showResult(`${playerChoice} beats ${computer}. You won3!`)
        }
        else {
            computerScore++  
            scoreBoard()      
            showResult(`${computer} beats ${playerChoice}. You lose4!`)
        }
    }
    else if (playerChoice === 'scissors') {
        if (computer === 'paper') {
            playerScore++
            scoreBoard()
            showResult(`${playerChoice} beats ${computer}. You won5!`)
        }
        else {
            computerScore++       
            scoreBoard() 
            showResult(`${computer} beats ${playerChoice}. You lose6!`)
        }
    }

}
// function scoreBoard(){
//     if(computerScore === 5|| playerScore === 5){
//         if(playerScore > computerScore){
//             rock.classList.add('hidden')
//             paper.classList.add('hidden')
//             scissors.classList.add('hidden')
//             document.getElementById('reset').classList.add('hidden')
//             document.getElementById('scoreDiv').classList.remove('hidden')
//             document.getElementById('scoreboard').innerHTML = 'CONGRATULATIONS! YOU BEAT THE COMPUTER!!!'
//         }
//         else{
//             rock.classList.add('hidden')
//             paper.classList.add('hidden')
//             scissors.classList.add('hidden')
//             document.getElementById('reset').classList.add('hidden')
//             document.getElementById('scoreDiv').classList.remove('hidden')
//             document.getElementById('scoreboard').innerHTML = 'CONGRATULATIONS! YOU BEAT THE COMPUTER!!!'
//         }
//     }
// }






