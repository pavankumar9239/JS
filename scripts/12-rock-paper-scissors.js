let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

// if(!score) {
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     };
// }

document.querySelector('.js-rock').addEventListener('click', () => { playFunction('rock');});
document.querySelector('.js-paper').addEventListener('click', () => { playFunction('paper');});
document.querySelector('.js-scissors').addEventListener('click', () => { playFunction('scissors');});
document.querySelector('.js-playbtn').addEventListener('click', () => {
    autoPlay();
});
document.querySelector('.js-reset').addEventListener('click', () => resetScore());

document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r')
        playFunction('rock');
    else if(event.key === 'p')
        playFunction('paper');
    else if(event.key === 's')
        playFunction('scissors');
    else if(event.key === 'a')
        autoPlay();
    else if(event.key === 'Backspace')
        resetScore();
})

const resetScore = function() {
    document.querySelector('.js-div').classList.remove('istoggled');
    document.querySelector('.js-div').outerHTML = `<div class='js-div'>
                                                    <p>Do you want to reset score?</p>
                                                    <button class='js-yes'>Yes</button>
                                                    <button class='js-no'>No</button>
                                                    </div>`;
    document.querySelector('.js-yes').addEventListener('click',() => {
        score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            localStorage.removeItem('score');
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
            document.querySelector('.js-div').classList.add('istoggled');
    });
    document.querySelector('.js-no').addEventListener('click', () => document.querySelector('.js-div').classList.add('istoggled'));
}
let interval;
let isPlaying = false;
const autoPlay = function() {
    if(!isPlaying) {
        document.querySelector('.js-playbtn').outerHTML = `<button class="js-playbtn" >Stop Playing</button>`;
        document.querySelector('.js-playbtn').addEventListener('click', () => stopPlay());
        interval = setInterval(() => {
            playFunction(pickComputerMove());
        }, 1000);
        isPlaying = true;
    }
};

const stopPlay = function() {
    if(isPlaying) {
        clearInterval(interval);
        document.querySelector('.js-playbtn').outerHTML = `<button class="js-playbtn" onclick="autoPlay()">Auto Play</button>`;
        isPlaying = false;
    }
};


function playFunction(move){
const computer=pickComputerMove();
result='';
if(move === computer){
    result = 'Tie.';
}
else if(move === 'scissors'){
    if(computer === 'rock')
    {
        result='You lose.'
    } else if(computer === 'paper'){
        result = 'You win.';
    }                    
}
else if(move === 'paper'){
    if(computer === 'rock')
    {
        result='You win.'
    } else if(computer === 'scissors'){
        result = 'You lose.';
    }
}
else if(move === 'rock'){
    if(computer === 'paper'){
        result = 'You lose.';
    } else if(computer === 'scissors'){
        result = 'You win.';
    }
}

if(result === 'You win.') {
    score.wins +=1;
}
else if(result === 'You lose.') {
    score.losses +=1;
}
else {
    score.ties +=1;
}

localStorage.setItem('score', JSON.stringify(score));
let y,c;
if(move === 'rock')
{
    y='<img class="js-rock-img img" src="./images/RPS/Rock.png" alt="rock">';
}
else if(move === 'paper'){
    y='<img class="js-rock-img img" src="./images/RPS/Paper.png" alt="paper">';
}
else {
    y='<img class="js-rock-img img" src="./images/RPS/Scissors.png" alt="scissors">';
}

if(computer === 'rock')
{
    c='<img class="js-rock-img img" src="./images/RPS/Rock.png" alt="rock">';
}
else if(computer === 'paper'){
    c='<img class="js-rock-img img" src="./images/RPS/Paper.png" alt="paper">';
}
else {
    c='<img class="js-rock-img img" src="./images/RPS/Scissors.png" alt="scissors">';
}

document.querySelector('.js-result').innerHTML = `${result}`;
document.querySelector('.js-choices').innerHTML = `You ${move} - ${computer} Computer`;
document.querySelector('.js-choices').innerHTML = `You ${y} ${c} Computer`;
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

//                 alert(`You picked ${move}. Computer picked ${computer}. ${result}.
// Score wins:${score.wins} losses:${score.losses} ties:${score.ties}`);

}

function pickComputerMove(){
let computer='';
rand = Math.random(); 

if(rand >= 0 && rand < 1/3){
    computer = 'rock';
}
else if (rand >= 1/3 && rand < 2/3) {
    computer = 'paper';
}
else if(rand >= 2/3 && rand < 1) {
    computer = 'scissors';
}

return computer;
}

function pickPlayerMove(){
    let computer='';
    rand = Math.random(); 
    
    if(rand >= 0 && rand < 1/3){
        computer = 'rock';
    }
    else if (rand >= 1/3 && rand < 2/3) {
        computer = 'paper';
    }
    else if(rand >= 2/3 && rand < 1) {
        computer = 'scissors';
    }
    
    return computer;
}