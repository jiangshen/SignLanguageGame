// On Load
$(document).ready(function() {
    init();
});

// global variables
var wordsArray;
var wordsIndex = 0;
var currWord;
var wordListHTMLArray = [];

var isFinished = false;
var isDone = false;

var gamePlayedOnce;

function init() {

    $('#welcomeTextWrapper').html("<h1 class='title-green'>Welcome " + localStorage.getItem('name') + "</h1>");
    wordsArray = JSON.parse(localStorage.getItem('words'));

    // populate word lists
    for (var w = 0; w < wordsArray.length; w++) {
        wordListHTMLArray.push("<label>" + wordsArray[w] + "</label><br />");
    }
    nextWord();
}

function nextWord() {
    if (isFinished) {
        gameEnd();
    }
    if (wordsIndex >= wordsArray.length) {
        $('#txt_word').text("Reached end of the list");
        isFinished = true;
        return;
    }
    currWord = wordsArray[wordsIndex];
    $('#txt_word').text(currWord);
    localStorage.setItem('currentWord', currWord);
    wordsIndex++;
    var wordListHTML = "";
    for (var i = wordsIndex; i < wordListHTMLArray.length; i++) {
        wordListHTML += wordListHTMLArray[i];
    }
    $('#wordListWrapper').html(wordListHTML);
    showVideos();
}

function setNextColor() {
    // alert(colorStrQueue.length);
    var cW = localStorage.getItem("currentWord");
    var color = "";
    if (colorStrQueue.length == 1) {
        color = colorStrQueue[0];
    } else {
        color = colorStrQueue.shift();
    }
    // cW = cW + " = " + color;
    // $('#txt_word').text(cW);
    $('#txt_word_color').text("{ "+color+" }");
    switch (color) {
        case "RED":
            $('#txt_word_color').css('color', '#d64f5a');
            break;
        case "BLUE":
            $('#txt_word_color').css('color', '#1b97ee');
            break;
        case "BLACK":
            $('#txt_word_color').css('color', '#000000');
            break;
        case "GREEN":
            $('#txt_word_color').css('color', '#5bec83');
            break;
        case "PURPLE":
            $('#txt_word_color').css('color', '#d655f6');
            break;
        case "YELLOW":
            $('#txt_word_color').css('color', '#ecd427');
            break;
        case "ORANGE":
            $('#txt_word_color').css('color', '#fa733e');
            break;
        case "WHITE":
            $('#txt_word_color').css('color', '#ffffff');
            break;
        default:
            break;
    }
}

function gameEnd() {
    isDone = true;
    gamePlayedOnce = true;
    UserAlerts_Tool.showAlert('winner', false);
    setTimeout(function() {
        window.location.href = "index.html";
    }, 1000);
}