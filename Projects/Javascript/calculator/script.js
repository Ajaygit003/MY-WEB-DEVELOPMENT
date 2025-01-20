let inputField = document.getElementById("user_input");
let buttons = document.querySelectorAll(".butn");
let solutionButton = document.querySelector(".solution");
let resetButton = document.querySelector(".reset");
let clearButton = document.querySelector(".clear");

// Append clicked button's value to the input field
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    let value = buttons[i].innerHTML;

    // Prevent starting with multiple zeros
    if ((value === '0' || value === "00" || value === "÷" || value === "×" || value === "%" || value === "=") && inputField.value === '') {
        return;
    }else {
        inputField.value += value;
    }
  };
}
// Evaluate the expression
solutionButton.onclick = function () {
  let expression = inputField.value;
  expression = expression.replace(/÷/g, '/').replace(/×/g, '*');
  inputField.value = eval(expression);
};
// Reset the input field
resetButton.onclick = function () {
  inputField.value = "";
};
// Remove the last character
clearButton.onclick = function () {
  inputField.value = inputField.value.slice(0, -1);
};
