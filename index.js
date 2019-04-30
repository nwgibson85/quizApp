let askedQs = [];
let randomQ;
let n = 0;
let scoreBoard = 0;
let questionNum = -1;
let reactiveImg;

// Model functions? 
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
    questionNum ++;
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
    questionNum = -1;
    scoreBoard = 0;
    $('.scoreBoard').text(scoreBoard);
}


function generateReactiveResultsImg() {
  if (scoreBoard >= 8) {
    displayResultsBest();
  }
  else if (scoreBoard < 5) {
    displayResultsTryAgain();
  }
  else {
    displayResultsDecent();
  }
}

// View functions? 
function renderQs() {
    console.log(questionBank[askedQs[n]]);
    console.log('Questions have been rendered');
    if (n < askedQs.length) {
      $('#quiz').show();
      $('#rationale').hide();
      return $(`#quiz`).html(
        `<form>
         <fieldset class="choices">
            <legend id='displayQuestion'>${questionBank[askedQs[n]].question}</legend>
            <label class="choices-a">
            <input type="radio" value="${questionBank[askedQs[n]].choices.a}" name="choice" required><img class='click' src="https://i.imgflip.com/23aeq6.jpg" alt='orangutan raising arm'>
            <span>${questionBank[askedQs[n]].choices.a}</span>
            </label>
            <label class="choices-b">
            <input type="radio" value="${questionBank[askedQs[n]].choices.b}" name="choice" required><img class='click' src="http://allwallps.com/bin/00/84/65a.jpg" alt='tree frog raising arm'>
            <span>${questionBank[askedQs[n]].choices.b}</span>
            </label>
            <label class="choices-c">
            <input type="radio" value="${questionBank[askedQs[n]].choices.c}" name="choice" required><img class='click' src="http://4.bp.blogspot.com/-8U8bD4XX2K4/T9o3TiMhVzI/AAAAAAAANVE/QN3cy8Kt0Xc/s1600/funny-animals-baby-chimp-greeting.jpg" alt='baby chimp raising hand'>
            <span>${questionBank[askedQs[n]].choices.c}</span>
            </label>
            <label class="choices-d">
            <input type="radio" value="${questionBank[askedQs[n]].choices.d}" name="choice" required><img class='click' src="https://66.media.tumblr.com/2db992a5ce9895d05223df54bb7319d4/tumblr_nmmcdndtWc1upwzm1o1_640.jpg" alt='otter raising both arms'>
            <span>${questionBank[askedQs[n]].choices.d}</span>
            </label>
            <button id='showRationale' class='button'>see answer</button>
        </fieldset>
        </form>`);
    }
    else {
        $('#quiz').hide();
        generateReactiveResultsImg();
        $('.questionNum').text(10);
    }
}

function displayCorrectAnsRationale() {
    console.log('displayCorrectAns fired');
    console.log(n);
    $('#rationale').show();
    $('#quiz').hide();
    if (n < askedQs.length -1) {
      return $(`#rationale`).html(
        `<label class="ansRationale">
            <img class="ansCorrect-Img" src="https://i.chzbgr.com/full/4264471296/h453DE7D0" alt='monkey giving a thumbs up for correct answer!'>
            <span class="rationale-text">Correct!</span>
            <span class="rationale-link">${questionBank[askedQs[n]].rationale}</span>
            <button class='button' id="nextQ">next question</button>
            <img class='rationale-img'  src="${questionBank[askedQs[n]].img}">
        </label>`);
    }
    else { 
      return $(`#rationale`).html(
        `<label class="ansRationale">
            <img class="ansCorrect-Img" src="https://i.chzbgr.com/full/4264471296/h453DE7D0" alt='monkey giving a thumbs up for correct answer!'>
            <span class="rationale-text">Correct!</span>
            <span class="rationale-link">${questionBank[askedQs[n]].rationale}</span><img class='rationale-img'  src="${questionBank[askedQs[n]].img}">
            <button class='button' id="displayRes">Results</button>
        </label>`);
    }
}
    
function displayIncorrectAnsRationale() {
    console.log('displayIncorrectAns fired')
    $('#rationale').show();
    $('#quiz').hide(); 
    if (n < askedQs.length -1) {
      return $(`#rationale`).html(
        `<label class="ansRationale">
            <img class='ansIncorrect-Img' src="https://i.kym-cdn.com/photos/images/original/000/222/136/1324684271001.jpg" alt='monkey with hand over face in shame for incorrect answer.'>
            <span class="rationale-text">Incorrect, the correct answer is: ${questionBank[askedQs[n]].correctAnswer}</span>
            <span class="rationale-link">${questionBank[askedQs[n]].rationale}</span>
            <button class='button' id="nextQ">next question</button><img class='rationale-img'  src="${questionBank[askedQs[n]].img}">
        </label>`);
    }
    else {
      return $(`#rationale`).html(
        `<label class="ansRationale">
          <img class='ansIncorrect-Img' src="https://i.kym-cdn.com/photos/images/original/000/222/136/1324684271001.jpg" alt='monkey with hand over face in shame for incorrect answer.>
          <span class="rationale-text">Incorrect, the correct answer is: ${questionBank[askedQs[n]].correctAnswer}</span>
          <span class="rationale-link">${questionBank[askedQs[n]].rationale}</span><img class='rationale-img'  src="${questionBank[askedQs[n]].img}">
          <button class='button' id="displayRes">Results</button>
        </label>`
      );
    }
}

function displayResultsDecent() {
  return $(`#results`).html(
    `<img src=${resultsImg.decent}>
      <label class="resultsPage">
            <img src=""> 
            <span id=tryAgain"><p>Check your score below, and if you dare give the quiz another attempt!</p></span>
            <button type="submit" id="restartQ" class='button'>Restart Quiz</button>
        </label>`
  );
}

function displayResultsTryAgain() {
  return $(`#results`).html(
    `<img src=${resultsImg.tryAgain}>
      <label class="resultsPage">
            <img src=""> 
            <span id=tryAgain"><p>Check your score below, and if you dare give the quiz another attempt!</p></span>
            <button type="submit" id="restartQ" class='button'>Restart Quiz</button>
        </label>`
  );
}

function displayResultsBest() {
  return $(`#results`).html(
    `<img src=${resultsImg.best}>
      <label class="resultsPage">
            <img src=""> 
            <span id=tryAgain"><p>Check your score below, and if you dare give the quiz another attempt!</p></span>
            <button type="submit" id="restartQ" class='button'>Restart Quiz</button>
        </label>`
  );
}

//Controller functions? event listeners 
function launchQuiz() {
  $('#startQ').on('click', '#begin', function(event) {
    console.log('begin has been clicked');
    $('#quiz').show();
    $('#startQ').hide();
    $('#rationale').hide();
    $('#results').hide();
    selectRandomQ();
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
function showResults() {
  $('#rationale').on('click', '#displayRes', function(event) {
    console.log('displaying results!');
    $('#quiz').hide();
    $('#rationale').hide(); 
    $('#results').show();
    generateReactiveResultsImg();
  });
}
  
function restartQuiz() {
    console.log("Quiz has restarted");
    $('#results').on('click', '#restartQ', function(event) {
        event.preventDefault();
        $("#startQ").show();
        $('#quiz').hide();
        $('#rationale').hide();
        $('#results').hide();
        resetValues();
        console.log(n, scoreBoard, questionNum, askedQs);
    });
}
//calling all event listeners 
function startQuiz() {
  console.log("Quiz has begun");
  $('#quiz').show();
  launchQuiz();
  handleUserSubmitAns();
  nextQuestion();
  showResults();
  restartQuiz();
}

//get it and go
$(startQuiz);