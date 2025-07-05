// Function to append value to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to remove the last character
function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}