let balance = 2500;

const amount = document.getElementById('amount');
const checkBtn = document.getElementById('check');
const withdrawBtn = document.getElementById('withdraw');
const depositBtn = document.getElementById('deposit');
const info = document.querySelector('.info');

function checkBalance() {
  updateMessage(`Your remaining balance is $${balance.toFixed(2)}`);
}

function withdraw(amt) {
  if (amt > balance) {
    updateMessage(`Insufficient Amount`);
    info.style.color = '#ff0000';
  } else if (typeof(amt) !== 'number' || isNaN(amt) || amt <= 0) {
    updateMessage(`Invalid Amount. Please Enter a valid number`);
    info.style.color = '#ff0000';
  } else {
    balance = balance - amt;
    updateMessage('');
    alert(`Withdrawal Successful! Current Balance: $${balance.toFixed(2)}`);
    setTimeout(handleNewTransaction(), 5000);
  }
}

function deposit(amt) {
  if (typeof(amt) !== 'number' || isNaN(amt) || amt <= 0)  {
    updateMessage(`Invalid Amount. Please Enter a valid number`);
    info.style.color = '#ff0000';
  } else {
    balance = balance + amt;
    updateMessage('');
    alert(`Deposit Successful! Current Balance: $${balance.toFixed(2)}`);
    setTimeout(handleNewTransaction(), 5000);
  }
}

function reset() {
  balance = 2500;
  updateMessage('Hello! Welcome to my ATM');
}

function updateMessage(message) {
  info.textContent = message;
  clearInput();
}

function clearInput() {
  amount.focus();
  amount.value = '';
  info.style.color = '#000000';
}

function handleNewTransaction() {
  let ans;
  do {
    ans = prompt(`Do you want to make another transaction?
                  \n'Y' for Yes (keep going)\n 'N' for No (logout)\n`);
  } while(ans.toUpperCase() !== 'Y' && ans.toUpperCase() !== 'N');
  
  if (ans === 'N') reset();
}