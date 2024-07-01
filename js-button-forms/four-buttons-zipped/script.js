const answer = document.getElementById('answer');

const first = document.getElementById('first');
const second = document.getElementById('second');

function myFunction(operator) {
    let x = first.value;
    let y = second.value;
    let ans;

    switch (operator) {
        case '+':
            add();
            break;
        case '-':
            subtract(x,y);
            break;
        case '*':
            ans = multiply(x,y);
            answer.textContent = `${x} ${operator} ${y} = ${ans}`;
            break;
        case '/':
            ans = divide(x,y);
            answer.textContent = `${x} ${operator} ${y} = ${ans}`;
            break;
    }
}

function add() {
    let x = parseInt(first.value);
    let y = parseInt(second.value);
    answer.textContent = `${x} + ${y} = ${(x + y)}`;
}

function subtract(x,y) {
    answer.textContent = `${x} - ${y} = ` + (x - y);
}

function multiply(x,y) {
    // answer.textContent = `${x} x ${y} = ` + (x * y);
    return x * y;
}

function divide(x,y) {
    // answer.textContent = `${x} / ${y} = ` + (x / y);
    return x / y;
}
