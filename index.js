const quizBox = document.getElementById('quiz');
const resultsBox = document.getElementById('results');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const ansRationale = document.getElementById('rationale');
const currentScore = document.getElementById('score');
const startQuiz = document.getElementById('begin');
const submitAnswer = document.getElementById('submitAns')


function quizBuilder() {};

function scoreBoard() {};

quizBuilder();

submitButton.addEventListener('click', scoreBoard);

function quizBuilder () {
    const output = []; 
    const pages = document.querySelectorAll(".page");
    let currentPage = 0;

    questionBank.forEach(
        (currentQ, questionNum) => {
            const answers = [];
            for(letter in currentQ.answers) {
                answers.push(`<label>
                <input type='radio' name="question${questionNum}" value="${letter}">
                ${letter}:
                ${currentQ.answer[letter]}
                </label>`);}
                output.push(
                    `<section class="question">${currentQ.question}</section>
                    <section class="answers"${answers.join('')}</section>`);});
        quizBox.innerHTML = output.join('');
                
    output.push(
        `<section class='page'>
        <section class='question'>${currentQ.question}</section>
        <section class='answers'${answers.join('')}</section>
        </section>`);
    }

function selectRandomQ() {
    
    let display = document.getElementById('question')
    let askedQs = [];
    let desiredQuestionNum = 10;

    for (let i = 0; i < desiredQuestionNum; i++) {
        do { 
            let randomQ = Math.floor(Math.random() * questionBank.length);

        }
        while (pickedQs());

    display.innerHTML += questionBank[randomQ] + '<br>';
    askedQs.push(randomQ);
    }
    function pickedQs() {
        for (let i = 0; i < askedQs.length; i++) {
            if (askedQs[i] === randomQ) {
                return true;
            }
        }
        return false;
    }
}

function showPage(n) {
    pages[currentPage].classList.remove('active-page');
    pages(n).classList.add('active-page');
    currentPage = n;
    if (currentPage === 0) {
        previousButton.style.display = 'none';
    }
    else {
        previousButton.style.display = 'inline-block';
    }
    if (currentPage === pages.length -1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
    else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
    showPage(0);
}

function showResults() {
    const answerBoxes = quizBox.querySelectorAll('.answers');
    let numRight = 0;

    askedQs.forEach( (currentQ, questionNum) => {
        
        const answerBox = answerBoxes[questionNum];
        const selector = 'input[name=question'+questionNum+']:checked';
        const userAnswer = (answerBox.querySelector(selector)).value;

        if (userAnswer === currentQ.correctAnswer) {
            numRight ++;
            answerBoxes[questionNum].style.color = 'turquoise';
        }
        else {
            answerBoxes[questionNum].style.color = 'firebrick';
        }
        // is this where we display rationale?
    });
    resultsBox.innerHTML = numRight + 'out of' + askedQs.length;
    // Would be nice to indicate (`${numRight}/20`) if 
    // user attempts again. 
}
        
function displayNextPage() {
    displayPage(currentPage + 1);
}

function displayPreviousPage() {
    displayPage(currentPage - 1);
}

$(function() {

    $('.submit').click(function(event) {
        showResults();
    });
});

$(function() {

    $('.next').click(function(event) {
        displayNextPage();
    });
});
            
$(function() {

    $('.previous').click(function(event) {
        displayPreviousPage();
    });
});

function displayCorrectAndRationale() {

    output.push(
        // not sure if I need to re-push page, question, and answers.
        `<section class='page'>
        <section class='question'>${currentQ.question}</section>
        <section class='answers'>${answers.join('')}</section>
        <section class='correctAnswer'>${currentQ.correctAnswer}</section>
        <section class='rationale'>${currentQ.rationale}</section>
        </section>`);
    
}

// $('submitAns').click(function() {
//     if ($(':radio:checked', this)[0]) {
//     } 
//     else {
//         alert('Please select an answer to proceed!');
//         return false;
//     }
// });
