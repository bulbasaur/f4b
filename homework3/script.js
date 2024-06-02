document.getElementById('operand1').addEventListener('blur', (event) => {
    const operandValue = parseFloat(event.target.value);
    storeValueInGlobalScope('operand1', operandValue);
});

document.getElementById('operand2').addEventListener('blur', (event) => {
    const operandValue = parseFloat(event.target.value);
    storeValueInGlobalScope('operand2', operandValue);
});

document.getElementById('operator').addEventListener('blur', (event) => {
    const operatorValue = String(event.target.value);
    storeValueInGlobalScope('operator', operatorValue);
});


document.getElementById('calculate-btn').addEventListener('click', (event) => {
    event.preventDefault();

    const operand1 = getValueFromGlobalScope('operand1');
    const operand2 = getValueFromGlobalScope('operand2');
    const operator = getValueFromGlobalScope('operator');

    let result;

    const calculator = new Calculator(operand1, operand2, operator);
    try {
        result = calculator.calculate();
    } catch (error) {
        alert(error.message);
        return;
    }

    alert(`The result is: ${result}`);
});   

class Calculator {
    constructor (operand1, operand2, operator) {
        this.operand1 = parseFloat(operand1);
        this.operand2 = parseFloat(operand2);
        this.operator = operator;
    }

    calculate() {
        if (isNaN(this.operand1)) {
            throw new Error('Invalid Operand 1');
        }

        if (isNaN(this.operand2)) {
            throw new Error('Invalid Operand 2');
        }

        switch (this.operator) {
            case '+':
                return this.operand1 + this.operand2;
            case '-':
                return this.operand1 - this.operand2;
            case '*':
                return this.operand1 * this.operand2;
            case '/':
                return this.operand1 / this.operand2;
            default:
                throw new Error('Invalid operator');
        }
    }
}

// Helper functions
const localStorageCalculatorKey = 'calculator';

function storeValueInGlobalScope(name, value) {
    calculatorLocalStoreObject = JSON.parse(localStorage.getItem(localStorageCalculatorKey)) ?? {};
    calculatorLocalStoreObject[name] = value;

    localStorage.setItem(localStorageCalculatorKey, JSON.stringify(calculatorLocalStoreObject));
}

function getValueFromGlobalScope(name) {
    calculatorLocalStoreObject = JSON.parse(localStorage.getItem(localStorageCalculatorKey)) ?? {};

    return calculatorLocalStoreObject[name];
}

function removeValueFromGlobalScope(name) {
    calculatorLocalStoreObject = JSON.parse(localStorage.getItem(localStorageCalculatorKey)) ?? {};
    delete calculatorLocalStoreObject[name];

    localStorage.setItem(localStorageCalculatorKey, JSON.stringify(calculatorLocalStoreObject));
}

const updateDisplay = () => {
    const operand1 = getValueFromGlobalScope('calc_operand1') ?? '';
    const operand2 = getValueFromGlobalScope('calc_operand2') ?? '';
    const operator = getValueFromGlobalScope('calc_operator') ?? '';

    let displayText = `${operand1} ${operator} ${operand2}`;

    if (getValueFromGlobalScope('calc_result')) {
        displayText += ` = ${getValueFromGlobalScope('calc_result')}`;
    }

    const displayElement = document.getElementById('display');
    displayElement.innerHTML = displayText;
}

updateDisplay();

document.querySelectorAll('.numpad-operand-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const value = event.target.innerText;
        const currentOperand = Boolean(getValueFromGlobalScope('hasFirstOperand')) ? 'calc_operand2' : 'calc_operand1';

        storeValueInGlobalScope(
            currentOperand,
            (getValueFromGlobalScope(currentOperand) ?? '') + value
        );

        updateDisplay();
    });
});

document.querySelectorAll('.numpad-operator-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const value = event.target.innerText;
        
        // Check if the first operand is entered
        if (!getValueFromGlobalScope('calc_operand1')) {
            alert('Please enter the first operand');
            return;
        }

        storeValueInGlobalScope('calc_operator', value);
        storeValueInGlobalScope('hasFirstOperand', true);
        updateDisplay();
    });
});

document.getElementById('numpad-calculate-btn').addEventListener('click', (event) => {
    event.preventDefault();

    const operand1 = getValueFromGlobalScope('calc_operand1');
    const operand2 = getValueFromGlobalScope('calc_operand2');
    const operator = getValueFromGlobalScope('calc_operator');

    let calc_result;

    const calculator = new Calculator(operand1, operand2, operator);
    try {
        calc_result = calculator.calculate();
        storeValueInGlobalScope('calc_result', calc_result);
    } catch (error) {
        alert(error.message);
        return;
    }

    updateDisplay();

    // Alert was invoked before the display was updated :(
    setTimeout(function () {
        alert(`The result is: ${calc_result}`);
    }, 1);
});

document.getElementById('numpad-clear-btn').addEventListener('click', (event) => {
    event.preventDefault();

    removeValueFromGlobalScope('calc_operand1');
    removeValueFromGlobalScope('calc_operand2');
    removeValueFromGlobalScope('calc_operator');
    removeValueFromGlobalScope('calc_result');
    removeValueFromGlobalScope('hasFirstOperand');
    updateDisplay();
});

document.getElementById('show-localStorage-btn').addEventListener('click', (event) => {
    event.preventDefault();

    const localStorageDataHolder = document.getElementById('localStorage-data');
    const localStorageContent = JSON.parse(localStorage.getItem(localStorageCalculatorKey) ?? '{}');

    localStorageDataHolder.innerText = '';

    for (const [key, value] of Object.entries(localStorageContent)) {
        localStorageDataHolder.innerText += `${key}: ${value}\n`;
    }
    
    console.log(localStorageContent);
});

document.getElementById('clear-localStorage-btn').addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.clear();
    document.getElementById('localStorage-data').innerText = '';
});