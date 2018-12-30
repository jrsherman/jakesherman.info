var clearedAnimation = false;
var leftOffset;
//resizes pictures as soon as document is ready not an event listener


/*Start Transport functions*/

function executeUx(){
		$("#onDemandDisplayBackDrop").show();
		setTimeout(
	  function()
	  {
		  $( "#leftBrain" ).animate({ "left": "+=589px" }, "slow" );
		  $( "#rightBrain" ).animate({ "left": "-=621px" }, "slow" );
	 }, 100);
}
/*End Transport functions*/
//screen resize changes fixed left position wise maybe try to compensate width
//window width
//	console.log('leftset',leftSet,'leftOffset', leftOffset);
function executeVariationReturn(){
	$("#onDemandDisplayBackDrop").fadeOut();
	$('html, body').animate({
	}, $(window).width()-300);
	$("#myCanvas").animate({
	  marginLeft: -35
  }, 450 );
  $("#profPic").animate({
	 marginLeft: 70
 }, 500 );
	setTimeout(myFunction, $(window).width()-300)
	function myFunction() {
		 $("#myCanvas").css({position:'absolute',marginLeft: -35});
		 $("#profPic").css({position:'absolute',marginLeft: 70});
	}
	$("#profPic").show();
	clearedAnimation = true;


}

function executeReturnTransportPosition(){
	$("#onDemandDisplayBackDrop").fadeOut();
	$('html, body').animate({
	scrollTop: $("#navRow").offset().top
	}, $(window).width()-300);
	$("#myCanvas").animate({
	  marginLeft: -35
  }, 450 );
  $("#profPic").animate({
	 marginLeft: 70
 }, 500 );
	setTimeout(myFunction, $(window).width()-300)
	function myFunction() {
		 $("#myCanvas").css({position:'absolute',marginLeft: -35});
	    $("#profPic").css({position:'absolute',marginLeft: 70});
	}
	$("#profPic").show();
	clearedAnimation = true;
}

function executeUx(){
	circleAnimationFunction();
	var promise1 = new Promise(function(resolve, reject) {
	setTimeout(function() {
	 resolve('kk');
	}, $(window).width()-300);
	});
		$("#profPic").hide();
	promise1.then(function(value) {//when first async is done this will run
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
	  }, $(window).width()-300, function(){});
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
	  }, $(window).width()-300);
  $("#onDemandDisplayBackDrop").hide();
  });
		setTimeout(lineDraw, 2000);
	}
function moveIt(){
	 $("#sequenceDiagrams").animate({
		left: -480,
		width: "400px",
		height: "300px",
		opacity: 1
	}, 2000 );
	 $( "#seq" ).show( "slow" );
}
