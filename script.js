let string = '';
const buttons = document.querySelectorAll('.button');
const inputField = document.querySelector('input');
const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const inputField = document.querySelector('input');

    if (e.target.innerHTML === '=') {
      try {
        string = evaluateExpression(string);
        inputField.value = string;
      } catch (error) {
        inputField.value = 'Error';
        string = '';
      }
    } else if (e.target.innerHTML === 'C') {
      string = '';
      inputField.value = string;
    } else if (e.target.innerHTML === '√') {
      string += '√';
      inputField.value = string;
    } else if (e.target.innerHTML === 'sin') {
      string += 'sin';
      inputField.value = string;
    } else if (e.target.innerHTML === 'cos') {
      string += 'cos';
      inputField.value = string;
    } else if (e.target.innerHTML === 'tan') {
      string += 'tan';
      inputField.value = string;
    } else if (e.target.innerHTML === '%') {
      try {
        string = (evaluateExpression(string) / 100).toString();
        inputField.value = string;
      } catch (error) {
        inputField.value = 'Error';
        string = '';
      }
    } else if (e.target.innerHTML === 'π') {
      string += Math.PI;
      inputField.value = string;
    } else if (e.target.innerHTML === 'asin') {
      string += 'asin';
      inputField.value = string;
    } else if (e.target.innerHTML === 'acos') {
      string += 'acos';
      inputField.value = string;
    } else if (e.target.innerHTML === 'atan') {
      string += 'atan';
      inputField.value = string;
    } else if (e.target.innerHTML === '⌫') {
      string = string.slice(0, -1); // Remove the last character from the string
      inputField.value = string;
    } else {
      string += e.target.innerHTML;
      inputField.value = string;
    }
  });
});

// Function to evaluate the expression and handle trigonometric functions and square root
function evaluateExpression(expr) {
  // Check for trigonometric functions
  if (expr.startsWith('sin')) {
    const value = eval(expr.substring(3));
    return Math.sin(degToRad(value));
  } else if (expr.startsWith('cos')) {
    const value = eval(expr.substring(3));
    return Math.cos(degToRad(value));
  } else if (expr.startsWith('tan')) {
    const value = eval(expr.substring(3));
    return Math.tan(degToRad(value));
  } else if (expr.startsWith('asin')) {
    const value = eval(expr.substring(4));
    return radToDeg(Math.asin(value));
  } else if (expr.startsWith('acos')) {
    const value = eval(expr.substring(4));
    return radToDeg(Math.acos(value));
  } else if (expr.startsWith('atan')) {
    const value = eval(expr.substring(4));
    return radToDeg(Math.atan(value));
  } else if (expr.startsWith('√')) {
    const value = eval(expr.substring(1));
    return Math.sqrt(value);
  } else {
    return eval(expr);
  }
}

// Function to convert degrees to radians
function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

// Function to convert radians to degrees
function radToDeg(radians) {
  return (radians * 180) / Math.PI;
}


function saveToHistory(calculation) {
  history.push(calculation);
  localStorage.setItem('calculatorHistory', JSON.stringify(history));
}

// function displayHistory() {
//   const historyList = document.getElementById('calculation-history');
//   historyList.innerHTML = '';

//   history.forEach((calculation) => {
//     const listItem = document.createElement('li');
//     listItem.textContent = calculation;
//     historyList.appendChild(listItem);
//   });
// }

// // On page load, display the history
// displayHistory();

// Retrieve the calculator history from Local Storage
// const storedHistory = localStorage.getItem('calculatorHistory');

// // Parse the storedHistory as a JSON object (if it exists)
// const history = storedHistory ? JSON.parse(storedHistory) : [];

// // Now you can access the history array, which contains the previously saved calculations
// console.log(history);
