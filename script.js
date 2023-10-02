let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSqrt() {
    try {
        const number = parseFloat(currentInput);
        if (!isNaN(number) && number >= 0) {
            const result = Math.sqrt(number);
            document.getElementById('display').value = result;
            currentInput = result.toString();
        } else {
            document.getElementById('display').value = 'Error';
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSquare() {
    try {
        const number = parseFloat(currentInput);
        if (!isNaN(number)) {
            const result = number * number;
            document.getElementById('display').value = result;
            currentInput = result.toString();
        } else {
            document.getElementById('display').value = 'Error';
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}