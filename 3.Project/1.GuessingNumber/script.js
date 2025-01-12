// random number between 1 and 20 without deicmal part
const randomNumber = () => Math.trunc(Math.random() * 20 + 1);

let number = randomNumber();
let score = 20;
let highScore = 0;

// function for manipulating html class named message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// function for manipulating html class named score
const setScore = (score) => {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when input is empty
  if (!guess) {
    displayMessage('⛔ No Number!');
  }
  // when input is between 1 and 20
  else if (guess > 0 && guess < 21) {
    if (score > 0) {
      // when player win
      if (guess === number) {
        document.body.style.background = '#16423C';
        displayMessage('🎉 Correct Number');
        document.querySelector('.number').textContent = guess;

        // Highscore
        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }
      }
      // when guess is wrong
      else if (guess !== number) {
        displayMessage(guess > number ? '📈 Too HIGH !' : '📉 Too LOW !');
        score--;
        setScore(score);
      }
    }
    // when player lost the game
    else if (score < 1) {
      document.body.style.background = '#740938';
      score = 0;
      setScore(score);
      displayMessage('💥You Lost the game!');
    }
  }
  // when input is not between 1 and 20
  else {
    displayMessage('Enter Number between 1 and 20');
  }
});

// again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = randomNumber();
  setScore(score);
  displayMessage('Start guessing');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.background = '#222';
});
