'use strict';

/* document.querySelector('.message').textContent = ' 🎉 Correct Number!';

document.querySelector('.number').textContent = 34;
document.querySelector('.score').textContent = 400;

document.querySelector('.guess').value = 23;
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

//  function to factoring the message 
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
}


// listen to click  and function
document.querySelector('.check').addEventListener('click', function () {

  let guess = Number(document.querySelector('.guess').value);

  //   When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = ' No number 😥!';
    displayMessage(' No number 😥!')


    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('Congratulation 🎉🥳');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;

    }

  }

  // when guess is wrong // refactoring Don't Repeat Yourself   
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high! ⏫' : 'too low ⏬ ');
      score--;
      displayScore(score)
    } else {
      displayMessage('You lose te game ☹');
      displayScore(0);
    }
  }
}



  /*   //  when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high ⏫';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose te game ☹';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low ⏬';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose te game ☹';
      document.querySelector('.score').textContent = 0;
    }
  } */
);


// listen to "again" button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing...');
  document.querySelector('.number').textContent = '?';
  displayScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';

})