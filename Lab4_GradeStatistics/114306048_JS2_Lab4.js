const mathInput = document.getElementById("mathInput");
const englishInput = document.getElementById("englishInput");
const submitBtn = document.getElementById("submitBtn");
const msg = document.getElementById("msg");

const tableBody = document.getElementById("tableBody");
const mathAvgCell = document.getElementById("mathAvg");
const englishAvgCell = document.getElementById("englishAvg");
const overallAvgCell = document.getElementById("overallAvg");

let rowCount = 0;

function isValidScore(n) {
  return Number.isFinite(n) && n >= 0 && n <= 100;
}

function updateColumnAverages() {
  const rows = tableBody.querySelectorAll("tr");
  const n = rows.length;

  if (n === 0) {
    mathAvgCell.textContent = "-";
    englishAvgCell.textContent = "-";
    overallAvgCell.textContent = "-";
    return;
  }

  let sumMath = 0;
  let sumEnglish = 0;

  rows.forEach((tr) => {
    const math = Number(tr.dataset.math);
    const eng = Number(tr.dataset.english);
    sumMath += math;
    sumEnglish += eng;
  });

  const mathAvg = sumMath / n;
  const englishAvg = sumEnglish / n;

  const overallAvg = (sumMath + sumEnglish) / (2 * n);

  mathAvgCell.textContent = mathAvg.toFixed(2);
  englishAvgCell.textContent = englishAvg.toFixed(2);
  overallAvgCell.textContent = overallAvg.toFixed(2);
}

submitBtn.addEventListener("click", function () {
  msg.textContent = "";

  const math = Number(mathInput.value);
  const english = Number(englishInput.value);

  if (mathInput.value.trim() === "" || englishInput.value.trim() === "") {
    msg.textContent = "Please enter both Math and English grades.";
    return;
  }

  if (!isValidScore(math) || !isValidScore(english)) {
    msg.textContent = "Grades must be numbers between 0 and 100.";
    return;
  }

  rowCount += 1;
  const avg = (math + english) / 2;

  const tr = document.createElement("tr");
  tr.dataset.math = String(math);
  tr.dataset.english = String(english);

  tr.innerHTML = `
    <td>${rowCount}</td>
    <td>${math}</td>
    <td>${english}</td>
    <td>${avg.toFixed(2)}</td>
  `;

  tableBody.appendChild(tr);

  mathInput.value = "";
  englishInput.value = "";
  mathInput.focus();

  updateColumnAverages();
});