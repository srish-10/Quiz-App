const quizDB = [
    {
        question: "What does HTML stand for?",
        a: "Hyperlinks and Text Markup Language",
        b:  "Hyper Text Markup Language",
        c:  "Home Tool Markup Language",
        d:  "Hyper Tool Markup Language ",
        answer: 'ans2',

    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<scripting>",
        c: "<js>",
        d: "<JavaScript>",
        answer: 'ans1',
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        a: "msgBox('Hello World');",
        b: "alertBox('Hello World');",
        c: "msg('Hello World');",
        d: "alert('Hello World');",
        answer: 'ans4',
    },

    {
        question: "Choose the correct HTML element to define important text",
        a: "<br>",
        b: "<strong>",
        c: "<important>",
        d: "<i>",
        answer: 'ans3' ,
    },

    {
        question: "Which character is used to indicate an end tag?",
        a: "*",
        b: "<",
        c: "/",
        d: "^",
        answer:'ans3' ,
    },
    {
        question: "What is the correct HTML for adding a background color?",
        a: "<body bg = yellow>",
        b: "<body style = background-color:yellow;>",
        c: "<background>yellow</background",
        d: "None",
        answer:"ans4",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "The <body> section",
        b: "The <head> section",
        c: "Both the <head> section and the <body> section are correct",
        d: "The <div> section",
        answer: "ans3",
    },
    {
        question: "How do you create a function in JavaScript?",
        a: "function myFunction()",
        b: "function =  myFunction()",
        c: "function:myFunction()",
        d: "myFunction()",
        answer: "ans3",

    }



];

// getting Reference from html
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#Submit');
const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore')



let questionCount = 0;
let score =0;

const loadQuestion = () =>{
    // console.log(quizDB[0].question);
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;


}
loadQuestion();

const getCheckAnswer = () =>{
    let answer;
    
    answers.forEach((currelement) => {
        if(currelement.checked){
            answer = currelement.id;
        }
       
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((currelement) =>currelement.checked=false);
}

submit.addEventListener('click',() =>{
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);
    if(checkAnswer === quizDB[questionCount].answer){
        score++;
    };

    questionCount++;
    deselectAll();
    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3>You scored ${score}/${quizDB.length} </h3>
        <button class="btn onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
    
});


 