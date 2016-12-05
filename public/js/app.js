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

function gameEnd() {
    isDone = true;
    gamePlayedOnce = true;
    UserAlerts_Tool.showAlert('winner', false);
    setTimeout(function() {
        window.location.href = "index.html";
    }, 1000);
}