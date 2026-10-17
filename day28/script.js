const btnNumber = document.getElementById("countInputs");
const btnInputs = document.getElementById("btn");
const inputs = document.getElementById("inputs");
const btnCalculation = document.getElementById("calculation");
const result = document.getElementById("result");

function totalScores(scores) {
  let total = 0;

  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }

  return total;
}

function printScores(scores) {
  let output = "<h3>Student Scores</h3>";

  for (let i = 0; i < scores.length; i++) {
    output += `<p>Score ${i + 1}: ${scores[i]}</p>`;
  }

  return output;
}

btnInputs.addEventListener("click", () => {
  const count = Number(btnNumber.value);

  if (btnNumber.value === "" || !Number.isInteger(count) || count < 1) {
    result.innerHTML = "<p>Please enter a valid number of scores.</p>";
    inputs.innerHTML = "";
    btnCalculation.hidden = true;
    return;
  }

  inputs.innerHTML = "";
  result.innerHTML = "";

  for (let i = 0; i < count; i++) {
    inputs.innerHTML += `
        <label for="score${i}">Score ${i + 1}:</label>
        <input type="number" id="score${i}" min="0" max="100" step="any">
        <br><br>
    `;
  }

  btnCalculation.hidden = false;
});

btnCalculation.addEventListener("click", () => {
  const count = Number(btnNumber.value);
  const scores = [];

  for (let i = 0; i < count; i++) {
    const scoreInput = document.getElementById(`score${i}`);

    if (
      scoreInput.value.trim() === "" ||
      !Number.isFinite(Number(scoreInput.value)) ||
      Number(scoreInput.value) < 0 ||
      Number(scoreInput.value) > 100
    ) {
      result.innerHTML = `<p>Please enter a valid score between 0 and 100 for Score ${i + 1}.</p>`;
      return;
    }

    const score = Number(scoreInput.value);
    scores.push(score);
  }

  const total = totalScores(scores);
  const average = total / scores.length;

  let status;

  if (average >= 50) {
    status = "Pass";
  } else {
    status = "Fail";
  }

  result.innerHTML = `
    ${printScores(scores)}
    <h3>Total Score: ${total}</h3>
    <h3>Average Score: ${average.toFixed(2)}</h3>
    <h3>Result: ${status}</h3>
`;
});
