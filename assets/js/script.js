
// Target the start button 
let startbtn = document.getElementById('start');
// Targetting the start screen
let startscreen = document.getElementById('start-screen');
// Target question ID
let questions = document.getElementById('questions');
// Set a variable so that we know which question we are targettting
let questionIndex = 0;
// Define a variable to keep a track of the timer 
let quizTime = 60;
// Target end screen
let endScreen = document.getElementById('end-screen');
// Target the fianl score (span element)
let finalScore = document.getElementById('final-score');
// Target the submit button
let submitbtn = document.getElementById('submit')

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

function startQuiz(event) {
    event.preventDefault();
    // console.log(questionIndex)
    questions.innerHTML = "";
    if (questionIndex < quizQuestion.length) {

        // First we need to hide what is in the start screen
        startscreen.classList.remove('start');
        startscreen.classList.add('start', 'hide');

        // Now we need the questions title to appear
        let questionDiv = document.createElement('div');
        let paragraghDiv = document.createElement('p');
        paragraghDiv.textContent = quizQuestion[questionIndex].title
        questionDiv.append(paragraghDiv);

        // Now the question class must change so the question appeara
        questions.classList.remove('hide');
        questions.classList.add('show');
        questions.append(questionDiv);

        let buttonDiv = document.createElement('div');

        // Now we need the question choices
        let questionChoice = quizQuestion[questionIndex].choices
        for (let i = 0; i < questionChoice.length; i++) {
            let choicebtn = document.createElement('button');
            //  Setting ID or class for styling in CSS
            choicebtn.setAttribute('id', 'choices');
            choicebtn.setAttribute('class', 'choices');

            choicebtn.textContent = questionChoice[i]

            choicebtn.addEventListener('click', function (event) {
                event.preventDefault();
                console.log(event.target.innerHTML);

                // Now add if else statememnt to show an alert if the answer is correct or not
                if (event.target.innerHTML === quizQuestion[questionIndex].answer) {
                    alert("Correct Answer");
                    questionIndex = questionIndex + 1;
                    startQuiz(event);
                }
                else {
                    alert("Wrong Answer");
                    quizTime = quizTime - 5;
                    questionIndex = questionIndex + 1;
                    startQuiz(event);
                }
            })

            buttonDiv.append(choicebtn)
        }
        questions.append(buttonDiv)

    }
    else {
        questions.innerHTML = "";
        endScreen.classList.remove('hide');
        endScreen.classList.add('show');
        finalScore.innerHTML = quizTime;

    }
}

// Function to save initials to local storage
function saveToLocalStorage(event) {
    event.preventDefault
    let initials = document.getElementById('initials').value;
    console.log(initials)
    let localStorageData = JSON.parse(localStorage.getItem('quiz'));

    let quizData = {
        initials: initials, score: quizTime
    }

    localStorage.setItem('quiz', JSON.stringify(quizData))

}

// Add event listener to the start button 
startbtn.addEventListener('click', startQuiz)
submitbtn.addEventListener('click', saveToLocalStorage)