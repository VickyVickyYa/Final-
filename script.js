
document.addEventListener("DOMContentLoaded", function() {         

    const clickSound = document.getElementById("click-sound");
    document.addEventListener('click', function() {clickSound.play();});
    clickSound.loop = true; 
clickSound.play();

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
            {text: "Paris", correct: true},
            {text: "Romania", correct: false},
            {text: "Bolivia", correct: false},
            {text: "Italy", correct: false},
        ] },
        { question: "What candy's og name was Opal fruits?",
        answers: [
            {text: "Candy Corn", correct: false},
            {text: "Starburst", correct: true},
            {text: "Lolipops", correct: false},
            {text: "Sour Patch Kids", correct: false},
        ]},

        { question: "What's the phobia of having the fear of Halloween?",
        answers: [
            {text: "Astraphobia", correct: false},
            {text: "Dentophobia", correct: false},
            {text: "Amaxophobia", correct: false},
            {text: "Samhainophobia", correct: true},
        ]},
{question: "What's considered unlucky number?",
        answers: [
            {text: "1", correct: false},
            {text: "7", correct: false},
            {text: "24", correct: false},
            {text: "13", correct: true},
        ]},

        {question: "What is the rarest color of M&Ms ever produced?",
        answers: [
            {text: "Tan", correct: true},
            {text: "Blue", correct: false},
            {text: "Brown", correct: false},
            {text: "Crimson", correct: false},
        ]},

    {question: "What Candy was promoted as a meal replacement bar?",
        answers: [
            {text: "KitKat", correct: false},
            {text: "M&Ms", correct: false},
            {text: "Snickers", correct: true},
            {text: "Twix", correct: false},
        ]},

      {question: "Which country did Trick or Treat come from?",
        answers: [
            {text: "Brazil", correct: false},
            {text: "Seberia", correct: false},
            {text: "United States", correct: false},
            {text: "Ireland", correct: true},
        ]},
        {question: "Name the gemstone often associated with witches and magic?",
        answers: [
            {text: " Lapis lazuli", correct: false},
            {text: "Sapphire", correct: false},
            {text: "Amethyst", correct: true},
            {text: "Opal", correct: false},
        ]},

        {question: "What is the most worn costume on halloween for kids?",
        answers: [
         {text: "Spider Man", correct: true},
            {text: "Labubu", correct: false},
            {text: "Tung Tung Sahur", correct: false},
            {text: "Princess", correct: true},
        ]},
    {question: "What important event happened on 1981 Halloween in Harry Potter?",
        answers: [
            {text: "Harry asks Ginny to be his girlfriend", correct: false},
            {text: "Harry's parents get murdered at Godric's Hallow", correct: true},
            {text: "Cedric and Lord Voldermort face off", correct: false},
            {text: "Dursley's give Harry some Candy", correct: false},
        ]},
{question: "What type of Cat was considered bad luck in parts of europe?",
        answers: [
            {text: "Ragdoll", correct: false},
            {text: "Black cat", correct: true},
            {text: "Siamese cat", correct: false},
            {text: "Burmese cat", correct: false},
        ]},
    {question: "Continue to the next PART 👻 or else..",
        answers: [
            {text: "YES PLEASE", correct: true},
            {text: "NO, NO, I HAVE HAD ENOUGH", correct: false},
            {text: "Sure whatever", correct: true},
            {text: "I ain't feeling this", correct: false},
        ]},




     {question: "You're home alone, Halloween night, you hear whispers coming from the attic, you?",
        answers: [
            {text: "Pretend not to here it", correct: true},
            {text: "Go inside", correct: false},
            {text: "Spend the night outside", correct: false},
            {text: "Preform seance", correct: false},
        ]},
{question: "For 80,000 dollars your dared to spend a night at a haunted house?",
        answers: [
            {text: "Go with a friend", correct: false},
            {text: "Accept the dare you realize the house is nice..", correct: false},
            {text: "You accept and collect old antiques from there", correct: false},
            {text: "Undecided so you stand at the door, the real estate agent catches you", correct: true},
        ]},

    {question: "Your a babysitter the child comes up to you with a unsettling drawing of Bippie his imaginary friend, he tells you Bibbie wants you to leave?",
        answers: [
            {text: "You smirk, the child probably wants to stay past 9 and doesn't want you to know about it ", correct: false},
            {text: "You take drawing from him and rip it, you had enough of this kid", correct: false},
            {text: "You go swiftly", correct: false},
            {text: "You call the mom.", correct: true},
        ]},
        {question: "Your at a halloween party it's dark and sweaty flashes of lights hit you, a masked figure looks in your direction",
        answers: [
                        {text: "You keep your distance still watching them", correct: true},
            {text: "You go closer, maybe it's my friend I should go say hi", correct: false},
            {text: "You smile at yourself maybe it's my secret admirer and go get drinks", correct: false},
            {text: "You turn around whatever I guess", correct: false},

        ]},

{ question: "Did you enjoy the Trivia it's ok I won't haunt you 👻",
        answers: [
            {text: "YESSS I LOVE IT", correct: true},
            {text: "THIS BETTER BE THE NEXT JEOPARDY", correct: true},
            {text: "ITS QUITE FANTASTICAL", correct: true},
            {text: "I ain't feeling this", correct: false},
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