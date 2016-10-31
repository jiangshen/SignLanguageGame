// On Load
$(document).ready(function() {
    $('#btn_begin').click(transition);
});

function transition() {
    var rawWords = $('#txt_words').val();
    if (rawWords === "") {
        alert("Please enter some words");
        return
    }
    if (rawWords[rawWords.length - 1] === ',') {
        rawWords = rawWords.substr(0, rawWords.length - 1);
    }
    var wordArray = rawWords.split(",");
    for (var i = 0; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i].trim();
    }
    localStorage.setItem('name', $('#txt_name').val());
    localStorage.setItem('words', JSON.stringify(wordArray));
    window.location.href = "game.html";
}