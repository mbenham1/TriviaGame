var timeCount = 15;
var timeCount1;
var correctAnswers = ["Reed", "Jack", "Augusta", "1934"];
var wins = 0;
var losses = 0;
var question;
var answer;

var answers = function () {
    $("#all").hide();
    $("#results").show();
    for (let i = 1; i < 5; i++) {
        question = 'question' + (i).toString().trim();
        answer = $("input[name=" + question + "]:checked").val();
        console.log(answer);
        if (answer === correctAnswers[i - 1]) {
            wins++;
            $("#correct").html(wins);
        } else {
            losses++;
            $("#incorrect").html(losses);
        }
    }
    var par = -(wins - losses);
    if (par > 0) {
        $("#topar").html("+" + par).css({"color": "black"});
    } else {
        $("#topar").html(par).css({"color": "red"});
    } if (par === 0) {
        $("#topar").html("EVEN").css({"color": "yellow"});
    }
}

function decrement() {
    timeCount--;
    $("#timer").text(timeCount);
    if (timeCount <= 0) {
        clearInterval(timeCount1);
        answers();
    }
}

var start = function () {
    $("#all").hide();
    $("#results").hide();
    $("#press").html("Press Spacebar to Start");
    
    document.onkeyup = function () {
        var spaceBar = event.charCode || event.keyCode;
        if (spaceBar === 32) {
            clearInterval(timeCount1);
            timeCount1 = setInterval(decrement, 1000);
            $("#all").show();
            $("#press").hide();
            $("img").hide();
            timeCount = 15;
            $("#timer").text(timeCount);
            $("#results").hide();
            wins = 0;
            losses = 0;
            $("#correct").html(wins);
            $("#incorrect").html(losses);
        }
    }
};

start();

// Timer increases when Spacebar is clicked and doesn't stop
// Clearing the results from the previous answers
// Too much "hard code" and easily unraveled, not continuous