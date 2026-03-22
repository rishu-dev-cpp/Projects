let userScore = 0;
let computerScore = 30;
let isGameOver = false;

const buttons = document.querySelectorAll('button');
const userScoreDisplay = document.querySelectorAll('h3')[0];
const compScoreDisplay = document.querySelectorAll('h3')[1];
const result = document.getElementById('result');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (isGameOver) return;

        const userChoice = parseInt(button.innerText);
        const compChoice = Math.floor(Math.random() * 6) + 1;

        if (userChoice === compChoice) {
            alert(`Out! Computer chose ${compChoice}.`);
            isGameOver = true;
            
            if (userScore < computerScore) {
                result.innerText = `You lost by ${computerScore - userScore} runs!`;
            } else if (userScore === computerScore) {
                result.innerText = `Match Tied!`;
            }
        } 
        else {
            userScore += userChoice;
            userScoreDisplay.innerText = `Your Score ${userScore}`;

            if (userScore > computerScore) {
                result.innerText = `Congrats! You won by ${userScore - computerScore} runs!`;
                isGameOver = true;
            }
        }
    });
});