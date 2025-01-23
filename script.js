const firstUserInput = document.getElementById("input1");
const secondUserInput = document.getElementById("input2");

const operatorsHolder = document.getElementById("operatorsHolder");

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const exponentationButton = document.getElementById("exponentiation");
const divisionWithRemainderButton = document.getElementById(
  "divisionWithRemainder"
);
const buttons = document.querySelectorAll("#operatorsHolder button");

const submitButton = document.getElementById("submit");

const resultOutput = document.getElementById("result");

let choosenOperator = "+";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    choosenOperator = this.textContent;
    buttons.forEach((el) => el.classList.remove("isActive"));
    this.classList.add("isActive");
  };
}

submitButton.onclick = function () {
  let result;
  const firstUserNumber = Number(firstUserInput.value);
  const secondUserNumber = Number(secondUserInput.value);
  switch (choosenOperator) {
    case "+":
      result = firstUserNumber + secondUserNumber;
      break;
    case "-":
      result = firstUserNumber - secondUserNumber;
      break;
    case "*":
      result = firstUserNumber * secondUserNumber;
      break;
    case "/":
      result = firstUserNumber / secondUserNumber;
      break;
    case "**":
      result = firstUserNumber ** secondUserNumber;
      break;
    case "%":
      result = firstUserNumber % secondUserNumber;
      break;
    default:
      alert("ERROR!!!");
  }
  resultOutput.textContent = result;
};
