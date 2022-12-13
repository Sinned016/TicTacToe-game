const inputPlayerOne = document.querySelector("#player-1");
const inputPlayerTwo = document.querySelector("#player-2");
const startGameBtn = document.querySelector(".start-game-btn");
const cardContainer = document.querySelector(".card-container");
const statusText = document.querySelector(".status-text");
const startGameContainer = document.querySelector(".start-game-container");
const playerTurn = document.querySelector("#playerTurn");
const scoreboard = document.querySelector(".scoreboard");
const playerOneScore = document.querySelector(".player1-score");
const playerTwoScore = document.querySelector(".player2-score");


cardContainer.style.display = "none";
statusText.style.display = "none";
scoreboard.style.display = "none"

startGameBtn.addEventListener('click', initiateGame);

function initiateGame() {
    cardContainer.style.display = "grid";
    statusText.style.display = "inline";
    startGameContainer.style.display = "none";
    scoreboard.style.display = "flex";

    players[0].playerName = inputPlayerOne.value;
    players[1].playerName = inputPlayerTwo.value;

    playerTurn.textContent = players[gameTurn].playerName;

    updateScore();
}

const players = [
    {
        playerName: "PlayerOne",
        symbol: "0",
        score: 0,
    },
    {
        playerName: "PlayerTwo",
        symbol: "X",
        score: 0,
    }
]

let gameTurn = 0;

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener('click', addSymbols)
});

function addSymbols(event) {
    if (event.target.textContent != "") {
        return;
    }
    event.target.textContent = players[gameTurn].symbol;
    
    checkWinner();

    gameTurn = (gameTurn + 1) % 2;
    playerTurn.textContent = players[gameTurn].playerName;
}








const winArray = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

function checkWinner() {
    for (let i = 0; i < winArray.length; i++) {
        const numbers = winArray[i];
        if(cards[numbers[0]].innerHTML != "" && cards[numbers[1]].innerHTML != "" && cards[numbers[2]].innerHTML != "") {
            if(cards[numbers[0]].innerHTML == cards[numbers[1]].innerHTML && cards[numbers[1]].innerHTML == cards[numbers[2]].innerHTML) {
            players[gameTurn].score++;
            updateScore();
            setTimeout(resetGame, 1200);

            statusText.textContent = `${players[gameTurn].playerName} won the game!`
        
            }
        }
    }
}

function updateScore() {
    playerOneScore.innerHTML = `${players[0].playerName} score: ${players[0].score}`
    playerTwoScore.innerHTML = `${players[1].playerName} score: ${players[1].score}`
}

function gameboardToArray() {

}

function resetGame() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].innerHTML = "";
    }
}