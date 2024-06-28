const firstSection = document.querySelector('.first-section');
const secondSection = document.querySelector('.second-section');

const myPara = document.createElement('p');
const anotherPara = document.createElement('p');
const myText = document.createTextNode(`Text to be added later`);
const anotherText = `More text to be added later`;

function myLoadFunction() {

    firstSection.appendChild(myPara);
    myPara.appendChild(myText);

    firstSection.appendChild(anotherPara);
    anotherPara.textContent = anotherText;

    secondSection.remove();
}