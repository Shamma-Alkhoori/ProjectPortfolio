
// setting up timer times for each section for next button appearing
$secondsdelay1 = 7;
$secondsdelay2 = 13;
$secondsdelay3 = 10;
$secondsdelay4 = 15;
$secondsdelay5 = 13;
$secondsdelay6 = 15;
$secondsdelay7 = 19;
$secondsdelay8 = 35;

$delay0 = $secondsdelay1*0;
$delay1 = $secondsdelay1*1000;
$delay2 = $secondsdelay2*1000;
$delay3 = $secondsdelay3*1000;
$delay4 = $secondsdelay4*1000;
$delay5 = $secondsdelay5*1000;
$delay6 = $secondsdelay6*1000;
$delay7 = $secondsdelay7*1000;
$delay8 = $secondsdelay8*1000;


// function that toggle button state between hidden and vissible
function unhide(divID) {
	var item = document.getElementById(divID);
	if (item) {
		item.className=(item.className=='hidden')?'unhidde n':'hidden';
			}
}

// function that hides button after timer stops
function hide(divID) {
	var item = document.getElementById(divID);
	if (item) {
		item.className=(item.className=='hidden')?'unhidde n':'hidden';
			}
}


// functions that hide buttons
function hide1(){
	window.setTimeout("hide('links1')",$delay0);
}
function hide2(){
	window.setTimeout("hide('links2')",$delay0);
}
function hide3(){
	window.setTimeout("hide('links3')",$delay0);
}
function hide4(){
	window.setTimeout("hide('links4')",$delay0);
}
function hide5(){
	window.setTimeout("hide('links5')",$delay0);
}
function hide6(){
	window.setTimeout("hide('links6')",$delay0);
}
function hide7(){
	window.setTimeout("hide('links7')",$delay0);
}
function hide8(){
	window.setTimeout("hide('links8')",$delay0);
}
function hide9(){
	window.setTimeout("hide('links9')",$delay0);
}



// functions that reveal buttons when timers go finish
function startTimer0() {
	window.setTimeout("unhide('links1')",$delay1);
}

function startTimer1() {
	window.setTimeout("unhide('links2')",$delay1);
}

function startTimer2() {
	window.setTimeout("unhide('links3')",$delay2);
}

function startTimer3() {
	window.setTimeout("unhide('links4')",$delay3);
}

function startTimer4() {
	window.setTimeout("unhide('links5')",$delay4);
}

function startTimer5() {
	window.setTimeout("unhide('links6')",$delay5);
}

function startTimer6() {
	window.setTimeout("unhide('links7')",$delay6);
}
function startTimer7() {
	window.setTimeout("unhide('links8')",$delay7);
}
function startTimer8() {
	window.setTimeout("unhide('links9')",$delay8);
}


 
// function that disables scrolling
function disableScroll() { 
    // Get the current page scroll position 
    scrollTop =  
        window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft =  
        window.pageXOffset || document.documentElement.scrollLeft, 
  
    // if any scroll is attempted, 
    // set this to the previous value 
    window.onscroll = function() { 
        window.scrollTo(scrollLeft, scrollTop); 
        }; 
} 
 

// function that enables scrolling 
function enableScroll() { 
    window.onscroll = function() {}; 
} 



// functions that play audios
function play0() {
    var audio = document.getElementById("audio0");
    audio.play();
}
function play1() {
    var audio = document.getElementById("audio1");
    audio.play();
}

function play2() {
    var audio = document.getElementById("audio2");
    audio.play();
}

function play3() {
    var audio = document.getElementById("audio3");
    audio.play();
}

function play4() {
    var audio = document.getElementById("audio4");
    audio.play();
}

function play5() {
    var audio = document.getElementById("audio5");
    audio.play();
}

function play6() {
    var audio = document.getElementById("audio6");
    audio.play();
}

function play7() {
    var audio = document.getElementById("audio7");
    audio.play();
}

function play8() {
    var audio = document.getElementById("audio8");
    audio.play();
}

function play9() {
    var audio = document.getElementById("audio9");
    audio.play();
}




// functions that stop audio playback
function stop1() {
    var audio = document.getElementById("audio1");
    audio.pause();
	audio.currentTime = 0;
}

function stop2() {
    var audio = document.getElementById("audio2");
    audio.pause();
	audio.currentTime = 0;
}

function stop3() {
    var audio = document.getElementById("audio3");
    audio.pause();
	audio.currentTime = 0;
}

function stop4() {
    var audio = document.getElementById("audio4");
    audio.pause();
	audio.currentTime = 0;
}

function stop5() {
    var audio = document.getElementById("audio5");
    audio.pause();
	audio.currentTime = 0;
}

function stop6() {
    var audio = document.getElementById("audio6");
    audio.pause();
	audio.currentTime = 0;
}

function stop7() {
    var audio = document.getElementById("audio7");
    audio.pause();
	audio.currentTime = 0;
}

function stop8() {
    var audio = document.getElementById("audio8");
    audio.pause();
	audio.currentTime = 0;
}

function stop9() {
    var audio = document.getElementById("audio9");
    audio.pause();
	audio.currentTime = 0;
}

function stop0() {
    var audio0 = document.getElementById("audio0");
    audio0.pause();
    audio.currentTime = 0;
}



// functions that stop video playback
function stopVid1() {
    var video = document.getElementById("Video01");
    video.pause();
	video.currentTime = 0;
}

function stopVid2() {
    var video = document.getElementById("Video02");
    video.pause();
	video.currentTime = 0;
}

function stopVid3() {
    var video = document.getElementById("Video03");
    video.pause();
	video.currentTime = 0;
}

function stopVid4() {
    var video = document.getElementById("Video04");
    video.pause();
	video.currentTime = 0;
}

function stopVid5() {
    var video = document.getElementById("Video05");
    video.pause();
	video.currentTime = 0;
}

function stopVid6() {
    var video = document.getElementById("Video06");
    video.pause();
	video.currentTime = 0;
}

function stopVid7() {
    var video = document.getElementById("Video07");
    video.pause();
	video.currentTime = 0;
}

function stopVid8() {
    var video = document.getElementById("Video08");
    video.pause();
	video.currentTime = 0;
}

function stopVid9() {
    var video = document.getElementById("Video09");
    video.pause();
	video.currentTime = 0;
}





// functions that start video playback
function playVid1() {
    var video = document.getElementById("Video01");
    video.play();	
}

function playVid2() {
    var video = document.getElementById("Video02");
	video.play();
}

function playVid3() {
    var video = document.getElementById("Video03");
	video.play();
}

function playVid4() {
    var video = document.getElementById("Video04");
 	video.play();
}

function playVid5() {
    var video = document.getElementById("Video05");
	video.play();
}

function playVid6() {
    var video = document.getElementById("Video06");
	video.play();
}

function playVid7() {
    var video = document.getElementById("Video07");
	video.play();
}

function playVid8() {
    var video = document.getElementById("Video08");
	video.play();
}
function playVid9() {
    var video = document.getElementById("Video09");
	video.play();
}


// functions that change text on landing page button
function changeText(){
	document.getElementById('p1').innerHTML = "Use headphones!";
}

function originalText(){
	document.getElementById('p1').innerHTML = "Let's start!";
}









