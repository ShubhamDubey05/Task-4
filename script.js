// Function to append values to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to evaluate the expression
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Using eval for simplicity, but be careful with security.
    } catch (error) {
        display.value = 'Error';
    }
}
