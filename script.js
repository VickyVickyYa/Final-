
document.addEventListener("DOMContentLoaded", function() {

    const clickSound = document.getElementById("click-sound");
    document.addEventListener('click', function() {clickSound.play();});

const questions = [
    {
        question: "What vegetable was used to carve jack-o'lanters before pumpkins?",
        answers: [
            {text: "Apples", correct: false},
            {text: "Turnips", correct: true},
            {text: "Potatoes", correct: false},
            {text: "Butternut Squash", correct: false},
        ]
    },
    {
        question: "In what horror film does the villain wear a hockey mask and follow people into the woods?",
        answers: [
            {text: "Halloween", correct: false},
            {text: "Scream", correct: false},
            {text: "Fear Street 1984", correct: false},
            {text: "Friday the 13th", correct: true},
        ]
    },
    {
        question: "Which iconic 1978 slasher film is credited with starting the slasher genre, featuring a killer named Michael Myers?",
        answers: [
            {text: "Halloween", correct: true},
            {text: "Poltergeist", correct: false},
            {text: "Scream Queens", correct: false},
            {text: "Chucky", correct: false},
        ]
    },
    {
        question: "Which Shakespearean play is often associated with witches and the supernatural?",
        answers: [
            {text: "Beetle Juice", correct: false},
            {text: "Macbeth", correct: true},
            {text: "Hamlet", correct: false},
            {text: "Romeo and Juliet", correct: false},
        ]
    },
{question: "What ancient Celtic Festival was the precursor to Halloween?",
        answers: [
            {text: "Samhain", correct: true},
            {text: "October Fest", correct: false},
            {text: " Imbolc", correct: false},
            {text: "Lughnasadh", correct: false},
        ] 
    },
    {question: "In the Nightmare Before Christmas, what is the name of the chracter who is obsessed with Halloween?",
        answers: [
            {text: "Jack Shockston", correct: false},
            {text: "Lock", correct: false},
            {text: "Oogie Boogie", correct: false},
            {text: "Jack Skellington", correct: true},
        ] 

    },
{question: "Who directed netflix series Wendesday?",
        answers: [
            {text: "Martin Scorsese", correct: false},
            {text: "Tim Burton", correct: true},
            {text: "James Cameron", correct: false},
            {text: "Hayao Miyazaki", correct: false},
        ] 
    },
{question: "Who wrote The Fall of the House of Usher?",
        answers: [
            {text: "Mary Shelley", correct: false},
            {text: "Stephan King", correct: false},
            {text: "Edgar Allan Poe", correct: true},
            {text: "Rick Riordan", correct: false},
        ] },
 { question: "Which European city is home to many gothic tales?",
        answers: [
            {text: "Paris", correct: false},
            {text: "Romania", correct: true},
            {text: "Bolivia", correct: false},
            {text: "Italy", correct: false},
        ] },
        { question: "Which Shakespearean play is often associated with witches and the supernatural?",
        answers: [
            {text: "Beetle Juice", correct: false},
            {text: "Macbeth", correct: true},
            {text: "Hamlet", correct: false},
            {text: "Romeo and Juliet", correct: false},
        ]},
      

     
     
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (nextButton.innerText === "Restart") {
        startQuiz();
    } else {
        handleNextButton();
    }
});

startQuiz ();

});














var falling = true;

TweenLite.set("#container",{perspective:600})
TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

var total = 30;
var container = document.getElementById("container"),	w = window.innerWidth , h = window.innerHeight;
 
 for (i=0; i<total; i++){ 
   var Div = document.createElement('div');
   TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
   container.appendChild(Div);
   animm(Div);
 }
 
 function animm(elm){   
   TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)}