let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when input is empty
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
  //   when input is between 1 and 20
  else if (guess > 0 && guess < 21) {
    if (score > 0) {
      // when player win
      if (guess === number) {
        document.body.style.background = '#16423C';
        document.querySelector('.message').textContent = '🎉 Correct Number';
        document.querySelector('.number').textContent = guess;
        // Highscore
        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }
      }
      // when guess is wrong
      else if (guess > number) {
        document.querySelector('.message').textContent = '📈 Too HIGH !';
        score--;
        document.querySelector('.score').textContent = score;
      }
      // when too low
      else if (guess < number) {
        document.querySelector('.message').textContent = '📉 Too LOW !';
        score--;
        document.querySelector('.score').textContent = score;
      }
    }
    // when player lost the game
    else if (score < 1) {
      document.body.style.background = '#740938';
      score = 0;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '💥You Lost the game!';
    }
  }
  // when input is not between 1 and 20
  else {
    document.querySelector('.message').textContent =
      'Enter Number between 1 and 20';
  }
});

// again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.background = '#222';
});
