let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let playerScoreNum = 0;
let computerScoreNum = 0;
let user;
let choiceRock = document.querySelector("#rock");
let choicePaper = document.querySelector("#paper");
let choiceScissors = document.querySelector("#scissors");

choiceRock.addEventListener("click", rockRound);
choicePaper.addEventListener("click", paperRound);
choiceScissors.addEventListener("click", scissorsRound);


function round() {
    if (playerScoreNum < 4 && computerScoreNum < 4) {
        let computer = compGo();

        if (computer === "rock") {
            if (user === "rock") {
                alert("Tie");
            }
            else if (user === "paper") {
                playerScoreNum += 1;
                playerScore.textContent = playerScoreNum;
            }
            else {
                computerScoreNum += 1;
                computerScore.textContent = computerScoreNum;
            }
        }
        else if (computer === "paper") {
            if (user === "paper") {
                alert("Tie");
            }
            else if (user === "scissors") {
                playerScoreNum += 1;
                playerScore.textContent = playerScoreNum;
            }
            else {
                computerScoreNum += 1;
                computerScore.textContent = computerScoreNum;
            }
        }
        else if (computer === "scissors") {
            if (user === "scissors") {
                alert("Tie");
            }
            else if (user === "rock") {
                playerScoreNum += 1;
                playerScore.textContent = playerScoreNum;
            }
            else {
                computerScoreNum += 1;
                computerScore.textContent = computerScoreNum;
            }
        }
    }
    else if (playerScoreNum === 4 || computerScoreNum === 4) {
        if (computerScoreNum > playerScoreNum) {
            alert("You lose bitch");
            playerScoreNum = 0;
            computerScoreNum = 0;
            playerScore.textContent = playerScoreNum;
            computerScore.textContent = computerScoreNum;
        }
        else if (computerScoreNum < playerScoreNum) {
            alert("You win hoe");
            playerScoreNum = 0;
            computerScoreNum = 0;
            playerScore.textContent = playerScoreNum;
            computerScore.textContent = computerScoreNum;
        }
        else if (computerScoreNum = playerScoreNum && playerScoreNum !== 0) {
            alert("Issa tie fam");
            playerScoreNum = 0;
            computerScoreNum = 0;
            playerScore.textContent = playerScoreNum;
            computerScore.textContent = computerScoreNum;
        }
    }
}
function compGo() {
        let options = ['rock', 'paper', 'scissors'];
        return options[Math.floor(Math.random() * 3)];
}
function rockRound() {
    user = "rock";
    round();
}
function paperRound() {
    user = "paper";
    round();
}
function scissorsRound() {
    user = "scissors";
    round();
}

