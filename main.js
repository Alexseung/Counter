let decreaseBtn = document.getElementById('decrease-btn');
let increaseBtn = document.getElementById('increase-btn');
let resetBtn = document.getElementById('reset-btn');
let number = document.getElementById('value');
let currentNum = 0;
decreaseBtn.addEventListener('click', decrease);
increaseBtn.addEventListener('click', increase);
resetBtn.addEventListener('click', reset);

function decrease() {
  currentNum--;
  console.log(currentNum);
  number.textContent = currentNum;
}

function increase() {
  currentNum++;
  console.log(currentNum);
  number.textContent = currentNum;
}

function reset() {
  currentNum = 0;
  number.textContent = currentNum;
}
