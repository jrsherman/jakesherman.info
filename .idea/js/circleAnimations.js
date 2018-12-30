


function setCanvas() {
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
}


setCanvas();
