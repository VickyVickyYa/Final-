const questions = [
{
question: "What vegetable was used to carve jack-o'lanters before pumpkins ?",
answers: [
    {text: "Apples", correct: false},
    {text: "Turnips", correct: true},
    {text: "Potatoes", correct: false},
    {text: "Butternut Squash", correct: false},
]

},
{

question: "In what horror film does the villain wear a hockey mask and follows people into the woods ?",
answers: [
    {text: "Halloween", correct: false},
    {text: "Scream", correct: false},
    {text: "Fear street 1984", correct: false},
    {text: "Friday the 13th", correct: true},
]

},
{   
question: "Which iconic 1978 slasher film is credited with starting the slasher genre, featuring a killer named Michael Myers? ?",
answers: [
    {text: "Halloween", correct: true},
    {text: "Poltergeist", correct: false},
    {text: "Scream Queens", correct: false},
    {text: "Chucky", correct: false},
]

},
{
question: "Which Shakespearean play is often associated with witches and the supernatural? ",
answers: [
    {text: "Beetle Juice", correct: false},
    {text: "Macbeth", correct: true},
    {text: "Hamlet", correct: false},
    {text: "Romeo and Julliet", correct: false},
]
}




]; 

const questionElement = document.getElementById("question"); 
const answerButtons = document.getElementById("answer-buttons"); 
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0; 
let score = 0; 

function startQuiz (){
currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML= "Next";
showQuestion();
}

function showQuestion () { 
    resetState();
let currentQuestion = questions[currentQuestionIndex];
let questionNo= currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". " + currentQuestion.
question;

currentQuestion.answers.forEach(answer => {
const button = document.createElement("button");
button.innerHTML = answer.text; 
button.classList.add("btn");
answerButtons.appendChild
if (answer.correct) {
    button.dataset.correct = answer.correct;
}
button.addEventListener("click", selectAnswer )

});

} 

function resetState(){
nextButton.style.display = "none";
while (answerButtons.firstChild) {
    answerButtons.removeChild ( answerButtons.firstChild);
}

}

function selectAnswer (e)
{ const selectedBtn = e.target; 
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classlist.add("correct"); 
    }else {
        selectedBtn.classList.add( "incorrect");

    }
    Array.from(answerButtons.children).forEach(button => {
if ( button.dataset.correct ==="true") {
    button.classList.add("correct");
}
button.disabled = true; 
  });
  nextButton.style.display = "block"; 
}

startQuiz ();