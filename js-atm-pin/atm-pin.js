const PIN = '1234';

const transactionForm = document.getElementById('transactionForm');
const pinForm = document.getElementById('pinForm');
const password = document.getElementById('password');
const info = document.getElementById('info');

const button = document.querySelector('button');

button.addEventListener('click', enterPIN());

function enterPIN() {
  let enteredPIN = password.value;
  if (enteredPIN === PIN) {
    pinForm.style.display = 'none';
    transactionForm.style.display = 'block';
  } else {
    alert('Incorrect PIN');
  }
}

function changeInfo(msg) {
  info.innerHTML = msg;
}