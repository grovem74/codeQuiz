var score = document.querySelector("#score");
var startBtn = document.querySelector("#start");
var nextBtn = document.querySelector("#next");
var rules = document.querySelector("#rules");
var timeEl = document.querySelector("#time");
var mainEl = document.querySelector("#main");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
var resultEl = document.querySelector("#result");
var result2El = document.querySelector("#result2");
var result3El = document.querySelector("#result3");
var userAnswerCorrect = 0;
var finalScore = userAnswerCorrect * 10 + timeRemaining;

//game starts with timer at 60 seconds
var timeRemaining = 60;
var timerInterval

//Event listener for start button
startBtn.addEventListener("click", function () {
     timerInterval = setInterval(function () {
        timeRemaining--;
        timeEl.textContent = timeRemaining;

        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            mainEl.textContent = ("YOU HAVE RUN OUT OF TIME.");
            endGame();
        }

    }, 1000);

    startGame();
    startBtn.setAttribute("style", "display: none")
    rules.setAttribute("style", "display: none")
    answer1El.setAttribute("style", "display: block");
    answer2El.setAttribute("style", "display: block");
    answer3El.setAttribute("style", "display: block");
    answer4El.setAttribute("style", "display: block");

});
var q = 0;
//Event listener for next button
nextBtn.addEventListener("click", function () {
    q++;
    nextBtn.setAttribute("style", "display: none");
    mainEl.textContent = (questions[q].title);
    answer1El.setAttribute("value", (questions[q].choices[0]));
    answer2El.setAttribute("value", (questions[q].choices[1]));
    answer3El.setAttribute("value", (questions[q].choices[2]));
    answer4El.setAttribute("value", (questions[q].choices[3]));
    resultEl.setAttribute("style", "display: none");
   
    
});



//function to start game
function startGame() {
    //loop through the questions in the array 
    //for (var i = 0; i < questions.length; i++) {
    //var i = 0;
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
        }
        else {
            result.setAttribute("style", "display: block");
            resultEl.textContent = ("Incorrect.");
            timeRemaining -= 10;
            nextBtn.setAttribute("style", "display: block");
        }


    });

    answerBtn2.addEventListener("click", function () {

        if (questions[q].choices[1] === questions[q].answer) {
            result.setAttribute("style", "display: block");
            resultEl.textContent = ("Correct.");
            userAnswerCorrect++;
            nextBtn.setAttribute("style", "display: block");
        }
        else {
            result.setAttribute("style", "display: block");
            resultEl.textContent = ("Incorrect.");
            timeRemaining -= 10;
            nextBtn.setAttribute("style", "display: block");
        }

    });

    answerBtn3.addEventListener("click", function () {

        if (questions[q].choices[2] === questions[q].answer) {
            result.setAttribute("style", "display: block");
            resultEl.textContent = ("Correct.");
            userAnswerCorrect++;
            nextBtn.setAttribute("style", "display: block");
        }
        else {
            result.setAttribute("style", "display: block");
            resultEl.textContent = ("Incorrect.");
            timeRemaining -= 10;
            nextBtn.setAttribute("style", "display: block");
        }

    });

    answerBtn4.addEventListener("click", function () {

        if (questions[q].choices[3] === questions[q].answer) {
            result.setAttribute("style", "display: block");
            resultEl.textContent = ("Correct.");
            userAnswerCorrect++;
            nextBtn.setAttribute("style", "display: block");
        }
        else {
            result.setAttribute("style", "display: block");
            resultEl.textContent = ("Incorrect.");
            timeRemaining -= 10;
            nextBtn.setAttribute("style", "display: block");
        }

    });
}
//} 

function endGame() {    
    clearInterval(timerInterval);
    mainEl.setAttribute("style", "display: none");
    answer1El.setAttribute("style", "display: none");
    answer2El.setAttribute("style", "display: none");
    answer3El.setAttribute("style", "display: none");
    answer4El.setAttribute("style", "display: none");
    nextBtn.setAttribute("style", "display: none");
    resultEl.setAttribute("style", "display: none");
    result2El.setAttribute("style", "display: block");
    result3El.setAttribute("style", "display: block");
    result2El.textContent = ("You got " + userAnswerCorrect + " of " + questions.length + " questions correct with 0:" + timeRemaining + " remaining.");
    result3El.textContent = ("Your score is " + finalScore);

}

// Answer buttons
var answerBtn = document.querySelector("#answer1");
var answerBtn2 = document.querySelector("#answer2");
var answerBtn3 = document.querySelector("#answer3");
var answerBtn4 = document.querySelector("#answer4");



