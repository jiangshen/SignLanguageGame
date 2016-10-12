/**
 * == UserScript ==
 *
 * @name        ASL Smartsign Trigger
 * new url script by Scott Robertson
 *
 * @namespace   https://m3.cip.gatech.edu/d/ogoldbart3/
 * @description ASL Test 131018
 * @version     23
 *
 */


// @include http://*/*
// @include https://*/*
// @include chrome://*/*
// @grant metadata
// @grant GM_xmlhttpRequest
//
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js

//function videopage() {
	//alert ("ok")
//}

localStorage.setItem('currentWord',"");

$(document).ready(function() {
    $('body').append('<div id="lightbox" style="display:none;position:fixed;top:0;right:0;width:33%;height:185px;background:rgba(0,0,0,0.0);text-align:center;z-index:9999"></div>');
});

// get video display order keyword, if present - pattern is {#}
function getVideoOrder(vid) {
    var keywords = vid.keywords,
        orderKey, order = 999;
    orderKey = keywords.filter(function(element) {
        return element.match(/^\{\d+\}$/) !== null;
    });
    if (orderKey.length > 0) {
        order = parseInt(orderKey[0].slice(1,-1), 10);
    }
    return order;
}

function showVideos() {
var currentWord = localStorage.getItem('currentWord');
    console.log( "getting to here with " + currentWord);

    $.ajax({
        method: "GET",
        url: "https://dictionary-smartsign.rhcloud.com/videos?keywords=" + currentWord,
        dataType: 'jsonp',
        success: function(response) {
            console.log( response );
            console.log( response[0] );
            //var data = $.parseJSON(response.responseText);

            var data = response.data;
            // sort data array

            data.sort(function(a, b) {
                return getVideoOrder(a) - getVideoOrder(b);
            });

            var idArray = new Array(data.length);

            for ( var i = 0; i < data.length; i++ ) {
                idArray[i] = '<iframe width="320" height="180" align="center" src="http://www.youtube.com/embed/' + data[i]['id'] + '?rel=0&showinfo=0&controls=0"> </iframe>';
                console.log( idArray[i] );
            }

            console.log( data.length);
            var htmlString = '<div style="width:100%;position=absolute;text-align:center"> <div style="position:relative;left:25%;width:320px;text-align:left;">';

            for(var k=0; k<idArray.length; k++) {
                htmlString += idArray[k];
            }

            $('#lightbox')
                .html(htmlString)
                .css({"line-height":($(window).height()*0)+"px", "overflow":"auto", "display":"block"})
                .fadeIn('fast')
                .on('click', function(){
                    $(this).fadeOut('fast');
					$('#searchwindow').show();
                });

            //console.log( htmlString );
            //console.log("running fine");
            //console.log("T = " + t);
            $('#searchwindow').hide();
        }
    });
}

function showEndVideo() {
    var currentWord = localStorage.getItem('currentWord');
    console.log( "getting to here with " + currentWord);

    $.ajax({
        method: "GET",
        url: "https://dictionary-smartsign.rhcloud.com/videos?keywords=" + "hooray",
        dataType: 'jsonp',
        success: function(response) {
            console.log( response );
            console.log( response[0] );
            //var data = $.parseJSON(response.responseText);
            var data = response.data;

            // sort data array
            data.sort(function(a, b) {
                return getVideoOrder(a) - getVideoOrder(b);
            });

            var idArray = new Array(data.length);

            for ( var i = 0; i < data.length; i++ ) {
                idArray[i] = '<iframe width="320" height="180" align="center" src="http://www.youtube.com/embed/' + data[i]['id'] + '?rel=0&showinfo=0&controls=0"> </iframe>';
                console.log( idArray[i] );
            }

            console.log( data.length);
            var htmlString = '<div style="width:100%;position=absolute;text-align:center"> <div style="position:relative;left:25%;width:320px;text-align:left;">';

            for(var k=0; k<idArray.length; k++) {
                htmlString += idArray[k];
            }

            $('#lightbox')
                .html(htmlString)
                .css({"line-height":($(window).height()*0)+"px", "overflow":"auto", "display":"block"})
                .fadeIn('fast')
                .on('click', function(){
                    $(this).fadeOut('fast');
					$('#searchwindow').show();
                });

            //console.log( htmlString );
            //console.log("running fine");
            //console.log("T = " + t);
            $('#searchwindow').hide();
        }
    });
}

function showimage() {
    var img = document.createElement('img');
    img.src = "img/image1.gif";
    document.body.appendChild(img).style.margin = "-100px 0% 0% 75%";
}



