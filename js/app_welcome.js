// On Load
$(document).ready(function() {
    $('#btn_begin').click(transition);
    document.addEventListener('keyup', function(inEvent) {
        switch (inEvent.keyCode) {
            // enter key is released
            case 13:
                transition();
                break;
        }
    });

    var name = localStorage.getItem("name");
    if (name !== "") {
        $('#txt_name').val(name);
        $('#txt_words').focus();
    }
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