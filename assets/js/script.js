'use strict'

let elPlayer1 = document.querySelector('#player0-name');
let elPlayer2 = document.querySelector('#player1-name');
let elScore1 = document.querySelector('#scr--0');
let elScore2 = document.querySelector('#scr--1');
let elCurrent1 = document.querySelector('#current--0');
let elCurrent2 = document.querySelector('#current--1');
let howToPlay = document.querySelector('.btn--how-to-play');
let newGame = document.querySelector('.btn--new-game');
let rollDice = document.querySelector('.btn--roll-dice');
let hold = document.querySelector('.btn--hold');
let closeRules = document.querySelector('.btn-modal');

let current, points, playing, activeplayer;

// open rules with how to play button
howToPlay.addEventListener('click', function(){
    document.querySelector('#modal').classList.toggle('hide-visibility');
});

// Close rules
closeRules.addEventListener('click', function(){
    document.querySelector('#modal').classList.toggle('hide-visibility');
});

