var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;
var radius2 = 80;
var radius3 = 105;
var radius4 = 115;
var radius5 = 110;

context.beginPath();
context.arc(centerX, centerY, radius5, 0, 2 * Math.PI, false);
context.fillStyle = '#F6C164';
context.globalAlpha=0.3;
context.fill();

context.beginPath();
context.arc(centerX, centerY, radius4, 0, 2 * Math.PI, false);
context.fillStyle = '#E9533F';
context.globalAlpha=0.2;
context.fill();

context.beginPath();
context.arc(centerX, centerY, radius3, 0, 2 * Math.PI, false);
context.fillStyle = '#FFC665';
context.globalAlpha=0.1;
context.fill();

context.beginPath();
context.arc(centerX, centerY, radius2, 0, 2 * Math.PI, false);
context.fillStyle = '#FF794C';
context.globalAlpha=0.5;
context.fill();

context.fillStyle = 'black';
context.font = "20px Georgia";
context.fillText("", centerX-30, centerY);



//animate circles
function circleAnimationFunction(){
	clearedAnimation = false;
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	var centerX = canvas.width / 2;
	var centerY = canvas.height / 2;
	//radius is the only thing that changes
	var radius = 10;
	var radius2 = 15;
	var radius3 = 20;
	var radius4 = 25;
	var radius5 = 30;
	var radius6 = 35;
	var timer;
	var sinFunctionInput = 0;
	function myFunction() {
		   timer =	setInterval(function(){
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.beginPath();
			context.arc(centerX, centerY, (radius5+radius5*Math.sin(sinFunctionInput+2)) , 0, 2 * Math.PI, false);
			context.fillStyle = '#744D74';
			context.globalAlpha=0.7;
			context.fill();

			context.beginPath();
			context.arc(centerX, centerY, (radius4+radius4*Math.sin(sinFunctionInput+4)), 0, 2 * Math.PI, false);
			context.fillStyle = '#B67B74';
			context.globalAlpha=(0.8)*Math.sin(sinFunctionInput+4);
			context.fill();

			context.beginPath();
			context.arc(centerX, centerY, (radius3+radius3*Math.sin(sinFunctionInput+6)), 0, 2 * Math.PI, false);
			context.fillStyle = '#DC4139';
			context.globalAlpha=(0.9)*Math.sin(sinFunctionInput+4);
			context.fill();

			context.beginPath();
			context.arc(centerX, centerY, (radius2+radius2*Math.sin(sinFunctionInput+8)), 0, 2 * Math.PI, false);
			context.fillStyle = '#87D2BC';
			context.globalAlpha=0.7;
			context.fill();

			context.fillStyle = '#ffee93';
			context.font = "20px Georgia";
			context.fillText("TOP", centerX-20, centerY+7);
			sinFunctionInput+=.05;
			if(sinFunctionInput>20||clearedAnimation){clearInterval(timer);executeReturnTransportPosition();}
	}, 50);
}//animation stuff
	myFunction();
}//end animation circles
