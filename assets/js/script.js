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

let current, points, playing, activePlayer;

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
    points = [0, 0];
    playing = true;
    current = 0;
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
    if (playing) {
        let dice = Math.floor(Math.random() * 6) + 1;
        diceImg.src=`assets/images/dice-${dice}.png`;
        diceImg.classList.remove('hide-visibility');
        if (dice !== 1) {
            current += dice;
            document.getElementById(`current--${activePlayer}`).textContent = current;
        } else {
            switchPlayer();
        }
    }  
}

function switchPlayer() {
    current = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    player1Area.classList.toggle("active-player");
    player2Area.classList.toggle("active-player");
    activePlayer = activePlayer === 0 ? 1 : 0;
}

hold.addEventListener('click', function() {
    if (playing) {
        points[`${activePlayer}`] += current;
        document.querySelector(`#scr--${activePlayer}`).textContent = points[`${activePlayer}`];
        if(points[`${activePlayer}`] < 100) {
            switchPlayer();
        } else {
            document.querySelector(`.won--${activePlayer}`).classList.remove('hide-visibility');
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            playing = false;
        }
}});

// function askForUserName1 () {
//     let name1 = prompt('Please enter a username for Player 1: (Between 3-8 characters)');
//     if (name1.length > 8 || name1.length < 3) {
//         alert(`The username, "${name1}" is ${name1.length} char. long. A valid username is 3-8 characters!`);
//         askForUserName1();
//     } else {
//         player1Name.textContent = name1;
//     }
// }

function askForUserName1 () {
    document.querySelector('#change-name1-modal').classList.remove("hide-visibility");
    document.querySelector('#change-name1-modal form').addEventListener('submit', function(event){
        event.preventDefault();
        let name1 = document.querySelector('#username1').value;
        player1Name.textContent = name1;
        document.querySelector('#change-name1-modal').classList.add("hide-visibility");
    })
};

function askForUserName2 () {
    document.querySelector('#change-name2-modal').classList.remove("hide-visibility");
    document.querySelector('#change-name2-modal form').addEventListener('submit', function(event){
        event.preventDefault();
        let name2 = document.querySelector('#username2').value;
        player2Name.textContent = name2;
        document.querySelector('#change-name2-modal').classList.add("hide-visibility");
    })
};

// function askForUserName2 () {
//     let name2 = prompt('Please enter a username for Player 2: (Between 3-8 characters)');
//     if (name2.length > 8 || name2.length < 3) {
//         alert(`The username, "${name2}" is ${name2.length} char. long. A valid username is 3-8 characters!`);
//         askForUserName2();
//     } else {
//         player2Name.textContent = name2;
//     }
// }

player1Name.addEventListener('click', askForUserName1);

player2Name.addEventListener('click', askForUserName2);

newGame.addEventListener('click', setStarter);

setStarter();

rollDice.addEventListener('click', rollTheDice);
