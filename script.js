let operatorPressed = false;
let firstNumber = '';
let secondNumber = '';
let operatorSymbol = '';

const resultDisplay = document.getElementById('result-text');

document
  .querySelector('.calc-buttons')
  .addEventListener('click', function (event) {
    handleClick(event.target.innerText);
  });

function handleClick(symbol) {
  if (isNaN(symbol)) {
    handleOperator(symbol);
  } else {
    handleNumber(symbol);
  }
}

function handleOperator(operator) {
  operatorPressed = true;
  switch (operator) {
    case '÷':
    case '×':
    case '-':
    case '+':
      firstNumber = resultDisplay.innerText;
      operatorSymbol = operator;
      break;
    case '←':
      clearNumber();
      break;
    case 'C':
      clearCalc();
      break;
    case '=':
      calculate();
    default:
  }
}

// Stops 0 from being appended to the front of an input and clears operator pressed status and then puts the user number on the screen
function handleNumber(number) {
  if (resultDisplay.innerText == '0' || operatorPressed) {
    changeDisplay('');
    operatorPressed = false;
  }
  resultDisplay.innerText += number;
}

// Delete a single number from the display and reset it to 0 if the last number is removed
function clearNumber() {
  changeDisplay(resultDisplay.innerText.slice(0, -1));
  if (resultDisplay.innerText == '') {
    changeDisplay('0');
  }
}

// Reset calculator state
function clearCalc() {
  changeDisplay('0');
  firstNumber = '0';
  secondNumber = '0';
  operatorPressed = false;
}

// Take the number that was input before '=' was pressed and apply the arithmetic
function calculate() {
  secondNumber = resultDisplay.innerText;
  let result = calculateResult(firstNumber, secondNumber, operatorSymbol);
  changeDisplay(result);
  // This allows the user to keep calculating after a result
  firstNumber = result;
}

// TODO: stop display from exceeding max width on super large numbers
function changeDisplay(number) {
  resultDisplay.innerText = number;
}

function calculateResult(firstNumber, secondNumber, operator) {
  switch (operator) {
    case '÷':
      return parseInt(firstNumber) / parseInt(secondNumber);
      break;
    case '×':
      return parseInt(firstNumber) * parseInt(secondNumber);
      break;
    case '-':
      return parseInt(firstNumber) - parseInt(secondNumber);
      break;
    case '+':
      return parseInt(firstNumber) + parseInt(secondNumber);
      break;
    default:
      break;
  }
}
