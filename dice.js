const dice = document.getElementById('dice');
const button = document.getElementById('button');

button.onclick = function() {
  document.getElementById('question').style.display = 'none';
  document.getElementById('solution').style.display = 'inline-block';
};

function roll() {
  const sidesNumbers = [1, 1, 1, 2, 2, 4];
  const idx = Math.floor(Math.random() * sidesNumbers.length);
  return sidesNumbers[idx];
}

function printNumber(number) {
  dice.innerHTML = number;
}

dice.onclick = function() {
  const result = roll();
  printNumber(result);
};
