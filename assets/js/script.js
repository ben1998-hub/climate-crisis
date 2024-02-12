//Add questions here//
var questions = [
    { question: "What is the primary cause of climate change?", Options: ["Solar Variability",
     "Nartural Cycles", "Human Activity", "Orbital Variations"], correct: 2 },
     {question: "Which gas is most significant greenhous gas?",Options:["Methane","Nitrous Oxide",
      "Carbon Dioxide", "Chlorofluorocarbons"],correct:2},
      {question:"Wath is the main source of rising sea levels?", options:["Glacier Melting", "Thermal Expansion of water",
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
function showQuestion(index){
  var question = questions[index];
  document.getElementById('question').textContent = question.question;
   for (var i = 1; i <= 4; i++){
    document.getElementById('option'+i).textContent = question.options[i-1];
  }
  resetTimer();
}
function resetTimer(){
  clearInterval(timer);
  timerLeft = 10;

document.getElementById('time').textContent = timerLeft;
timer = setInterval(function(){
  timerleft--;
  document.getElementById('time').textContent = timerLeft;
  if (timerLeft <=0){
    clearInterval(timer);
    alert('Time is up!');
    showNextQuestion();
  }
 }, 1000);
}
function restartQuiz(){
  currentQuestionIndex = 0;
  showQuestion(currentQuestionIndex);
}
document.getElementById('next-button').addEventListener('click', showNextQuestion);
document.getElementById('restart-button').addEventListener('click',restartQuiz);
window.onload = function(){
  showQuestion(currentQuestionIndex);
}

