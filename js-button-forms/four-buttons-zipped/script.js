const answer = document.getElementById('answer');

const first = document.getElementById('first');
const second = document.getElementById('second');

let x, y;

function add() {
    x = first.value;
    y = second.value;
    answer.textContent = `${x} + ${y} = ` + parseInt(x + y);
}

function subtract() {
    x = first.value;
    y = second.value;
    answer.textContent = `${x} - ${y} = ` + (x - y);
}

function multiply() {
    x = first.value;
    y = second.value;
    answer.textContent = `${x} x ${y} = ` + (x * y);
}

function divide() {
    x = first.value;
    y = second.value;
    answer.textContent = `${x} / ${y} = ` + (x / y);
}
