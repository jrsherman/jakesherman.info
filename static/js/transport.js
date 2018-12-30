function executeTransport(tagObject){
	tagTypeAsValue = tagObject.type;
	circleAnimationFunction();
	var promise1 = new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve('kk');
		}, $(window).width())-400;
	});
	$("#profPic").fadeOut();
promise1.then(function(value) {//when first async is done this will run
	$("#myCanvas").animate({
	  marginLeft: $(window).width()-400
  }, 600 );
  $("#profPic").animate({
	 marginLeft: $(window).width()-400
 }, 600 );
	$("#myCanvas").css({position:'fixed'});//changes to fixed
	$("#profPic").css({position:'fixed'});
	setTimeout(
  function()
  {
	  $('html, body').animate({
	scrollTop: $("#"+tagTypeAsValue+"").offset().top
}, $(window).width()-400, function(){});
  //clearInterval(timer);
}, 500);
});
}
