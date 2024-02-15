//Add questions here//
var questions = [
  {
    question: "What is the primary cause of climate change?", Options: ["Solar Variability",
      "Nartural Cycles", "Human Activity", "Orbital Variations"], correct: 2
  },
  {
    question: "Which gas is most significant greenhous gas?", Options: ["Methane", "Nitrous Oxide",
      "Carbon Dioxide", "Chlorofluorocarbons"], correct: 2
  },
  {
    question: "What is the main source of rising sea levels?", Options: ["Glacier Melting", "Thermal Expansion of water",
      "Increased Precipitation", "Deforestation"], correct: 1
  },
  {
    question: "Which sector is the largest emitter of green house gases?", Options: ["Transportation", "Agriculture", "Energy",
      "Industrail prcesses"], correct: 2
  },
  {
    question: "What can individuals do to reduce their carbon footprint?", Options: ["Use more plastic", "Increase meat consumption",
      "Use public transport", "leave lights on"], correct: 2
  },
  {
    question: "Which renewable energy source is most widely used?", Options: ["Solar power", "Wind power", "Hydropower",
      "Geothermal energy"], correct: 2
  },
  {
    question: "What is the goal of the Paris Agreement?", Options: ["Limit gobal rarming to 2 degrees Celsius", "promote coal use",
      "Increase global temperatures", "Reduce biodiversity"], correct: 0
  },
  {
    question: "What phenomenon causes more intense and frequent weather events?", Options: ["EL Niño", "Global Warming",
      "La Niño", "Solar Flares"], correct: 1
  },
  {
    question: "What is the impact of deforestation on the climate?", Options: ["Increases oxygen", "Reduces Biodiversity",
      "Lowers carbon dixide", "Contributes to global warming"], correct: 3
  },
  {
    question: "Which practice helps reduce carbon emissions in agriculture?", Options: ["Monoculture farming",
      "Overgrazing", "Sustainable farming", "Use of chemical fertilizers"], correct: 2
  },
];
//ADD timer//
let currentQuestionIndex = 0;
let timer;
let timerLeft = 10;
let correctAnswer = 0;
let incorrectAnswer = 0;
//call this function to udate the score disply//
function udateScoreDisplay() {
  document.getElementById('correct-score').textContent = correctAnswer;
  document.getElementById('incorrect-answer').textContent = incorrectAnswer;
}
function showResultMessage(isCorrect) {
  var resultMessage = isCorrect ? 'Correct!' : 'Incorrect!';
  console.log(resultMessage);
}
function showNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  } else {
    document.getElementById('quiz-container').style.display = 'none';
    var finalMessage = 'Quiz finished! you got ' + correctAnswer + ' correct out of ' + questions.length + ' questions.';
    console.log(finalMessage);
    document.getElementById('score-container').innerHTML = finalMessage;
    //show the score container with the final message//
    document.getElementById('socre-container').style.display = 'block';
  }
}

function selectOption(optionDiv, answer) {
  let userAnswer = parseInt(optionDiv.dataset.index, 10);

  if (userAnswer === answer) {
    correctAnswer++;
    optionDiv.classList.add('correct');
  } else {
    incorrectAnswer++;
    optionDiv.classList.add('incorrect');
  }
  updateScoreDisplay();
  showResultMessage(userAnswer === answer);
  setTimeout(showNextQuestion, 1000) //delay befour showing next question//
}
//function to display current question and options
function showQuestion(index) {
  var question = questions[index];
  var optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';


  question.Option.forEach(function (option, i) {
    var optionDiv = document.createElement('div');
    optionDiv.textContent = option;
    optionDiv.dataset.index = i;
    optionDiv.onclick = function () { selectOption(optionDiv, questions.correct); };
    optionsContainer.appendChild(optionDiv);
  });

  resetTimer();

  resetTimer();
  //timer function
  function resetTimer() {
    clearInterval(timer);
    timeLeft = 10;

    document.getElementById('time').textContent = timeLeft;
    timer = setInterval(function () {
      timeLeft--;

      document.getElementById('time').textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        showNextQuestion();
      }
    }, 1000);
  }


  //get rid of alert
  // function start the quiz 
  function startQuiz() {
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('restart-button').style.display = 'inline';
    document.getElementById('score-container').style.display = 'block';
    //show the score container
    showQuestion(currentQuestionIndex);
  }

  // function to restart quiz 


  function restartQuiz() {
    currentQuestionIndex = 0
    correctAnswer = 0;
    incorrectAnswer = 0;
    udateScoreDisplay();
    document.getElementById('score-container').style.display = 'none';//hide the score until the quiz starts again 

    //start the quiz
    startQuiz();
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('start-button').addEventListener('click', startQuiz);
    document.getElementById('restart-button').addEventListener('click', restartQuiz);
  });





  var optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';

  question.Options.forEach(function (option, i) {
    var optionDiv = document.createElement('div');
    optionDiv.textContent = option;
    optionDiv.dataset.index = i;
    optionDiv.onclick = function () { selectOption(optionDiv, question.correct); };
    optionsContainer.appendChild(optionDiv);
  });

  resetTimer();
  clearInterval(timer);
  setTimeout(() => {
    showNextQuestion();
  }, 1000);
}



//get rid of alert
// function start the quiz 
function startQuiz() {
  document.getElementById('quiz-container').style.display = 'block';
  document.getElementById('start-button').style.display = 'none';
  document.getElementById('restart-button').style.display = 'inline';
  document.getElementById('score-container').style.display = 'block';
  //show the score container
  showQuestion(currentQuestionIndex);
}

// function to restart quiz 


function restartQuiz() {
  currentQuestionIndex = 0
  correctAnswer = 0;
  incorrectAnswer = 0;
  udateScoreDisplay();
  document.getElementById('score-container').style.display = 'none';//hide the score until the quiz starts again 

  //start the quiz
  startQuiz();
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('start-button').addEventListener('click', startQuiz);
  document.getElementById('restart-button').addEventListener('click', restartQuiz);
});