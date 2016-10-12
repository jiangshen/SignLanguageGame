// On Load
$(document).ready(function() {
    $('#btn_show').click(displayVideo)
});

function displayVideo() {
    var inputValue = $('#txt_input').val();
    $('#txt_input').val("");
    if (inputValue == "") {
        $('#lbl').text("Input cannot be null");
        $('#lbl').css('color', '#E91E63');
    } else {
        localStorage.setItem('currentWord', inputValue);
        $('#lbl').text('SET {currentWord : '+ inputValue + '}');
        $('#lbl').css('color', '#009688');
        // Call showvideos function in showvideos.js
        showVideos();
    }
}
