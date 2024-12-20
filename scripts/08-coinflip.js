let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0
};
const coinFlip = function(guess) {
    const num = Math.random();
    // guess = 'heads';
    var result = '';
    if(num <= 0.5) {
        result = 'heads';
    }
    else {
        result = 'tails';
    }

    guess === result ? score.wins++ : score.losses++;
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.p').innerHTML=`You chose: ${guess}`;
    console.log(score);
}