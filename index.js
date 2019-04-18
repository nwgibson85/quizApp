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
                    `<section class='page'>
                    <section class="question">${currentQ.question}</section>
                    <section class="answers"${answers.join('')}</section>`);
                });
        
    quizContianer.innerHTML = output.join('');
    console.log(output);
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
    consolelog(askedQs);
}

function showPage(n) {
    pages[currentPage].classList.remove('active-page');
    pages(n).classList.add('active-page');
    currentPage = n;
    main.style.display = 'default';
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

function scoreBoard() {
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

// event listeners 
// .addEventListener() can we use this or should we stick to the below syntax?

$(function() {

    $('.submit').click(function(event) {
        // event.preventdefault();
        scoreBoard();
    });
});

$(function() {

    $('.next').click(function(event) {
        // event.preventdefault();
        displayNextPage();
    });
});
            
$(function() {

    $('.previous').click(function(event) {
        // event.preventdefault();
        displayPreviousPage();
    });
});

$(function() {

    $('.submitAns').click(function(event) {
        // event.preventdefault();
        if ($(':radio:checked', this)[0]) {
        } 
        else {
                alert('Please select an answer to proceed!');
                return false;
        }
        displayCorrectAndRationale();
    });
});

$(function() {
    
    $('.begin').click(function(event) {
        launchQuiz();
    });
})

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

function launchQuiz() {
    
    selectRandomQ();
    quizBuilder();
    showPage();
}

const quizBox = document.getElementById('quiz');
const resultsBox = document.getElementById('results');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const currentScore = document.getElementById('score');
const startQuiz = document.getElementById('begin');
const submitAnswer = document.getElementById('submitAns');