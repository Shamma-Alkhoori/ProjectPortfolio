
    if (document.body.scrollTop > 0 && document.body.scrollTop < 1305 || document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < 1305) {
      document.getElementById("kit").className = "newAtt";} 
    else {
      document.getElementById("kit").className = "oldAtt";
    }

    if (document.body.scrollTop > 1305 || document.documentElement.scrollTop > 1305 ) {
      document.getElementById("about").className = "newAtt";} 
    else {
      document.getElementById("about").className = "oldAtt";
    }


  window.onscroll = function() {DIYkit(); about(); };

  function DIYkit() {
    if (document.body.scrollTop > 0 && document.body.scrollTop < 1305 || document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < 1305) {
      document.getElementById("kit").className = "newAtt";} 
    else {
      document.getElementById("kit").className = "oldAtt";
    }
  }

  function about() {
    if (document.body.scrollTop > 1305 || document.documentElement.scrollTop > 1305 ) {
      document.getElementById("about").className = "newAtt";} 
    else {
      document.getElementById("about").className = "oldAtt";
    }
  }
