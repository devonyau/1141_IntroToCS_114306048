const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const opEl = document.getElementById("op");
const calcBtn = document.getElementById("calcBtn");

const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

function calculate() {
  errorEl.textContent = "";
  resultEl.textContent = "-";

  const v1 = num1El.value.trim();
  const v2 = num2El.value.trim();

  if (v1 === "" || v2 === "") {
    errorEl.textContent = "Invalid input: please enter both numbers.";
    return;
  }

  const a = Number(v1);
  const b = Number(v2);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    errorEl.textContent = "Invalid input: please enter valid numbers.";
    return;
  }

  const op = opEl.value;
  let ans;

  if (op === "+") ans = add(a, b);
  else if (op === "-") ans = subtract(a, b);
  else if (op === "*") ans = multiply(a, b);
  else if (op === "/") ans = divide(a, b);

  if (ans === null) {
    errorEl.textContent = "Invalid input: division by zero is not allowed.";
    return;
  }

  resultEl.textContent = ans.toFixed(2);
}

calcBtn.addEventListener("click", calculate);