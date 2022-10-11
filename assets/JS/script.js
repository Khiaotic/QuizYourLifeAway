var timeLeft = 30;
var timerEl = document.getElementById("timer");
let myQuestions = [
    {
        question: "What is JavaScript",
        choices: ["a programing language", "a scripting language", "static information", "both A and B"],
        correctAnswer: "both A and B",
    },
    {
        question: "A ___ value is one that can be True or False",
        choices: ["number", "string", "boolean", "function"],
        correctAnswer: "boolean",
    },
    {
        question: "All JavaScript identifiers are ",
        choices: ["lowercase", "case sensitive", "uppercase", "random"],
        correctAnswer: "case sensitive",
    },
];
var questionIdx = 0;
var currentQuestion = myQuestions[questionIdx];
let score = 0



// function startQuiz (startGame) {
//     console.log('huh');
//     document.getElementById('quiz-main').style.display='none';
// //start button to start game and questions disappeared
// }



function startGame() {
    score = 0
  console.log("Started");
  // want to hide the initial screen that asks me to start the game
  //Show the next question
  countdown();
  displayQuestion();
}

function countdown() {
  console.log("Timer working");
  let timer = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time Left: " + timeLeft;
    if (timeLeft <= 0) {
      timerEl.textContent = "No time left";
      endQuiz();
      clearInterval(timer);
    }
  }, 1000);
}

function displayQuestion() {
  // //     //what is my current question?
  document.getElementById("question").textContent = currentQuestion.question;
  var buttons = document.getElementsByTagName("button");
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    buttons[i].textContent = currentQuestion.choices[i];
    buttons[i].addEventListener("click", checkAnswer)

}
}


function checkAnswer(event) {
    // event.stopProgation()
    console.log(event.target)
  if (correctAnswer(event.target.textContent)) {
    // alert("Correct");
  } else {
    updateTimer();
    alert("Wrong");
  }

  questionIdx += 1;
  if (checkQuizOver()) {
    console.log("game over");
    endQuiz()
  }
  // {}- if what () is true than'DO THIS'
  else {
    currentQuestion = myQuestions[questionIdx];
    displayQuestion();
  }

  // if im on the last question  display different page
}

function correctAnswer(value) {
    return currentQuestion.correctAnswer == value;
  }
  
function updateTimer() {
  timeLeft -= 5;
} //times decreases when question is answered wrong
// boolean
function checkQuizOver() {
  // returning comparison directly
  if (questionIdx === myQuestions.length || timeLeft <=0) {
    return true;
  }
  return false
}


function endQuiz() {
  console.log("ENDING QUIZ");
  clearTimeout(countdown);

  document.getElementById('quiz-main').style.display='none';

  
  //link to next page (end.html) enter initials
  //hide our timer and the display question
  //add form for the score
  var pastStorage = JSON.parse(localStorage.getItem('old-score'))
  // if(the new score is > pastStorage){
//     localStorage.setItem('old-score',//the new value)
//   }
}

console.log();
// passing checkanswer as an variable rather than calling it

startGame();
