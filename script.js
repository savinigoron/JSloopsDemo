// First example calculate sum

const calculateButton = document.querySelector('.calculate');
let outputSum = document.querySelector('.output');

calculateButton.addEventListener('click', function () {
    const enteredNumberElement = document.getElementById('usernumber');
    const enteredNumber = enteredNumberElement.value;
    let sum = 0;
    for (let i = 0; i <= enteredNumber; i++) {
        sum += i;
    }
    outputSum.textContent = sum;
    outputSum.style.display = 'block';
});
// Second example Hightlight links
const hightlightButton = document.getElementById('hightlight-button');

hightlightButton.addEventListener('click', () => {
    const elements = document.querySelectorAll('a');
    for (let elem of elements) {
        elem.classList.toggle('hightlight');
    }
});
// Third example display user data
const myData = {
    firstName: 'Ihor',
    secondName: 'Savin',
    age: 35
};
const displayDataButton = document.getElementById('displayDataButton');

displayDataButton.addEventListener('click', () => {
    const outpuDataElement = document.querySelector('.output-data');
    outpuDataElement.innerHTML = ''
    for (const key in myData) {
        const li = document.createElement('li');
        li.textContent = key.toUpperCase() + ': ' + myData[key];
        outpuDataElement.append(li);
    }
});
// Fourth example Statistics / Roll the Dice
const rollDiceButton = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor((Math.random() * 6) + 1);
}
rollDiceButton.addEventListener('click', () => {
    const targetNumberInput = document.querySelector('#user-target-number');
    const diceRollsList = document.querySelector('#dice-rolls');
    const enteredNumber = targetNumberInput.value;
    diceRollsList.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;
    while (!hasRolledTargetNumber) {
        const rolledNamber = rollDice();
        if ( enteredNumber ===0 || enteredNumber.length ===0|| enteredNumber>6) {
            alert('Enter the right number between 1 - 6 !');
         }
        numberOfRolls++;
        const newRollListItemElement = document.createElement('li');
        newRollListItemElement.textContent = 'Roll ' + numberOfRolls + ' : ' + rolledNamber;
        diceRollsList.append(newRollListItemElement);
        hasRolledTargetNumber = rolledNamber == enteredNumber;
    }
    const outputRollsElement = document.getElementById('output-rolls');
    const outputNumberElement = document.getElementById('output-number');

    outputNumberElement.textContent = enteredNumber;
    outputRollsElement.textContent = numberOfRolls;

})