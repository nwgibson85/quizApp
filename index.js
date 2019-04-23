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
  console.log('renderingQuestions');
  if (n < askedQs.length) {
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
        <button id='nextQuestion' class='button'>next question</button>
      </fieldset>
    </form>`);
  }
  else {
    $('#quiz').hide();
    displayResults();
  }
}

function launchQuiz() {
    $('#begin').click(function (event) {
    console.log('begin has been clicked')
    $('#quiz').show();
    $('#startQ').hide();
    $('#rationale').hide();
    $('#results').hide();
    renderQs();
    changeQNum();
  });
}

let scoreBoard = 0;
let questionNum = 0;

function changeQNum() {
    questionNum ++;
  $('.questionNum').text(questionNum+1);
}

function changeScoreBoard() {
  scoreBoard ++;
  $('.score').text(score+1);
}

function handleUserSubmitAns() {
  $('fieldset').on('click', '#nextQuestion', function(event) {
    event.preventDefault();
    console.log("user answer handled");
    $('#rationale').show();
    $('#startQ').hide();
    $('quiz').hide();
    let userChoice = $('input[type=radio]:checked').val();
      // $('input[type=radio]:checked').attr('checked', false);
      validateAns(userChoice); 
 });
}

function validateAns(userChoice){
  let correctAns = questionBank[askedQs[n]].correctAnswer;
  if (userChoice === correctAns) {
    changeScoreBoard();
    displayRationale(true, correctAns);
  } 
  else {
    displayRationale(false, correctAns);
  }
}

function rationaleDisplay() {
    $('#rationale').show();
    if (true){
        $(".ansRationale img").attr("src", 'https://i.chzbgr.com/full/4264471296/h453DE7D0');
        $(".ansRationale #rationale-text").text("Correct!");
    }
    else {
        $(".ansRationale img").attr("src", 'https://i.kym-cdn.com/photos/images/original/000/222/136/1324684271001.jpg');
        $(".ansRationale #rationale-text").text(`Incorrect, the correct answer was: ${questionBank[askedQs[n]].correctanswer}`);
    }
}


function displayRationale(statusFlag, answer){
  console.log('displaying rationale');
  $('#quiz').hide();
    if (n < askedQs.length) {
        rationaleDisplay(true);
        return $(`#rationale`).html(
        `<label class="ansRationale">
            <img src="">
            <span id="rationale-text"></span>
            <span id="rationale-link">${questionBank[askedQs[n]].rationale}</span>
            <button class='button' id="nextQ">next question</button>
        </label>`);
    }
    else {
        rationaleDisplay(false);
        return $(`#rationale`).html(
        `<label class="ansRationale">
            <img src="">
            <span id="rationale-text"></span>
            <span id="rationale-link">${questionBank[askedQs[n]].rationale}</span>
            <button class='button' id="displayRes">Results</button>
        </label>`);
    }
}

function nextQuestion() {
  $('#rationale').on('click', '#nextQ', function(event) {
    n ++;
    renderQs();
    changeQuestionNumber();
  })
}

function displayResults() {
  $('#rationale').on('click', '#displayRes', function(event) {
      console.log('displaying results!')
      $('#rationale').hide();
      return $(`#results`).html(
        `<label class="resultsPage">
            <img src=""> 
            <span id="tryAgain">Give the quiz another attempt!</span>
            <button type="submit" id="restartQ" class='button'>Restart Quiz</button>
          </label>`);
      $('results').show(); // if score equals x/10 provide pic the correlates.
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

// radio button img https://i.imgflip.com/23aeq6.jpg