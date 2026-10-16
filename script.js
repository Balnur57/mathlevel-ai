
const questions = {
  Foundation: {
    question: "Solve: x + 3 = 7",
    answer: 4,
    hint: "Subtract 3 from both sides.",
    solution: "x + 3 = 7, so x = 7 - 3 = 4."
  },
  Standard: {
    question: "Solve: 3x + 5 = 20",
    answer: 5,
    hint: "Subtract 5 first, then divide by 3.",
    solution: "3x = 15, so x = 5."
  },
  Advanced: {
    question: "Solve: 2(x + 3) = 18",
    answer: 6,
    hint: "Divide both sides by 2 first.",
    solution: "x + 3 = 9, so x = 6."
  }
};

let currentLevel = "Foundation";

function setLevel(level) {
  currentLevel = level;

  document.getElementById("level").textContent = level;
  document.getElementById("question").textContent =
    questions[level].question;

  document.getElementById("answer").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("hint").textContent = "";
}

function checkAnswer() {
  const value = document.getElementById("answer").value;
  const result = document.getElementById("result");

  if (value.trim() === "") {
    result.textContent = "Please enter your answer.";
    return;
  }

  if (Number(value) === questions[currentLevel].answer) {
    result.textContent = "Correct! Well done!";
  } else {
    result.textContent = "Not quite. Try again!";
  }
}

function showHint() {
  document.getElementById("hint").textContent =
    questions[currentLevel].hint;
}
