// Add questions here
var questions = [
  {
    question: "What is the primary cause of climate change?",
    options: ["Solar Variability", "Natural Cycles", "Human Activity", "Orbital Variations"],
    correct: 2
  },
  {
    question: "Which gas is the most significant greenhouse gas?",
    options: ["Methane", "Nitrous Oxide", "Carbon Dioxide", "Chlorofluorocarbons"],
    correct: 2
  },
  {
    question: "What is the main source of rising sea levels?",
    options: ["Glacier Melting", "Thermal Expansion of Water", "Increased Precipitation", "Deforestation"],
    correct: 1
  },
  {
    question: "Which sector is the largest emitter of greenhouse gases?",
    options: ["Transportation", "Agriculture", "Energy", "Industrial Processes"],
    correct: 2
  },
  {
    question: "What can individuals do to reduce their carbon footprint?",
    options: ["Use more plastic", "Increase meat consumption", "Use public transport", "Leave lights on"],
    correct: 2
  },
  {
    question: "Which renewable energy source is most widely used?",
    options: ["Solar power", "Wind power", "Hydropower", "Geothermal energy"],
    correct: 2
  },
  {
    question: "What is the goal of the Paris Agreement?",
    options: ["Limit global warming to 2 degrees Celsius", "Promote coal use", "Increase global temperatures", "Reduce biodiversity"],
    correct: 0
  },
  {
    question: "What phenomenon causes more intense and frequent weather events?",
    options: ["El Niño", "Global Warming", "La Niña", "Solar Flares"],
    correct: 1
  },
  {
    question: "What is the impact of deforestation on the climate?",
    options: ["Increases oxygen", "Reduces biodiversity", "Lowers carbon dioxide", "Contributes to global warming"],
    correct: 3
  },
  {
    question: "Which practice helps reduce carbon emissions in agriculture?",
    options: ["Monoculture farming", "Overgrazing", "Sustainable farming", "Use of chemical fertilizers"],
    correct: 2
  },
];

let currentQuestionIndex = 0;
let timer;
let timerLeft = 10;
let correctAnswer = 0;
let incorrectAnswer = 0;

function updateScoreDisplay() {
  var correctScoreElement = document.getElementById('correct-score');
  var incorrectScoreElement = document.getElementById('incorrect-score');
  if (correctScoreElement && incorrectScoreElement) {
    correctScoreElement.textContent = correctAnswer;
    incorrectScoreElement.textContent = incorrectAnswer;
  }
}

function showResultMessage(isCorrect) {
  var resultMessage = isCorrect ? 'Correct!' : 'Incorrect!';
  // Display or use resultMessage as needed
}

function showNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  } else {
    document.getElementById('quiz-container').style.display = 'none';
    var finalMessage = 'Quiz finished! You got ' + correctAnswer + ' correct out of ' + questions.length + ' questions.';
    console.log(finalMessage);
    document.getElementById('score-container').innerHTML = finalMessage;
    document.getElementById('score-container').style.display = 'block';
  }
}

function selectOption(optionDiv, answer) {
  let userAnswer = parseInt(optionDiv.dataset.index, 10);


  let optionsContainer = document.getElementById('options');
  let selectedOptions = optionsContainer.getElementsByClassName('correct');
  for (let i = 0; i < selectedOptions.length; i++) {
    selectedOptions[i].classList.remove('correct');
  }

  if (userAnswer === answer) {
    correctAnswer++;
    optionDiv.classList.add('correct');
  } else {
    incorrectAnswer++;
    optionDiv.classList.add('incorrect');
  }

  updateScoreDisplay();
  showResultMessage(userAnswer === answer);
  setTimeout(showNextQuestion, 1000);
}

function showQuestion(index) {
  if (index < questions.length) {
    var question = questions[index];
    var optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    var questionDiv = document.createElement('div');
    questionDiv.textContent = question.question;
    optionsContainer.appendChild(questionDiv);

    for (var i = 0; i < question.options.length; i++) {
      var optionDiv = document.createElement('div');
      optionDiv.textContent = question.options[i];
      optionDiv.dataset.index = i;
      (function (q, option) {
        option.onclick = function () { selectOption(option, q.correct); };
      })(question, optionDiv);
      optionsContainer.appendChild(optionDiv);
    }

    resetTimer(); // Call the resetTimer function
  }
}

function resetTimer() {
  clearInterval(timer);
  timerLeft = 10;

  document.getElementById('time').textContent = timerLeft;
  timer = setInterval(function () {
    timerLeft--;
    document.getElementById('time').textContent = timerLeft;
    if (timerLeft <= 0) {
      clearInterval(timer);
      showNextQuestion();
    }
  }, 1000);
}

function startQuiz() {
  document.getElementById('quiz-container').style.display = 'block';
  document.getElementById('start-button').style.display = 'none';
  document.getElementById('restart-button').style.display = 'inline';
  document.getElementById('score-container').style.display = 'block';
  resetTimer(); // Call the resetTimer function
  showQuestion(currentQuestionIndex);
}
function restartQuiz() {
  currentQuestionIndex = 0;
  correctAnswer = 0;
  incorrectAnswer = 0;
  updateScoreDisplay();
  document.getElementById('score-container').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
  showQuestion(currentQuestionIndex);
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('start-button').addEventListener('click', startQuiz);
  document.getElementById('restart-button').addEventListener('click', restartQuiz);
});
