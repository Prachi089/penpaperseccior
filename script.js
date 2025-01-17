const choices = ['rock', 'paper', 'scissors'];
const resultDisplay = document.getElementById('round-result');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const drawsDisplay = document.getElementById('draws');
const messageDisplay = document.getElementById('message-display');
const buttons = document.querySelectorAll('.choice');
const resetChoiceButton = document.getElementById('reset-choice');
const resetScoreButton = document.getElementById('reset-score');
const resetGameButton = document.getElementById('reset-game');

let wins = 0;
let losses = 0;
let draws = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);

        userChoiceDisplay.innerText = `Your choice: ${capitalize(userChoice)}`;
        computerChoiceDisplay.innerText = `Computer's choice: ${capitalize(computerChoice)}`;
        resultDisplay.innerText = `Result: ${result}`;

        updateScoreboard(result);
        showMessage(result);
    });
});

resetChoiceButton.addEventListener('click', resetChoicesAndResult);
resetScoreButton.addEventListener('click', resetScoreboard);
resetGameButton.addEventListener('click', resetGame);

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a draw!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function updateScoreboard(result) {
    if (result === 'You win!') {
        wins++;
        winsDisplay.innerText = `Wins: ${wins}`;
    } else if (result === 'You lose!') {
        losses++;
        lossesDisplay.innerText = `Losses: ${losses}`;
    } else if (result === 'It\'s a draw!') {
        draws++;
        drawsDisplay.innerText = `Draws: ${draws}`;
    }
}

function showMessage(result) {
    messageDisplay.innerText = result;
    messageDisplay.style.animation = 'fadeInOut 2s ease-in-out';
}

function resetChoicesAndResult() {
    userChoiceDisplay.innerText = 'Your choice: -';
    computerChoiceDisplay.innerText = 'Computer\'s choice: -';
    resultDisplay.innerText = 'Result: -';
    messageDisplay.innerText = '';
}

function resetScoreboard() {
    wins = 0;
    losses = 0;
    draws = 0;
    winsDisplay.innerText = `Wins: ${wins}`;
    lossesDisplay.innerText = `Losses: ${losses}`;
    drawsDisplay.innerText = `Draws: ${draws}`;
}

function resetGame() {
    resetChoicesAndResult();
    resetScoreboard();
}
