function check() {

    if (document.getElementById('1').checked){
    document.getElementById("video-1").checked = "checked";}
    if (document.getElementById('2').checked){
    document.getElementById("video-2").checked = "checked";}
    if (document.getElementById('3').checked){
    document.getElementById("video-3").checked = "checked";}
    if (document.getElementById('4').checked){
    document.getElementById("video-4").checked = "checked";}    
}

/*if (document.body.scrollTop == 0) {
  document.getElementById("home").className = "newAtt";
}
*/
window.onscroll = function() {home(); getstarted(); about() };

function home() {
  if (document.body.scrollTop > 0 && document.body.scrollTop < 558 || document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < 558) {
    document.getElementById("home").className = "newAtt";} 
  else {
    document.getElementById("home").className = "oldAtt";
  }
}

function getstarted() {
    if (document.body.scrollTop > 558 && document.body.scrollTop < 1550 || document.documentElement.scrollTop > 558 && document.documentElement.scrollTop < 1550) {
      document.getElementById("started").className = "newAtt";} 
    else {
      document.getElementById("started").className = "oldAtt";
    }
  }

function about() {
    if (document.body.scrollTop > 1550 || document.documentElement.scrollTop > 1550 ) {
      document.getElementById("about").className = "newAtt";} 
    else {
      document.getElementById("about").className = "oldAtt";
    }
  }


