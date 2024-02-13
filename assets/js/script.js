//Add questions here//
var questions = [
    { question: "What is the primary cause of climate change?", Options: ["Solar Variability",
     "Nartural Cycles", "Human Activity", "Orbital Variations"], correct: 2 },
     {question: "Which gas is most significant greenhous gas?",Options:["Methane","Nitrous Oxide",
      "Carbon Dioxide", "Chlorofluorocarbons"],correct:2},
      {question:"What is the main source of rising sea levels?", options:["Glacier Melting", "Thermal Expansion of water",
     "Increased Precipitation", "Deforestation"],correct:1},
      {question:"Which sector is the largest emitter og green house gases?",Options:["Transportation","Agriculture", "Energy",
     "Industrail prcesses"],correct:2},
      {question:"What can individuals do to reduce their carbon footprint?", Options:["Use more plastic", "Increase meat consumption",
     "Use public transport", "leave lights on"],correct:2},
      {question:"Which renewable energy source is most widely used?", Options:["Solar power","Wind power", "Hydropower", 
    "Geothermal energy"],correct:2},
      {question:"What is the goal of the Paris Agreement?", Options:["Limit gobal rarming to 2 degrees Celsius", "promote coal use",
     "Increase global temperatures", "Reduce biodiversity"],correct:0},
      {question:"What phenomenon causes more intense and frequent weather events?", Options:["EL Niño", "Global Warming",
     "La Niño", "Solar Flares" ],correct:1},
      {question:"What is the impact of deforestation on the climate?",Options:["Increases oxygen", "Reduces Biodiversity",
     "Lowers carbon dixide", "Contributes to global warming"],correct:3},
      {question:"Which practice helps reduce carbon emissions in agriculture?",Options:["Monoculture farming",
     "Overgrazing", "Sustainable farming", "Use of chemical fertilizers"],correct:2},
];
//ADD timer//
var currentQuestionIndex = 0;
var timer;
var timerleft = 10;
function startQuiz(){
  document.getElementById('quiz-container').style.display = 'block';
  document.getElementById('start-button').style.display = 'inline';
  showQuestion(currentQuestionIndex);
}
function showQuestion(index){
  console.log('Current Index:', index);
  console.log('Questions Array:',questions);
  if(questions && questions[index])
  {
    questions[index].Options.forEach(function(option, i){


    });
  } else{
    console.log('Questions array is not defined or current index is out of bounds');
  }
}
  var optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';

questions.Options.forEach(function(option, i){
  var optionDiv = document.createElement('div');
  optionDiv.textContent = option;
  optionDiv.onclick = function(){SelectOption(i);};
  optionsContainer.appendChild(optionDiv);
});
resetTimer();

function SelectOption(index){
  clearInterval(timer);
  if(index === questions[currentQuestionIndex].correct){
    alert('Correct!');
  } else {
    alert('Incorrect!');
  }
  showNextQuestion();
  }
  function resetTimer(){
    clearInterval(timer);
    timeLeft = 10;
  
  document.getElementById('time').textContent = timeLeft;
timer = setInterval(function(){
  timeLeft--;
  document.getElementById('time').textContent = timeLeft;
  if (timeLeft <=0){
    clearInterval(timer);
    alert('Time is up!');
    showNextQuestion
  }
}, 1000);
}
function showNextQuestion(){
  if (currentQuestionIndex< questions.length - 1){
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  } else{
    alert('Quiz finished!');
    restartQuiz();
  }
 }
 function restartQuiz(){
  currentQuestionIndex = 0
  showNextQuestion(currentQuestionIndex);
  resetTimer();
 }
 document.getElementById('start-button').addEventListener('click',startQuiz);
 document.getElementById('restart-button').addEventListener('click',restartQuiz);