const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Which is a JavaScript framework?",
    options: ["React", "Laravel", "Django", "Flask"],
    answer: "React"
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("div");
    btn.textContent = opt;
    btn.classList.add("option");
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[current].answer;
  if (selected === correct) {
    alert("Correct!");
    score++;
  } else {
    alert("Wrong! Correct answer is: " + correct);
  }
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question").textContent = "Quiz Finished!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("score").textContent = `Score: ${score}/${questions.length}`;
  }
}

window.onload = loadQuestion;
