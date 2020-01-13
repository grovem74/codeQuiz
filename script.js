var startBtn = document.querySelector("#start");
var nextBtn = document.querySelector("#next");
var cardEl = document.querySelector(".card");
var timerEl = document.querySelector("#timer");
var timeEl = document.querySelector("#time");
var mainEl = document.querySelector("#main");
var secondEl = document.querySelector("#second");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
var resultEl = document.querySelector("#result");
var result2El = document.querySelector("#result2");
var result3El = document.querySelector("#result3");
var result4El = document.querySelector("#result4");
var initialsEl = document.querySelector("#initials");
var savedScoresEl = document.querySelector("#saved-scores");
var highScoreInitEl = document.querySelector("#init");
var scoreInitialsEl = document.querySelector("#score-initials");
var viewHighScores = document.querySelector("#viewHighScores");
var highScoresListEl = document.querySelector("#high-scores-list");
var submitBtn = document.querySelector("#submit");
var backBtn = document.querySelector("#back");
var userAnswerCorrect = 0;
var finalScore = 0;


//game starts with timer at 90 seconds
var timeRemaining = 90;
var timerInterval

//Event listener for start button

startBtn.addEventListener("click", function () {
    timerInterval = setInterval(function () {
        timeRemaining--;
        timeEl.textContent = timeRemaining;
        timeRemaining = Math.max(0, timeRemaining);

        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            mainEl.textContent = ("YOU HAVE RUN OUT OF TIME.");
            endGame();
        }

        if (timeRemaining < 0) {

            endGame();
        }

    }, 1000);

    startGame();
    startBtn.setAttribute("style", "display: none")
    secondEl.setAttribute("style", "display: none")
    answer1El.setAttribute("style", "display: block");
    answer2El.setAttribute("style", "display: block");
    answer3El.setAttribute("style", "display: block");
    answer4El.setAttribute("style", "display: block");

});


var q = 0;

//Event listener for next button
nextBtn.addEventListener("click", function () {
    q++;

    if (q >= questions.length) {
        endGame();
    }

    else {
        nextBtn.setAttribute("style", "display: none");
        mainEl.textContent = (questions[q].title);
        answer1El.setAttribute("value", (questions[q].choices[0]));
        answer2El.setAttribute("value", (questions[q].choices[1]));
        answer3El.setAttribute("value", (questions[q].choices[2]));
        answer4El.setAttribute("value", (questions[q].choices[3]));
        answer1El.setAttribute("class", "unhide");
        answer2El.setAttribute("class", "unhide");
        answer3El.setAttribute("class", "unhide");
        answer4El.setAttribute("class", "unhide");
        resultEl.setAttribute("style", "display: none");
    };

});

//function to start game
function startGame() {
    mainEl.textContent = (questions[q].title);
    answer1El.setAttribute("value", (questions[q].choices[0]));
    answer2El.setAttribute("value", (questions[q].choices[1]));
    answer3El.setAttribute("value", (questions[q].choices[2]));
    answer4El.setAttribute("value", (questions[q].choices[3]));

    //Event listeners for answer buttons 
    var userAnswer
    answerBtn.addEventListener("click", function () {

        if (questions[q].choices[0] === questions[q].answer) {
            result.setAttribute("style", "display: block");
            resultEl.textContent = ("Correct.");
            userAnswerCorrect++;
            nextBtn.setAttribute("style", "display: block");
            answer1El.setAttribute("style", "outline: none");
            answer2El.setAttribute("class", "hide");
            answer3El.setAttribute("class", "hide");
            answer4El.setAttribute("class", "hide");
        }
        else {
            result.setAttribute("style", "display: block");
            resultEl.textContent = ("Incorrect.");
            timeRemaining -= 10;
            nextBtn.setAttribute("style", "display: block");
            answer1El.setAttribute("style", "outline: none");
            answer2El.setAttribute("class", "hide");
            answer3El.setAttribute("class", "hide");
            answer4El.setAttribute("class", "hide");

        }
    });

    answerBtn2.addEventListener("click", function () {

        if (questions[q].choices[1] === questions[q].answer) {
            result.setAttribute("style", "display: block");
            resultEl.textContent = ("Correct.");
            userAnswerCorrect++;
            nextBtn.setAttribute("style", "display: block");
            answer1El.setAttribute("class", "hide");
            answer2El.setAttribute("style", "outline: none");
            answer3El.setAttribute("class", "hide");
            answer4El.setAttribute("class", "hide");
        }
        else {
            result.setAttribute("style", "display: block");
            resultEl.textContent = ("Incorrect.");
            timeRemaining -= 10;
            nextBtn.setAttribute("style", "display: block");
            answer1El.setAttribute("class", "hide");
            answer2El.setAttribute("style", "outline: none");
            answer3El.setAttribute("class", "hide");
            answer4El.setAttribute("class", "hide");
        }

    });

    answerBtn3.addEventListener("click", function () {

        if (questions[q].choices[2] === questions[q].answer) {
            result.setAttribute("style", "display: block");
            resultEl.textContent = ("Correct.");
            userAnswerCorrect++;
            nextBtn.setAttribute("style", "display: block");
            answer1El.setAttribute("class", "hide");
            answer2El.setAttribute("class", "hide");
            answer3El.setAttribute("style", "outline: none");
            answer4El.setAttribute("class", "hide");
        }
        else {
            result.setAttribute("style", "display: block");
            resultEl.textContent = ("Incorrect.");
            timeRemaining -= 10;
            nextBtn.setAttribute("style", "display: block");
            answer1El.setAttribute("class", "hide");
            answer2El.setAttribute("class", "hide");
            answer3El.setAttribute("style", "outline: none");
            answer4El.setAttribute("class", "hide");
        }

    });

    answerBtn4.addEventListener("click", function () {

        if (questions[q].choices[3] === questions[q].answer) {
            result.setAttribute("style", "display: block");
            resultEl.textContent = ("Correct.");
            userAnswerCorrect++;
            nextBtn.setAttribute("style", "display: block");
            answer1El.setAttribute("class", "hide");
            answer2El.setAttribute("class", "hide");
            answer3El.setAttribute("class", "hide");
            answer4El.setAttribute("style", "outline: none");
        }
        else {
            result.setAttribute("style", "display: block");
            resultEl.textContent = ("Incorrect.");
            timeRemaining -= 10;
            nextBtn.setAttribute("style", "display: block");
            answer1El.setAttribute("class", "hide");
            answer2El.setAttribute("class", "hide");
            answer3El.setAttribute("class", "hide");
            answer4El.setAttribute("style", "outline: none");
        }

    });
}
//} 

function endGame() {
    finalScore = (userAnswerCorrect * 10) + timeRemaining;
    clearInterval(timerInterval);
    document.getElementsByClassName('card')[0].style.display='none';
    startBtn.setAttribute("style", "display: none");
    nextBtn.setAttribute("style", "display: none");
    resultEl.setAttribute("style", "display: none");
    result2El.setAttribute("style", "display: none");
    result3El.setAttribute("style", "display: block");
    result4El.setAttribute("style", "display: block");
    initialsEl.setAttribute("style", "display: block");
    result2El.textContent = ("You got " + userAnswerCorrect + " of " + questions.length + " questions correct.");
    result3El.textContent = ("Your score is " + finalScore + ".");
    result4El.textContent = ("Enter your initials to save your score.");

    if (timeRemaining < 0) {
        timeEl.textContent = "0";
    }
}

// Answer buttons
var answerBtn = document.querySelector("#answer1");
var answerBtn2 = document.querySelector("#answer2");
var answerBtn3 = document.querySelector("#answer3");
var answerBtn4 = document.querySelector("#answer4");

//Button to save high score
var highScoreInit = [];
var highScores = [];

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var initials = [];
    initials[0] = document.querySelector("#init").value;

    if (initials[0] === "") {
        alert("Please enter initials.");
    } else {
        alert("Initials saved.");

        localStorage.setItem("initials", JSON.stringify(initials));
        localStorage.setItem("score", finalScore);
        highScoreInit.unshift(initials);
        highScores.push(finalScore);
    }
})

viewHighScores.addEventListener("click", function () {
    scoreInitialsEl.textContent = highScoreInit[0];
    savedScoresEl.textContent = highScores[0];
    resultEl.setAttribute("style", "display: none"); 
    result2El.setAttribute("style", "display: none"); 
    result3El.setAttribute("style", "display: none"); 
    result4El.setAttribute("style", "display: none"); 
    initialsEl.setAttribute("style", "display: none"); 
    viewHighScores.setAttribute("style", "display: none");
    highScoresListEl.setAttribute("style", "display: block");
    timerEl.setAttribute("style", "display: none");
    startBtn.setAttribute("style", "display: none");
    cardEl.setAttribute("style", "display: none");
    backBtn.setAttribute("style", "display: block");
    scoreInitialsEl.setAttribute("style", "display: block");
    savedScoresEl.setAttribute("style", "display: block");
    document.getElementsByClassName('card')[0].style.visibility='hidden';
   
})

  //button to return to quiz
  backBtn.addEventListener("click", function () {
    open("index.html");
})
