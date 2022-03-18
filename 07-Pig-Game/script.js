'use strict';
// Selecting elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNewElement = document.querySelector('.btn--new');
const btnRollElement = document.querySelector('.btn--roll');
const btnHoldElement = document.querySelector('.btn--hold');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
let currentScore = 0;
let currentPlayer = 0;
let playing = true;

//console.log(diceElement.classList.contains('hidden'));
// start conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');
//console.log(diceElement.classList.contains('hidden'));

//rolling dice functionality
btnRollElement.addEventListener('click', function () {
  if (playing) {
    // generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;
    // check for rolled 1
    /*
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    if (currentPlayer === 0) {
      currentScore0El.textContent = currentScore;
    } else {
      currentScore1El.textContent = currentScore;
    }
  } else {
    currentScore = 0;
    if (currentPlayer === 0) {
      currentPlayer = 1;
      currentScore0El.textContent = 0;
    } else {
      currentPlayer = 0;
      currentScore1El.textContent = 0;
    }
  }
  */

    if (dice !== 1) {
      currentScore += dice;
      console.log('current player: ', currentPlayer);
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${currentPlayer}`).textContent = 0;
      currentScore = 0;
      currentPlayer = currentPlayer === 0 ? 1 : 0;
      console.log('current player: ', currentPlayer);
      player0Element.classList.toggle('player--active');
      player1Element.classList.toggle('player--active');
    }
  }
});

btnHoldElement.addEventListener('click', function () {
  if (playing) {
    console.log('hold button');
    if (currentPlayer === 0) {
      score0Element.textContent =
        Number(score0Element.textContent) + currentScore;
      currentScore = 0;
      currentPlayer = currentPlayer === 0 ? 1 : 0;
      console.log('current player: ', currentPlayer);
      player0Element.classList.toggle('player--active');
      player1Element.classList.toggle('player--active');
      document.getElementById(`current--0`).textContent = 0;
    } else {
      score1Element.textContent =
        Number(score1Element.textContent) + currentScore;
      currentScore = 0;
      currentPlayer = currentPlayer === 0 ? 1 : 0;
      console.log('current player: ', currentPlayer);
      player0Element.classList.toggle('player--active');
      player1Element.classList.toggle('player--active');
      document.getElementById(`current--1`).textContent = 0;
    }
    if (Number(score1Element.textContent) >= 100) {
      playing = false;
      diceElement.classList.add('hidden');
      console.log('player 2 won');
      document.querySelector('.player--1').classList.add('player--winner');
      document.querySelector('.player--1').classList.remove('player--active');
    }
    if (Number(score0Element.textContent) >= 100) {
      playing = false;
      diceElement.classList.add('hidden');
      console.log('player 1 won');
      document.querySelector('.player--0').classList.add('player--winner');
      document
        .querySelector('.player--0   ')
        .classList.remove('player--active');
    }
  }
});

btnNewElement.addEventListener('click', function () {
  console.log('new game button');
  currentScore = 0;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  diceElement.classList.add('hidden');
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--0').classList.remove('player--active');
  currentPlayer = 0;
  playing = true;
});
