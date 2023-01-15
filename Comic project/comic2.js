

let FlyingAirplane = document.getElementById("airplane_China")
console.log (FlyingAirplane);


FlyingAirplane.addEventListener("click", function(){
	console.log('clicked');
	move_to_Right();
	move_to_Left();
	

	if (FlyingAirplane) {

		let start = Date.now();
		let timer = setInterval(function() {

        let timePassed = Date.now() - start;

        let transformAttr = "translate(" + timePassed/5 + ", 0)";
        FlyingAirplane.setAttribute('transform', transformAttr);

        if (timePassed > 8000) clearInterval(timer);

      }, 20);

	}

 })



function move_to_Right(){
	    left = parseInt(imgObj.style.left, 10);

	    if (-250>= left) {
	        imgObj.style.left = (left + 2) + 'px';
	        imgObj.style.visibility='visible';

	        animate = setTimeout(function(){move_to_Right();},15); // call moveRight in 20msec

	        
	    } else {
	        stop();
	    }
	    
	}



function move_to_Left(){
	    right = parseInt(Cloud_Right.style.right, 10);

	    if (-250 >= right) {
	         Cloud_Right.style.right = (right + 2) + 'px';
	         Cloud_Right.style.visibility='visible';

	        animate = setTimeout(function(){move_to_Left();},15); // call moveRight in 20msec

	        
	    } else {
	        stop();
	        
	        
	    }
	    
	}
let EuropeAirplane = document.getElementById("airplane_Europe")
console.log (EuropeAirplane);


EuropeAirplane.addEventListener("click", function(){
	moveEU_to_Right();
	moveEU_to_Left();
	

	if (EuropeAirplane) {

		let start = Date.now();
		let timer = setInterval(function() {

        let timePassed = Date.now() - start;

        let transformAttr = "translate(" + -timePassed/5 + ", 0)";
        EuropeAirplane.setAttribute('transform', transformAttr);

        if (timePassed > 8000) clearInterval(timer);

      }, 20);

	}

 })

function init(){

		//China
	   imgObj = document.getElementById('CloudLeft');
	   imgObj.style.position= 'absolute';
	   imgObj.style.left = '-1400px';

	   // imgObj.style.visibility='hidden';

	   Cloud_Right = document.getElementById('CloudRight');
	   Cloud_Right.style.position= 'absolute';
	   Cloud_Right.style.right = '-1400px';
	   // Cloud_Right.style.visibility='hidden';

	   //USA
	   USACloud_Left = document.getElementById('USACloudLeft');
	   USACloud_Left.style.position= 'absolute';
	   USACloud_Left.style.left = '-1400px';

	   // imgObj.style.visibility='hidden';

	   USACloud_Right = document.getElementById('USACloudRight');
	   USACloud_Right.style.position= 'absolute';
	   USACloud_Right.style.right = '-1400px';


	   
	   EuropeCloud_Left = document.getElementById('Europe_CloudLeft');
	   EuropeCloud_Left.style.position= 'absolute';
	   EuropeCloud_Left.style.left = '-1400px';

	   // imgObj.style.visibility='hidden';

	   EuropeCloudRight = document.getElementById('Europe_CloudRight');
	   EuropeCloudRight.style.position= 'absolute';
	   EuropeCloudRight.style.right = '-1400px';

	   AfricaCloud_Left = document.getElementById('Africa_CloudLeft');
	   AfricaCloud_Left.style.position= 'absolute';
	   AfricaCloud_Left.style.left = '-1400px';

	   // imgObj.style.visibility='hidden';

	   AfricaCloudRight = document.getElementById('Africa_CloudRight');
	   AfricaCloudRight.style.position= 'absolute';
	   AfricaCloudRight.style.right = '-1400px';

	   UAECloud_Left = document.getElementById('UAE_CloudLeft');
	   UAECloud_Left.style.position= 'absolute';
	   UAECloud_Left.style.left = '-1400px';

	   // imgObj.style.visibility='hidden';

	   UAECloudRight = document.getElementById('UAE_CloudRight'); 
	   UAECloudRight.style.position= 'absolute';
	   UAECloudRight.style.right = '-1400px';

	}

function moveEU_to_Right(){
	    left = parseInt(EuropeCloud_Left.style.left, 10);

	    if (-250>= left) {
	        EuropeCloud_Left.style.left = (left + 2) + 'px';
	        EuropeCloud_Left.style.visibility='visible';

	        animate = setTimeout(function(){moveEU_to_Right();},15); // call moveRight in 20msec

	        
	    } else {
	        stop();
	    }
	    
	}



function moveEU_to_Left(){
	    right = parseInt(EuropeCloudRight.style.right, 10);

	    if (-250>= right) {
	         EuropeCloudRight.style.right = (right + 2) + 'px';
	         EuropeCloudRight.style.visibility='visible';

	        animate = setTimeout(function(){moveEU_to_Left();},15); // call moveRight in 20msec

	        
	    } else {
	        stop();
	        
	        
	    }
	    
	}



let USAFlyingAirplane = document.getElementById("airplane_USA")

USAFlyingAirplane.addEventListener("click", function(){
	moveUSA_to_Right();
	moveUSA_to_Left();
	

	if (USAFlyingAirplane) {

		let start = Date.now();
		let timer = setInterval(function() {

        let timePassed = Date.now() - start;

        let transformAttr = "translate(" + -timePassed/5 + ", 0)";
        USAFlyingAirplane.setAttribute('transform', transformAttr);

        if (timePassed > 8000) clearInterval(timer);

      }, 20);

	}

 })

function moveUSA_to_Right(){
	    left = parseInt(USACloud_Left.style.left, 10);

	    if (-250>= left) {
	        USACloud_Left.style.left = (left + 2) + 'px';
	        USACloud_Left.style.visibility='visible';

	        animate = setTimeout(function(){moveUSA_to_Right();},15); // call moveRight in 20msec

	        
	    } else {
	        stop();
	    }
	    
	}



function moveUSA_to_Left(){
	    right = parseInt(USACloud_Right.style.right, 10);

	    if (-250 >= right) {
	         USACloud_Right.style.right = (right + 2) + 'px';
	         USACloud_Right.style.visibility='visible';

	        animate = setTimeout(function(){moveUSA_to_Left();},15); // call moveRight in 20msec

	        
	    } else {
	        stop();
	        
	        
	    }
	    
	}

let AfricaAirplane = document.getElementById("airplane_Africa")
AfricaAirplane.addEventListener("click", function(){
	moveAFR_to_Right();
	moveAFR_to_Left();
	

	if (AfricaAirplane) {

		let start = Date.now();
		let timer = setInterval(function() {

        let timePassed = Date.now() - start;

        let transformAttr = "translate(" + -timePassed/5 + ", 0)";
        AfricaAirplane.setAttribute('transform', transformAttr);

        if (timePassed > 8000) clearInterval(timer);

      }, 20);

	}

 })



function moveAFR_to_Right(){
	    left = parseInt(AfricaCloud_Left.style.left, 10);

	    if (-250>= left) {
	        AfricaCloud_Left.style.left = (left + 2) + 'px';
	        AfricaCloud_Left.style.visibility='visible';

	        animate = setTimeout(function(){moveAFR_to_Right();},15); // call moveRight in 20msec

	        
	    } else {
	        stop();
	    }
	    
	}



function moveAFR_to_Left(){
	    right = parseInt(AfricaCloudRight.style.right, 10);

	    if (-250 >= right) {
	         AfricaCloudRight.style.right = (right + 2) + 'px';
	         AfricaCloudRight.style.visibility='visible';

	        animate = setTimeout(function(){moveAFR_to_Left();},15); // call moveRight in 20msec

	        
	    } else {
	        stop();
	        
	        
	    }
	    
	}


let UAEAirplane = document.getElementById("airplane_UAE")
UAEAirplane.addEventListener("click", function(){
	moveUAE_to_Right();
	moveUAE_to_Left();
	

	if (UAEAirplane) {

		let start = Date.now();
		let timer = setInterval(function() {

        let timePassed = Date.now() - start;

        let transformAttr = "translate(" + timePassed/5 + ", 0)";
        UAEAirplane.setAttribute('transform', transformAttr);

        if (timePassed > 8000) clearInterval(timer);

      }, 20);

	}

 })
function moveUAE_to_Right(){
	    left = parseInt(UAECloud_Left.style.left, 10);

	    if (-250>= left) {
	        UAECloud_Left.style.left = (left + 2) + 'px';
	        UAECloud_Left.style.visibility='visible';

	        animate = setTimeout(function(){moveUAE_to_Right();},15); // call moveRight in 20msec

	        
	    } else {
	        stop();
	    }
	    
	}



function moveUAE_to_Left(){
	    right = parseInt(UAECloudRight.style.right, 10);

	    if (-250 >= right) {
	         UAECloudRight.style.right = (right + 2) + 'px'; 
	         UAECloudRight.style.visibility='visible';

	        animate = setTimeout(function(){moveUAE_to_Left();},15); // call moveRight in 20msec

	        
	    } else {
	        stop();
	        
	        
	    }
	    
	}



function stop(){
   clearTimeout(animate);
}

window.onload = function() {init();};


function expand_China(){
	
	document.getElementById('main-container').style.height = "600vh"
}

function expand_Europe(){
	
	document.getElementById('main-container').style.height = "850vh"
}


function expand_USA(){
	
	document.getElementById('main-container').style.height = "1100vh"
}


function expand_Africa(){
	
	document.getElementById('main-container').style.height = "1365vh"
}

function expand_UAE(){
	
	document.getElementById('main-container').style.height = "1620vh"
}

function expand_India(){
	
	document.getElementById('main-container').style.height = "1715vh"
}





