let askedQs = [];
let randomQ;
let n = 0;
let scoreBoard = 0;
let questionNum = -1;

// Model functions? --------------------------------------------------------------------------------------------------------------------------
function selectRandomQ() { 
    let desiredQuestionNum = 10; 
    for (let i = 0; i < desiredQuestionNum; i++) { 
        do {  
            randomQ = Math.floor(Math.random() * questionBank.length); 
        } 
        while (pickedQs());  
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
    console.log(askedQs); 
} 

function changeQNum() {
    console.log("question num changed");
    questionNum ++,
    $('.questionNum').text(questionNum+1);
}

function changeScoreBoard() {
    console.log("score changed");
    return scoreBoard ++;
}

function scoreBoardUpdated() {
    changeScoreBoard();
    $('.scoreBoard').text(scoreBoard);
}


// problem function
function validateAns() {
    console.log('validateAns fired');
    let correctAns = questionBank[askedQs[n]].correctAnswer;
    let userChoice = $('input[type=radio]:checked').val();
    
    if (userChoice === correctAns) {
        scoreBoardUpdated();
        displayCorrectAnsRationale();
    } 
    else {
        displayIncorrectAnsRationale();
    }
}

function resetValues() {
    askedQs = [];
    n = 0;
    questionNum = 0;
    scoreBoard = 0;
}

// View functions? -----------------------------------------------------------------------------------------------------------------------------
function renderScreenView(keyword) {
    return$(`#screenView`).html(keyword);
}

function renderQs() {
    console.log(questionBank[askedQs[n]]);
    console.log('Questions have been rendered');
    if (n < askedQs.length) {
        $('#rationale').hide();
        return $(`#quiz`).html(`<h2 id='displayQuestion'>${questionBank[askedQs[n]].question}</h2>
        <form>
         <fieldset class="choices">
            <label class="choices-a">
            <input type="radio" value="${questionBank[askedQs[n]].choices.a}" name="choice" required>
            <span>${questionBank[askedQs[n]].choices.a}</span>
            </label>
            <label class="choices-b">
            <input type="radio" value="${questionBank[askedQs[n]].choices.b}" name="choice" required>
            <span>${questionBank[askedQs[n]].choices.b}</span>
            </label>
            <label class="choices-c">
            <input type="radio" value="${questionBank[askedQs[n]].choices.c}" name="choice" required>
            <span>${questionBank[askedQs[n]].choices.c}</span>
            </label>
            <label class="choices-d">
            <input type="radio" value="${questionBank[askedQs[n]].choices.d}" name="choice" required>
            <span>${questionBank[askedQs[n]].choices.d}</span>
            </label>
            <button id='showRationale' class='button'>see answer</button>
        </fieldset>
        </form>`);
    }
    else {
        $('#quiz').hide();
        displayResults();
        $('.questionNum').text(10);
    }
}

function displayCorrectAnsRationale() {
    console.log('displayCorrectAns fired');
    console.log(n);
    console.log(askedQs.length)
    console.log(askedQs.length -1);
    $('#rationale').show();
    if (n < askedQs.length -1) {
        return $(`#rationale`).html(
        `<label class="ansRationale">
            <img class="ansCorrect-Img" src="https://i.chzbgr.com/full/4264471296/h453DE7D0" alt='monkey giving a thumbs up for correct answer!'>
            <span id="rationale-text">Correct!</span>
            <span id="rationale-link">${questionBank[askedQs[n]].rationale}</span>
            <button class='button' id="nextQ">next question</button>
            <img class='rationale-img'  src="${questionBank[askedQs[n]].img}">
        </label>`);
    }
    else { 
        return $(`#rationale`).html(
        `<label class="ansRationale">
            <img class="ansCorrect-Img" src="https://i.chzbgr.com/full/4264471296/h453DE7D0" alt='monkey giving a thumbs up for correct answer!'>
            <span id="rationale-text">Correct!</span>
            <span id="rationale-link">${questionBank[askedQs[n]].rationale}</span>
            <button class='button' id="displayRes">Results</button>
        </label>`);
    }
}
    
function displayIncorrectAnsRationale() {
    console.log('displayIncorrectAns fired')
    $('#rationale').show(); 
    if (n < askedQs.length -1) {
        return $(`#rationale`).html(
            `<label class="ansRationale">
                <img class='ansIncorrect-Img' src="https://i.kym-cdn.com/photos/images/original/000/222/136/1324684271001.jpg" alt='monkey with hand over face in shame for incorrect answer.'>
                <span id="rationale-text">Incorrect, the correct answer is: ${questionBank[askedQs[n]].correctAnswer}</span>
                <span id="rationale-link">${questionBank[askedQs[n]].rationale}</span>
                <button class='button' id="nextQ">next question</button>
        </label>`);
    }
    else {
        return $(`#rationale`).html(
        `<label class="ansRationale">
            <img class='ansIncorrect-Img' src="https://i.kym-cdn.com/photos/images/original/000/222/136/1324684271001.jpg" alt='monkey with hand over face in shame for incorrect answer.>
            <span id="rationale-text">Incorrect, the correct answer is: ${questionBank[askedQs[n]].correctAnswer}</span>
            <span id="rationale-link">${questionBank[askedQs[n]].rationale}</span>
            <button class='button' id="displayRes">Results</button>
        </label>`
        );
    }
} 

//Controller functions? event listeners -----------------------------------------------------------------------------------------------------------------------------
function launchQuiz() {
    $('#begin').click(function(event) {
    console.log('begin has been clicked')
    $('#quiz').show();
    $('#startQ').hide();
    $('#rationale').hide();
    $('#results').hide();
    renderQs();
    changeQNum();
    $('.questionNumber').text(1);
    });
}

function handleUserSubmitAns() {
    console.log("ready to handleUserSubmitAns");
    $('#quiz').on('click', '#showRationale', function(event) {
        event.preventDefault();
        $('#showRationale').hide();
        let userChoice = $('input[type=radio]:checked').val();
        validateAns(userChoice); 
    });
}

function nextQuestion() {
    $('#rationale').on('click', '#nextQ', function(event) {
        event.preventDefault();
        console.log("nextQuestion firing");
        n ++;
        console.log(n);
        changeQNum();
        renderQs();
    });
}

// potential issue. 
function displayResults() {
    $('#rationale').on('click', '#displayRes', function(event) {
        console.log('displaying results!')
        $('#quiz').hide();
        $('#rationale').hide(); 
        $('#results').show();
        return $(`#results`).html(
        `<label class="resultsPage">
            <img src=""> 
            <span id=tryAgain">Check your score below, and if you dare give the quiz another attempt!</span>
            <button type="submit" id="restartQ" class='button'>Restart Quiz</button>
        </label>`);
      // if score equals x/10 provide pic the correlates.
    });
}

function restartQuiz() {
    console.log("Quiz has restarted");
    $('#results').on('click', '#restartQ', function(event) {
        event.preventDefault();
        location.reload();
    });
}

//calling all event listeners ------------------------------------------------------------------------------------------------------------------
function startQuiz() {
    console.log("Quiz has begun")
    selectRandomQ();
    launchQuiz();
    handleUserSubmitAns();
    nextQuestion();
    displayResults();
    restartQuiz();
}

//get it and go
$(startQuiz);