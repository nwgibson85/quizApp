let askedQs = [];
let randomQ;

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

let n = 0;
let displayedQ = questionBank[askedQs[n]];

function renderQs() {
  console.log(questionBank[askedQs[n]]);
  console.log('Questions have been rendered');
  handleUserSubmitAns();
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
  }
}

function launchQuiz() {
    $('#begin').click(function(event) {
    console.log('begin has been clicked')
    $('#quiz').show();
    $('#startQ').hide();
    $('#rationale').hide();
    $('#results').hide();
    renderQs();
    changeQNum();
    handleUserSubmitAns();
  });
}

let scoreBoard = 0;
let questionNum = 0;

function changeQNum() {
    console.log("question num changed")
    return questionNum ++;
    
}

function changeScoreBoard() {
    console.log("score changed")
    return scoreBoard ++;
}

function handleUserSubmitAns() {
    console.log("ready to handleUserSubmitAns");
    $('fieldset').on('click', '#showRationale', function(event) {
    event.preventDefault();
    let userChoice = $('input[type=radio]:checked').val();
      validateAns(userChoice); 
    });
}

function validateAns() {
    console.log('validateAns fired');
  let correctAns = questionBank[askedQs[n]].correctAnswer;
  let userChoice = $('input[type=radio]:checked').val();
  if (userChoice === correctAns) {
    changeScoreBoard();
    displayCorrectAnsRationale();
  } 
  else {
    displayIncorrectAnsRationale();
  }
}

function displayCorrectAnsRationale() {
    console.log('displayCorrectAns fired');
    $('#rationale').show();
    nextQuestion();
    if (n < askedQs.length) {
        return $(`#rationale`).html(
        `<label class="ansRationale">
            <img src="https://i.chzbgr.com/full/4264471296/h453DE7D0">
            <span id="rationale-text">Correct!</span>
            <span id="rationale-link">${questionBank[askedQs[n]].rationale}</span>
            <button class='button' id="nextQ">next question</button>
        </label>`);
    }
    else { 
        return $(`#rationale`).html(
        `<label class="ansRationale">
            <img src="https://i.chzbgr.com/full/4264471296/h453DE7D0">
            <span id="rationale-text">Correct!</span>
            <span id="rationale-link">${questionBank[askedQs[n]].rationale}</span>
            <button class='button' id="displayRes">Results</button>
        </label>`);
    }
}
    
function displayIncorrectAnsRationale() {
    console.log('displayIncorrectAns fired')
    $('#rationale').show();
    nextQuestion();
    if (n < askedQs.length) {
        return $(`#rationale`).html(
            `<label class="ansRationale">
                <img src="https://i.kym-cdn.com/photos/images/original/000/222/136/1324684271001.jpg">
                <span id="rationale-text">Incorrect, the correct answer is: ${questionBank[askedQs[n]].correctanswer}</span>
                <span id="rationale-link">${questionBank[askedQs[n]].rationale}</span>
                <button class='button' id="nextQ">next question</button>
        </label>`);
    }
    else {
        return $(`#rationale`).html(
        `<label class="ansRationale">
            <img src="https://i.kym-cdn.com/photos/images/original/000/222/136/1324684271001.jpg">
            <span id="rationale-text">Incorrect, the correct answer is: ${questionBank[askedQs[n]].correctanswer}</span>
            <span id="rationale-link">${questionBank[askedQs[n]].rationale}</span>
            <button class='button' id="displayRes">Results</button>
        </label>`
        );
    }
} 


function nextQuestion() {
  $('#rationale').on('click', '#nextQ', function(event) {
    event.preventDefault();
    n ++;
    handleUserSubmitAns();
    changeQNum();
    renderQs();
  });
}

function displayResults() {
  $('#rationale').on('click', '#displayRes', function(event) {
      console.log('displaying results!')
      $('#rationale').hide(); 
      $('results').show();
      restartQuiz();
      return $(`#results`).html(
        `<label class="resultsPage">
            <img src=""> 
            <span id=tryAgain">Check your score below, and if you dare give the quiz another attempt!</span>
            <button type="submit" id="restartQ" class='button'>Restart Quiz</button>
          </label>`);
      // if score equals x/10 provide pic the correlates.
  });
}

function resetValues() {
  askedQs = [];
    n = 0;
    questionNum = 0;
    scoreBoard = 0;
}

function restartQuiz() {
  console.log("Quiz has restarted");
  $('#results').on('click', '#restartQ', function(event) {
    event.preventDefault();
    resetValues();
    selectRandomQ();
    renderQs();
  });
}

function startQuiz() {
  console.log("Quiz has begun")
  selectRandomQ();
  launchQuiz();
}
$(startQuiz);