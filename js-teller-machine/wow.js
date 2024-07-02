let balance = 2500.00;

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    const messageElement = document.getElementById('message');
    const errorElement = document.getElementById('error');
    messageElement.innerHTML = '';
    errorElement.innerHTML = '';
    
    if (isNaN(amount) || amount <= 0) {
        errorElement.innerHTML = 'Invalid deposit amount!';
    } else {
        balance += amount;
        messageElement.innerHTML = `Deposit successful! New balance: $${balance.toFixed(2)}`;
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    const messageElement = document.getElementById('message');
    const errorElement = document.getElementById('error');
    messageElement.innerHTML = '';
    errorElement.innerHTML = '';
    
    if (isNaN(amount) || amount <= 0) {
        errorElement.innerHTML = 'Invalid withdrawal amount!';
    } else if (amount > balance) {
        errorElement.innerHTML = 'Insufficient balance!';
    } else {
        balance -= amount;
        messageElement.innerHTML = `Withdrawal successful! New balance: $${balance.toFixed(2)}`;
    }
}

function checkBalance() {
    const messageElement = document.getElementById('message');
    const errorElement = document.getElementById('error');
    messageElement.innerHTML = '';
    errorElement.innerHTML = '';
    messageElement.innerHTML = `Current balance: $${balance.toFixed(2)}`;
}

function startATM() {
    let continueTransaction = true;
    
    while (continueTransaction) {
        const choice = prompt('Enter 1 to Deposit, 2 to Withdraw, 3 to Check Balance, 4 to Exit:');
        
        switch (choice) {
            case '1':
                deposit();
                break;
            case '2':
                withdraw();
                break;
            case '3':
                checkBalance();
                break;
            case '4':
                continueTransaction = false;
                alert('Thank you for using our ATM service!');
                break;
            default:
                alert('Invalid choice! Please enter a number between 1 and 4.');
        }
    }
}

function deposit() {
    const amount = parseFloat(prompt('Enter amount to deposit:'));
    if (isNaN(amount) || amount <= 0) {
        alert('Invalid deposit amount!');
    } else {
        balance += amount;
        alert(`Deposit successful! New balance: $${balance.toFixed(2)}`);
    }
}

function withdraw() {
    const amount = parseFloat(prompt('Enter amount to withdraw:'));
    if (isNaN(amount) || amount <= 0) {
        alert('Invalid withdrawal amount!');
    } else if (amount > balance) {
        alert('Insufficient balance!');
    } else {
        balance -= amount;
        alert(`Withdrawal successful! New balance: $${balance.toFixed(2)}`);
    }
}

function checkBalance() {
    alert(`Current balance: $${balance.toFixed(2)}`);
}
