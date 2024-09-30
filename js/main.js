let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let gameActive = true; 

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
  if (!gameActive) return; 
  const guess = Number(document.querySelector('.guess').value);
  // تحقق من صحة الإدخال
  if (!guess || guess < 1 || guess > 20) {
    displayMessage('⛔ Invalid number!');
  } 
  else if (guess === secretNumber) {
    // عندما يكون التخمين صحيحًا
    displayMessage('🎉 Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // تحديث الـ highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    gameActive = false; // إنهاء اللعبة بعد التخمين الصحيح
  } 
  else if (guess !== secretNumber) {
    // التخمين خاطئ
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } 
    else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
      gameActive = false; // إنهاء اللعبة بعد خسارة النقاط
    }
  }
});

//"Again"
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  gameActive = true; // إعادة تفعيل اللعبة

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '100px';
});
  
