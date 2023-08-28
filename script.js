'use strict';
const player1Total = document.querySelector('#score--0');
const player1Current = document.querySelector('#current--0');
const player1Background = document.querySelector('.player--0');

const player2Total = document.querySelector('#score--1');
const player2Current = document.querySelector('#current--1');
const player2Background = document.querySelector('.player--1');
const dice = document.querySelector('.dice');

const newGameBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
let currentScore = 0;
let totalScoreP1 = 0;
let totalScoreP2 = 0;
function newGame() {
  player1Current.textContent = '0';
  player1Total.textContent = '0';
  player2Current.textContent = '0';
  player2Total.textContent = '0';
  dice.style.display = 'none';
  player1Background.classList.add('player--active');
  player2Background.classList.remove('player--active');
}

rollBtn.addEventListener('click', function () {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.style.display = 'block';

  dice.src = `dice-${randomNumber}.png`;

  if (randomNumber !== 1) {
    currentScore += randomNumber;
  } else {
    currentScore = 0;
    player1Current.textContent = 0;
    player2Current.textContent = 0;
    switchPlayer();
  }

  if (player1Background.classList.contains('player--active')) {
    player1Current.textContent = currentScore;
  } else {
    player2Current.textContent = currentScore;
  }
});

newGameBtn.addEventListener('click', function () {
  player1Current.textContent = '0';
  player1Total.textContent = '0';
  player2Current.textContent = '0';
  player2Total.textContent = '0';
  dice.style.display = 'none';
  player2Background.classList.remove('player--active');
  player1Background.classList.add('player--active');
  currentScore = 0;
});

holdBtn.addEventListener('click', function () {
  if (player1Background.classList.contains('player--active')) {
    totalScoreP1 += currentScore;
    player1Total.textContent = totalScoreP1;
    currentScore = 0;
    player1Current.textContent = 0;
    if (totalScoreP1 >= 100) {
      player1Background.classList.add('player--winner');
    } else {
      switchPlayer();
    }
  } else {
    totalScoreP2 += currentScore;
    player2Total.textContent = totalScoreP2;
    currentScore = 0;
    player2Current.textContent = 0;
    if (totalScoreP2 >= 100) {
      player2Background.classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

function switchPlayer() {
  if (player1Background.classList.contains('player--active')) {
    player1Background.classList.remove('player--active');
    player2Background.classList.add('player--active');
    player2Current.textContent = 0;
    player1Current.textContent = 0;
  } else {
    player2Background.classList.remove('player--active');
    player1Background.classList.add('player--active');
    player2Current.textContent = 0;
    player1Current.textContent = 0;
  }
}
if (totalScoreP1 >= 100 || totalScoreP2 >= 100) {
}
