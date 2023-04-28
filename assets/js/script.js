'use strict';

let player1Area = document.querySelector('#player0-area');
let player2Area = document.querySelector('#player1-area');
let elScore1 = document.querySelector('#scr--0');
let elScore2 = document.querySelector('#scr--1');
let elCurrent1 = document.querySelector('#current--0');
let elCurrent2 = document.querySelector('#current--1');
let howToPlay = document.querySelector('.btn--how-to-play');
let newGame = document.querySelector('.btn--new-game');
let rollDice = document.querySelector('#btn--roll-dice');
let hold = document.querySelector('#btn--hold');
let closeRules = document.querySelector('.btn-modal');
let diceImg = document.querySelector('.dice');
let player1Name = document.querySelector('#player0-name');
let player2Name = document.querySelector('#player1-name');

let currentPoints = 0;
let overAllPoints = [0, 0];

// To check if the players haven't finished the game yet
let isPlaying = true;

// To check who is playing the current round
let activePlayer = 0;

// open rules with how to play button
howToPlay.addEventListener('click', function(){
    document.querySelector('.modal').classList.toggle('hide-visibility');
});

// Close rules
closeRules.addEventListener('click', function(){
    document.querySelector('.modal').classList.toggle('hide-visibility');
});

// set starter values
function setStarter() {
    overAllPoints = [0, 0];
    isPlaying = true;
    currentPoints = 0;
    activePlayer = 0;
    elCurrent1.textContent = 0;
    elCurrent2.textContent = 0;
    elScore1.textContent = 0;
    elScore2.textContent = 0;
    player1Area.classList.add("active-player");
    player2Area.classList.remove("active-player");
    document.querySelector('.dice').classList.add('hide-visibility');
    document.querySelector('.won--0').classList.add('hide-visibility');
    document.querySelector('.won--1').classList.add('hide-visibility');
}

// generate random number for dice and display dice accordingly
function rollTheDice () {
    if (isPlaying) {
        let dice = Math.floor(Math.random() * 6) + 1;
        diceImg.src=`assets/images/dice-${dice}.png`;
        diceImg.classList.remove('hide-visibility');
        if (dice !== 1) {
            currentPoints += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentPoints;
        } else {
            switchPlayer();
        }
    }  
}

function switchPlayer() {
    currentPoints = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    player1Area.classList.toggle("active-player");
    player2Area.classList.toggle("active-player");
    activePlayer = activePlayer === 0 ? 1 : 0;
}

// hold button functionality
hold.addEventListener('click', function() {
    if (isPlaying) {
        overAllPoints[`${activePlayer}`] += currentPoints;
        document.querySelector(`#scr--${activePlayer}`).textContent = overAllPoints[`${activePlayer}`];
        if(overAllPoints[`${activePlayer}`] < 100) {
            switchPlayer();
        } else {
            document.querySelector(`.won--${activePlayer}`).classList.remove('hide-visibility');
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            isPlaying = false;
        }
}});

// If cliked on Player 1 name
function askForUserName1 () {
    document.querySelector('#change-name1-modal').classList.remove("hide-visibility");
    document.querySelector('#change-name1-modal form').addEventListener('submit', function(event){
        event.preventDefault();
        let name1 = document.querySelector('#username1').value;
        player1Name.textContent = name1;
        document.querySelector('#change-name1-modal').classList.add("hide-visibility");
    });
}

// If cliked on Player 2 name
function askForUserName2 () {
    document.querySelector('#change-name2-modal').classList.remove("hide-visibility");
    document.querySelector('#change-name2-modal form').addEventListener('submit', function(event){
        event.preventDefault();
        let name2 = document.querySelector('#username2').value;
        player2Name.textContent = name2;
        document.querySelector('#change-name2-modal').classList.add("hide-visibility");
    });
}

// Call the functions when the document is loaded
document.addEventListener("DOMContentLoaded",
 setStarter(),
 player1Name.addEventListener('click', askForUserName1),
 player2Name.addEventListener('click', askForUserName2),
 newGame.addEventListener('click', setStarter),
 rollDice.addEventListener('click', rollTheDice));
