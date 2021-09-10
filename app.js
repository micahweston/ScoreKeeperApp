const p1Score = document.querySelector('#p1-score');
const p2Score = document.querySelector('#p2-score');
const p1Button = document.querySelector('#p1-add');
const p2Button = document.querySelector('#p2-add');
const resetButton  = document.querySelector('#reset');
const scoreSelect = document.querySelector('#winning');

let p1ScoreKeeper = 0;
let p2ScoreKeeper = 0;
let winningScore = 0;
let isGameOver = false;

scoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset()
})

p1Button.addEventListener('click', function () {
    if (!isGameOver) { 
        p1ScoreKeeper += 1;   
        if (p1ScoreKeeper === winningScore) {  
            isGameOver = true;
            p1Score.classList.add('has-text-success-dark')
            p2Score.classList.add('has-text-danger-dark')
        } 
        p1Score.textContent = p1ScoreKeeper;
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) { 
        p2ScoreKeeper += 1;  
        if (p2ScoreKeeper === winningScore) {  
            isGameOver = true;
            p2Score.classList.add('has-text-success-dark')
            p1Score.classList.add('has-text-danger-dark')
        } 
        p2Score.textContent = p2ScoreKeeper;
    }
})

resetButton.addEventListener('click', reset)

function reset() {
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    p1ScoreKeeper = 0;
    p2ScoreKeeper = 0;
    isGameOver = false;
    p1Score.classList.remove('has-text-success-dark', 'has-text-danger-dark');
    p2Score.classList.remove('has-text-success-dark', 'has-text-danger-dark');
}