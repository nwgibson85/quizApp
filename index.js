let askedQs = [];
let randomQ;
let reactiveImg;
let n = 0;
let scoreBoard = 0;
let questionNum = -1;

// randomly selects a question from the Store.js Question bank, and does not repeat a question within the same 10 question quiz 
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
// increases the question number counter
function changeQNum() {
    console.log("question num changed");
    questionNum ++;
    $('.questionNum').text(questionNum+1);
}
// increases the score if a correct answer is selected
function changeScoreBoard() {
    console.log("score changed");
    return scoreBoard ++;
}
// change text(scoreBoard)?
function scoreBoardUpdated() {
    changeScoreBoard();
    $('.scoreBoard').text(scoreBoard);
}

// calls the function to provides answer validation and additional fact after answer is submitted
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
// resets all values for refreshed quiz
function resetValues() {
    askedQs = [];
    n = 0;
    questionNum = -1;
    scoreBoard = 0;
    $('.scoreBoard').text(scoreBoard);
}
// based on quiz results calls the appropriate function with a corresponding image/gif
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

// renders the quiz question onto the dom
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
            <input id='a' type="radio" value="${questionBank[askedQs[n]].choices.a}" name="choice" checked='checked'><img class='click' src="https://i.imgflip.com/23aeq6.jpg" alt='orangutan raising arm'>
            <span>${questionBank[askedQs[n]].choices.a}</span>
            </label>
            <label class="choices-b">
            <input id='b' type="radio" value="${questionBank[askedQs[n]].choices.b}" name="choice" ><img class='click' src="http://allwallps.com/bin/00/84/65a.jpg" alt='tree frog raising arm'>
            <span>${questionBank[askedQs[n]].choices.b}</span>
            </label>
            <label class="choices-c">
            <input id='c' type="radio" value="${questionBank[askedQs[n]].choices.c}" name="choice" ><img class='click' src="http://4.bp.blogspot.com/-8U8bD4XX2K4/T9o3TiMhVzI/AAAAAAAANVE/QN3cy8Kt0Xc/s1600/funny-animals-baby-chimp-greeting.jpg" alt='baby chimp raising hand'>
            <span>${questionBank[askedQs[n]].choices.c}</span>
            </label>
            <label class="choices-d">
            <input id='d' type="radio" value="${questionBank[askedQs[n]].choices.d}" name="choice" ><img class='click' src="https://66.media.tumblr.com/2db992a5ce9895d05223df54bb7319d4/tumblr_nmmcdndtWc1upwzm1o1_640.jpg" alt='otter raising both arms'>
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
// displays the correct answer rational if called
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
// displays the incorrect answer rational if called    
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
//displays the "decent" result image/gif when called
function displayResultsDecent() {
  return $(`#results`).html(
    `<h2 class="resultsPage-h2">Good attempt, maybe you can improve on a second attempt.</h2>
    <img id="golfClap" src=${resultsImg.decent}>
      <label class="resultsPage"> 
            <span id=tryAgain"><p>Check your score below, and if you dare give the quiz another attempt!</p></span>
            <button type="submit" id="restartQ" class='button'>Restart Quiz</button>
        </label>`
  );
}
//displays the "Try again" result image/gif when called
function displayResultsTryAgain() {
  return $(`#results`).html(
    `<h2 class="resultsPage-h2">Honest effort, better luck next time!.</h2>
    <img id="ohBoy" src=${resultsImg.tryAgain}>
      <label class="resultsPage">
            <span id=tryAgain"><p>Check your score below, and if you dare give the quiz another attempt!</p></span>
            <button type="submit" id="restartQ" class='button'>Restart Quiz</button>
        </label>`
  );
}
//displays the "best" result image/gif when called
function displayResultsBest() {
  return $(`#results`).html(
    `<h2 class="resultsPage-h2">Celebrate, You rocked it!</h2>
    <img id="celebrate" src=${resultsImg.best}>
      <label class="resultsPage"> 
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
// when submit button is pressed, either requests an answer be selected, 
// or calls the answer rational function based on selected answer
function handleUserSubmitAns() {
  $('#quiz').on('click', '#showRationale', function(event) {
    event.preventDefault();
    console.log("ready to handleUserSubmitAns");
    $('#showRationale').hide();
    let userChoice = $('input[type=radio]:checked').val();
        if (userChoice === undefined) {
            pleaseClickOnAnswer(false, selectedOption);
        }

        else {
           
            $('input[type=radio]:checked').attr('checked',false);
            validateAns(userChoice);
        }
    });
}  
// provides a warning that no answer has been selected    
function pleaseClickOnAnswer() {
    console.log('Need a click')
    questionCounter--;
    $(".popup-box img").attr("src",warningIcon);
    $(".popup-box #popup-text").text('Please click on an answer');
    $('#quiz').show();
}
// called when next question button is pressed, calls display next question
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

// once 10 questions have been submitted, this displays quiz results page 
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