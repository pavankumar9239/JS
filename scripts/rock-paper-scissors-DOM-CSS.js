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