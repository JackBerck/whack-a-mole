const mole = document.querySelectorAll('.mole');
const dirt = document.querySelectorAll('.dirt');
const scoreboard = document.querySelector('.score');
let previousDirt;
let score;
let end;

function timeRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function moleRandom() {
  const random = Math.floor(Math.random() * dirt.length);
  const randomDirt = dirt[random];
  
  if (randomDirt == previousDirt) {
    moleRandom();
  }
  
  previousDirt = randomDirt;
  return randomDirt;
}

function showMole(dirt) {
  const random = moleRandom();
  const randomTime = timeRandom(300, 1000);
  
  random.classList.add('show');
  setTimeout(function() {
    random.classList.remove('show');
    if (!end) {
      showMole(dirt);
    }
  }, randomTime);  
}

function play() {
  end = false;
  score = 0;
  scoreboard.textContent = 0;
  showMole(dirt);
  setTimeout(function() {
    end = true;
  }, 5000);
}

function bonk(e) {
  score++;
  scoreboard.textContent = score;
  e.parentNode.classList.remove('show');
}

mole.forEach(m => {
  m.addEventListener('click', bonk);
});