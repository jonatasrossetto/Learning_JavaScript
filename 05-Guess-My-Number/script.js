'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number';
document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 15;
document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);
*/

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('body').style.backgroundColor = '#000000';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = 0;

document.querySelector('.again').addEventListener('click', function () {
  console.log('again');
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '!! No number!!';
    // this executes when there is no input
  } else if (guess === secretNumber && score > 0) {
    //document.querySelector('.message').textContent = '!!! Correct number !!!';
    displayMessage('!!! Correct number !!!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#9acd32';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // this executes when the user guesses the secret number
  } else if (guess > secretNumber && score > 0) {
    document.querySelector('.message').textContent = '!!! Too High !!!';
    score--;
    document.querySelector('.score').textContent = score;
    // this executes when the guess is higher than the secret number
  } else if (guess < secretNumber && score > 0) {
    document.querySelector('.message').textContent = '!!! Too Low !!!';
    score--;
    document.querySelector('.score').textContent = score;
    // this executes when the guess is lower than the secret number
  } else {
    document.querySelector('.message').textContent = '!!! You Lost !!!';
    // this executes when the score is equal or lower than 0
  }
});
