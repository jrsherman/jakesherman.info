
function circleAnimationFunction(){
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
	var timer
	//+ 20*Math.sin(radians)
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
			if(sinFunctionInput>20){clearInterval(timer);transport5();}
	}, 50);
	}
			myFunction();
}

function executeUx(){
		$("#onDemandDisplayBackDrop").show();
		setTimeout(
	  function()
	  {
		  $( "#leftBrain" ).animate({ "left": "+=589px" }, "slow" );
		  $( "#rightBrain" ).animate({ "left": "-=621px" }, "slow" );
	 }, 100);
}

function transport(){
	circleAnimationFunction()
	var promise1 = new Promise(function(resolve, reject) {
	  setTimeout(function() {

	    resolve('kk');
	 }, 1350);
	});
			$("#profPic").hide();
	promise1.then(function(value) {//when first async is done this will run
			//$("#myCanvas").animate({left: '700px'});
		//	$("#profPic").animate({left: '700px'});
			$("#myCanvas").animate({
			  left: 1350,
			 // top: -100
		  }, 600 );

		  $("#profPic").animate({
			 left: 1350,
			  //top: -100
		 }, 600 );
		   $("#myCanvas").css({position:'fixed'});
		   $("#profPic").css({position:'fixed'});

			setTimeout(
		  function()
		  {
			  $('html, body').animate({
			  scrollTop: $("#DeployedSites").offset().top
		  }, 1350, function(){});
		  //clearInterval(timer);
	  }, 500);
	});
}//end transport

function transport2(){

	circleAnimationFunction();





var promise1 = new Promise(function(resolve, reject) {
setTimeout(function() {

 resolve('kk');
}, 1350);
});
	$("#profPic").hide();
promise1.then(function(value) {//when first async is done this will run
	//$("#myCanvas").animate({left: '700px'});
//	$("#profPic").animate({left: '700px'});
	$("#myCanvas").animate({
	  left: 990
  }, 600 );

  $("#profPic").animate({
	 left: 990
 }, 600 );
	$("#myCanvas").css({position:'fixed'});
	$("#profPic").css({position:'fixed'});

	setTimeout(
  function()
  {
	  $('html, body').animate({
	scrollTop: $("#me").offset().top
  }, 1350, function(){});
  //clearInterval(timer);
}, 500);
});
}
function transport3(){
	circleAnimationFunction();

var promise1 = new Promise(function(resolve, reject) {
setTimeout(function() {

 resolve('kk');
}, 1350);
});
	$("#profPic").hide();
promise1.then(function(value) {//when first async is done this will run
	//$("#myCanvas").animate({left: '700px'});
//	$("#profPic").animate({left: '700px'});
	$("#myCanvas").animate({
	  left: 1350
  }, 600 );

  $("#profPic").animate({
	 left: 1350
 }, 600 );
	$("#myCanvas").css({position:'fixed'});
	$("#profPic").css({position:'fixed'});

	setTimeout(
  function()
  {
	  $('html, body').animate({
	scrollTop: $("#PICTURE").offset().top
  }, 1350, function(){});
  //clearInterval(timer);
}, 500);
});
}
function transport4(){
		circleAnimationFunction();

	var promise1 = new Promise(function(resolve, reject) {
	setTimeout(function() {

	 resolve('kk');
	}, 1350);
	});
		$("#profPic").hide();
	promise1.then(function(value) {//when first async is done this will run
		//$("#myCanvas").animate({left: '700px'});
	//	$("#profPic").animate({left: '700px'});
		$("#myCanvas").animate({
		  left: 1350
	  }, 600 );

	  $("#profPic").animate({
		 left: 1350
	 }, 600 );
		$("#myCanvas").css({position:'fixed'});
		$("#profPic").css({position:'fixed'});

		setTimeout(
	  function()
	  {
		  $('html, body').animate({
			  scrollTop: $("#muiscRow").offset().top
	  }, 1350, function(){});
	  //clearInterval(timer);
	}, 500);
	});
}
function transport5(){
	$("#onDemandDisplayBackDrop").hide();
	$('html, body').animate({
	scrollTop: $("#navRow").offset().top
	}, 1350);

	$("#myCanvas").animate({
	  left: 95
  }, 500 );

  $("#profPic").animate({
	 left: 95
 }, 500 );
	setTimeout(myFunction, 1350)





	function myFunction() {
		$("#myCanvas").css({left: 15, position:'absolute'});
	   $("#profPic").css({left: 15, position:'absolute'});

	}
	$("#profPic").show();

}

function transport7(){



		circleAnimationFunction();





	var promise1 = new Promise(function(resolve, reject) {
	setTimeout(function() {

	 resolve('kk');
	}, 1350);
	});
		$("#profPic").hide();
	promise1.then(function(value) {//when first async is done this will run
		//$("#myCanvas").animate({left: '700px'});
	//	$("#profPic").animate({left: '700px'});
		$("#myCanvas").animate({
		  left: 700
	  }, 600 );

	  $("#profPic").animate({
		 left: 700
	 }, 600 );
		$("#myCanvas").css({position:'fixed'});
		$("#profPic").css({position:'fixed'});

		setTimeout(
	  function()
	  {
		  $('html, body').animate({
			scrollTop: $("#ux").offset().top
	  }, 1350, function(){});
	  //clearInterval(timer);
	}, 500);
	});



	$("#onDemandDisplayBackDrop").show();

	setTimeout(
  function()
  {
	  $( "#leftBrain" ).animate({ "left": "+=589px" }, "slow" );
	  $( "#rightBrain" ).animate({ "left": "-=621px" }, "slow" );
 }, 3000);




	function lineDraw(){

		$( "#sequenceDiagrams" ).show( "slow" );
		$( "#layout" ).show( "slow" );
		$( "#sequenceDiagrams" ).show( "slow" );
		$( "#scenarios" ).show( "slow" );
		$( "#usecase" ).show( "slow" );
		$( "#photoshopWireframe" ).show( "slow" );
		$( "#styleGuide" ).show( "slow" );
  }

  //event listener
  $( "#onDemandDisplayBackDrop" ).click(function() {
	  $("#sequenceDiagrams").animate({
	  left: 480,
	  width: "175px",
	  height: "75px",
	  opacity: 1
	 }, 2000 );
	 $( "#layout" ).hide( "slow" );
	 $( "#sequenceDiagrams" ).hide( "slow" );
	 $( "#sequenceDiagrams" ).hide( "slow" );
	 $( "#scenarios" ).hide( "slow" );
	 $( "#usecase" ).hide( "slow" );
	 $( "#photoshopWireframe" ).hide( "slow" );
	 $( "#styleGuide" ).hide( "slow" );
	  setTimeout(
		function()
		{
		 $( "#leftBrain" ).animate({ "left": "-=589px" }, "slow" );
		 $( "#rightBrain" ).animate({ "left": "+=621px" }, "slow" );
	  }, 1350);
  $("#onDemandDisplayBackDrop").hide();
	 //alert( "Handler for .click() called." );
  });
		setTimeout(lineDraw, 2000);
	}
function moveIt(){
 //$( "#sequenceDiagrams" ).animate({ "left": "-=500px" }, "slow" );
 $("#sequenceDiagrams").animate({
	left: -480,
	width: "400px",
	height: "300px",
	opacity: 1
}, 2000 );
 $( "#seq" ).show( "slow" );
}

$(window).scroll( function() {
 		var scrolled_val = $(document).scrollTop().valueOf();
	 	$('#movingPicture2').css('margin-top',scrolled_val*.2-670+'px');
	 	$('#movingPicture').css('margin-top',scrolled_val*.2-170+'px');
		$('#profPic').css('background-position', '-13px '+scrolled_val*.1+'px');
});


$( window ).resize(function() {
	$("#myCanvas").css({left:''+($( window ).width()-500)*.9+'px'});
	$("#profPic").css({left:''+($( window ).width()-500)*.9+'px'});
});

$.ajax({
  url: './jsonData/categoryInfo.json',
  type: 'POST',//gateway/diagnosticResult
  contentType: 'application/json',
  /*data: JSON.stringify({
	   preformDiagnostic:"false",GWId:4,diagnosticToRun:"Memory.py",startTimestamp:"153984.36",finishTimestamp:"1573249.55",diagnosticResult:"success",
  }),*/
  dataType: 'json',
  success: function (response) {
	  //alert("hi");
	   $("#meContent").html(response.me.mainContent);
	   $("#musicContent").html(response.me.mainContent2);
		$("#deployedContent").html(response.me.mainContent3);
  },
  error: function (data, status, error) {
	   console.log(data, status, error);
	   var modal = document.getElementById('myModal');
	   $(".modal-content").html(data.responseJSON.message);
	   modal.style.display = "block";
  }
});
