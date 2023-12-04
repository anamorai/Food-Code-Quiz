
// Target the start button 
let startbtn = document.getElementById('start')
// Targetting the start screen
let startscreen = document.getElementById('start-screen')
// Target question ID
let questions = document.getElementById('questions')

// Questions
const quizQuestion = [
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<sripting>", "<javascript>", "<js>"],
        answer: "&lt;script&gt;"
    },
    {
        title: "The external JavaScript file must contain the <script> tag.",
        choices: ["True", "False"],
        answer: "False"
    },
    {
        title: "In Javascript, what does a string refer to?",
        choices: ["Any text inside double or single quotes", "Any questions inside quotes", "A row of numbers", "Any instruction stored in the code"],
        answer: "Any text inside double or single quotes"
    },
    {
        title: "An ___ is an object that can store multiple values at once",
        choices: ["string", "variable", "array", "object"],
        answer: "array"
    },
    {
        title: "An ____ is a procedure in JavaScript that waits for an event to occur.",
        choices: ["listener", "event listener", "event alert", "listening to event"],
        answer: "event listener"
    },
];

function startQuiz(event){
    event.preventDefault()

// First we need to hide what is in the start screen
startscreen.classList.remove('start')
startscreen.classList.add('start','hide')

// Now we need the questions title to appear
let questionDiv=document.createElement('div')
let paragraghDiv=document.createElement('p')
paragraghDiv.textContent=quizQuestion[0].title
questionDiv.append(paragraghDiv)

// Now the question class must change so the question appeara
questions.classList.remove('hide')
questions.classList.add('show')
questions.append(questionDiv)

let buttonDiv=document.createElement('div')

// Now we need the question choices
let questionChoice=quizQuestion[0].choices
for (let i = 0; i < questionChoice.length; i++) {
   let choicebtn=document.createElement('button')
//  Setting ID or class for styling in CSS
   choicebtn.setAttribute('id','choices')
   choicebtn.setAttribute('class','choices')

   choicebtn.textContent=questionChoice[i]

   choicebtn.addEventListener('click',function(event){
    event.preventDefault()
    console.log(event.target.innerHTML)
   })

   buttonDiv.append(choicebtn) 
}
questions.append(buttonDiv)


}
// Add event listener to the start button 
startbtn.addEventListener('click',startQuiz)

















// // Start the quiz with a timer set to 75. Timer left also will be the final score.
// var timeLeft = 75;
// var timerID;
// var timerEl = document.getElementById("timer");
// var startButton = document.getElementById("start-btn");
// var nextButton = document.getElementById("next-btn");
// var questionContainerEl = document.getElementById("question-container");
// var startContainerEl = document.getElementById("start-container");
// var questionEl = document.getElementById("question");
// var answerButtonsEl = document.getElementById("answer-buttons");
// var checkAnswerEl = document.getElementById("check-answer");
// var viewHighScores = document.getElementById("highscores-link");
// var submitButton = document.getElementById("submit-btn");
// var clearScoreButton = document.getElementById("clear-btn");
// var initialsField = document.getElementById("player-name");
// var restartButton = document.getElementById("restart-btn");
// var scoreField = document.getElementById("player-score");
// var scores = JSON.parse(localStorage.getItem("scores")) || [];

// var shuffledQuestions, currentQuestionIndex;


// // Start button trigger the first question and next button to display
// startButton.addEventListener("click", startGame);
// nextButton.addEventListener("click", () => {
//     currentQuestionIndex++
//     setNextQuestion()
// });


// // Countdown timer
// function timeTick() {
//     timeLeft--;
//     timerEl.textContent = "Time: " + timeLeft;
//     if (timeLeft <= 0) {
//         saveScore();
//     }
// }


// // Start Quiz
// function startGame() {
//     timerID = setInterval(timeTick, 1000);
//     startContainerEl.classList.add("hide");
//     shuffledQuestions = questions.sort(() => Math.random() - .5)
//     currentQuestionIndex = 0
//     questionContainerEl.classList.remove("hide");

//     // Timer will start as soon as start button is clicked
//     timeTick();
//     setNextQuestion();
// };


// // Go to next question
// function setNextQuestion() {
//     resetState();
//     showQuestion(shuffledQuestions[currentQuestionIndex]);
// };


// // Display questions
// function showQuestion(question) {
//     questionEl.innerText = question.question
//     question.answers.forEach(answer => {
//         var button = document.createElement("button")
//         button.innerText = answer.text
//         button.classList.add("btn")
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener("click", selectAnswer)
//         answerButtonsEl.appendChild(button)
//     })
// };


// // Reset state function
// function resetState() {
//     //clearStatusClass(document.body)
//     nextButton.classList.add("hide")
//     checkAnswerEl.classList.add("hide")
//     while (answerButtonsEl.firstChild) {
//         answerButtonsEl.removeChild
//             (answerButtonsEl.firstChild)
//     }
// };


// // Select answer function
// function selectAnswer(e) {
//     var selectedButton = e.target;
//     //console.dir(selectedButton);
//     var correct = selectedButton.dataset.correct;
//     checkAnswerEl.classList.remove("hide")
//     // Check if the answer correct or wrong then show text
//     if (correct) {
//         checkAnswerEl.innerHTML = "You got it right!";
//     } else {
//         checkAnswerEl.innerHTML = "Sorry that was not the correct answer.";
//         if (timeLeft <= 10) {
//             timeLeft = 0;
//         } else {
//             // If the aswer is wrong, deduct time by 10
//             timeLeft -= 10;
//         }
//     }

//     Array.from(answerButtonsEl.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     })

//     if (shuffledQuestions.length > currentQuestionIndex + 1) {
//         nextButton.classList.remove("hide")
//         checkAnswerEl.classList.remove("hide")
//     } else {
//         startButton.classList.remove("hide")
//         saveScore();
//     }
// };


// // Check and show the correct answer by set the buttons colors
// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add("correct");
//     } else {
//         element.classList.add("wrong");
//     }
// };


// // Remove all the classes
// function clearStatusClass(element) {
//     element.classList.remove("correct");
//     element.classList.remove("wrong");
// };


// // Save scores
// function saveScore() {
//     clearInterval(timerID);
//     timerEl.textContent = "Time: " + timeLeft;
//     setTimeout(function () {
//         //localStorage.setItem("scores", JSON.stringify(scores));
//         questionContainerEl.classList.add("hide");
//         document.getElementById("score-container").classList.remove("hide");
//         document.getElementById("your-score").textContent = "Your final score is " + timeLeft;

//     }, 2000)
// };


// var loadScores = function () {
//     // Get score from local storage

//     if (!savedScores) {
//         return false;
//     }

//     // Convert scores from stringfield format into array
//     savedScores = JSON.parse(savedScores);
//     var initials = document.querySelector("#initials-field").value;
//     var newScore = {
//         score: timeLeft,
//         initials: initials
//     }
//     savedScores.push(newScore);
//     console.log(savedScores)

//     savedScores.forEach(score => {
//         initialsField.innerText = score.initials
//         scoreField.innerText = score.score
//     })
// };


// // Show high scores
// function showHighScores(initials) {
//     document.getElementById("highscores").classList.remove("hide")
//     document.getElementById("score-container").classList.add("hide");
//     startContainerEl.classList.add("hide");
//     questionContainerEl.classList.add("hide");
//     if (typeof initials == "string") {
//         var score = {
//             initials, timeLeft
//         }
//         scores.push(score)
//     }

//     var highScoreEl = document.getElementById("highscore");
//     highScoreEl.innerHTML = "";
//     //console.log(scores)
//     for (i = 0; i < scores.length; i++) {
//         var div1 = document.createElement("div");
//         div1.setAttribute("class", "name-div");
//         div1.innerText = scores[i].initials;
//         var div2 = document.createElement("div");
//         div2.setAttribute("class", "score-div");
//         div2.innerText = scores[i].timeLeft;

//         highScoreEl.appendChild(div1);
//         highScoreEl.appendChild(div2);
//     }

//     localStorage.setItem("scores", JSON.stringify(scores));

// };


// // View high scores link
// viewHighScores.addEventListener("click", showHighScores);


// submitButton.addEventListener("click", function (event) {
//     event.preventDefault()
//     var initials = document.querySelector("#initials-field").value;
//     showHighScores(initials);
// });


// // Restart or reload the page
// restartButton.addEventListener("click", function () {
//     window.location.reload();
// });


// // Clear localStorage items 
// clearScoreButton.addEventListener("click", function () {
//     localStorage.clear();
//     document.getElementById("highscore").innerHTML = "";
// });