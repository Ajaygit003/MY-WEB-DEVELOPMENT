let questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 5 + 3?",
        options: ["5", "8", "10", "15"],
        answer: "8"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "J.K. Rowling"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O", "H", "H2O", "O2"],
        answer: "H2O"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "India"],
        answer: "Japan"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    },
    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "JavaScript", "CSS", "Python"],
        answer: "CSS"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

let question = document.getElementById('question');
let options = document.getElementById('options');
let submitBtn = document.getElementById('submit-btn');
let result = document.getElementById('result');
let resultscore = document.getElementById('score');
let restartBtn = document.getElementById('restart-btn');
let quizheader = document.getElementById('quizheader');
let errorMessage = document.getElementById('error-message');

function loadQuestion() {
    answered = false;
    let currentQuestion = questions[currentQuestionIndex];
    quizheader.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    question.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    options.innerHTML = '';
    errorMessage.style.display = 'none';  // Hide error message when loading a new question
    currentQuestion.options.forEach(option => {
        let li = document.createElement('li');

        let input = document.createElement('input');
        input.type = 'radio';
        input.name = 'optiontype';
        input.value = option;
        input.id = option;

        let label = document.createElement('label');
        label.htmlFor = option;
        label.textContent = option;

        options.appendChild(li);
        li.appendChild(input);
        li.appendChild(label);
        
        //console.log(option);
    });
}

function checkAnswer() {
    if (answered) return;

    let selectedOption = document.querySelector('input[name="optiontype"]:checked');
    if (selectedOption) {
        answered = true;
        let isCorrect = selectedOption.value === questions[currentQuestionIndex].answer;
        if (isCorrect) {
            score++;
        }
        markAnswer(selectedOption, isCorrect);
        if (currentQuestionIndex < questions.length - 1) {
            submitBtn.textContent = 'Next';
        } else {
            submitBtn.textContent = 'Finish';
        }
        errorMessage.style.display = 'none';  // Hide error message when answer is selected
    } else {
        errorMessage.textContent = 'Please select an answer!';
        errorMessage.style.display = 'block';  // Show error message
    }
}

function markAnswer(selectedOption, isCorrect) {
    let allOptions = options.querySelectorAll('input');
    allOptions.forEach(option => {
        let label = option.nextElementSibling;
        //console.log(label);
        if (option.value === questions[currentQuestionIndex].answer) {
            label.classList.add('correct');
        } else if (option === selectedOption && !isCorrect) {
            label.classList.add('incorrect');
        }
        option.disabled = true;
        //console.log(option);
    });
    
}

function nextQuestion() {
    // if (!answered) {
    //     errorMessage.textContent = 'Please submit your answer first!';
    //     errorMessage.style.display = 'block';  // Show error message if next question is clicked without answering
    //     return;
    // }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        submitBtn.textContent = 'Submit';
    } else {
        showResult();
    }
}

function showResult() {
    document.querySelector('.quiz-container').style.display = 'none';
    result.style.display = 'block';
    resultscore.textContent = `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    result.style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'flex';
    loadQuestion();
    submitBtn.textContent = 'Submit';
}

submitBtn.addEventListener('click', () => {
    if (submitBtn.textContent === 'Submit') {
        checkAnswer();
    } else {
        nextQuestion();
    }
});

restartBtn.addEventListener('click', restartQuiz);

loadQuestion();