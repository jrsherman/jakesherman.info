
//event listner
$( window ).resize(function(){
	leftOffset = $("#profPic").offset().left;


		$("#rightBrain").css({marginLeft: ($(window).width())});
	$("#movingPicture").width($(window).width()+200);
	$("#movingPicture").height($(window).width()*.7);

	$("#movingPicture2").width($(window).width()+200);
	$("#movingPicture2").height($(window).width()*.9);

	if($(window).width()<=1018){
			$("#PICTURE").height($(window).width()*.6);
			$("#PICTURE2").height($(window).width()*.6);
			$("#profPic").css({marginLeft: ($(window).width()*.1)});
	}



		if($(window).width()<=700){

		}
		else{
			$("#navRow").css("background-size", $(window).width()+"px " + $(window).width()*.6 + "px");
		}

	// $("#myCanvas").left($(window).width()-200);
	if(document.getElementById("myCanvas").style.position == 'fixed'){
		$("#myCanvas").css({marginLeft: $(window).width()-400});
		$("#profPic").css({marginLeft: $(window).width()-400});

	}
});
//event listener for client scroll
$(window).scroll( function() {





 		var scrolled_val = $(document).scrollTop().valueOf();

		if(scrolled_val>=2245){
			$("#rightBrain").css({marginLeft: ($(window).width()+1210-(2245*.764))+(scrolled_val*.764-2245*.764)});

			$("#leftBrain").css({marginLeft: ((2245*.764)-1390)-(scrolled_val*.764-2245*.764)});
		}
		else{
			$("#rightBrain").css({marginLeft: ($(window).width()+1210-(scrolled_val*.764))});
			$("#leftBrain").css({marginLeft: ((scrolled_val*.764)-1390)});
		}

	 	$('#movingPicture2').css('margin-top',scrolled_val*.2-670+'px');
	 	$('#movingPicture').css('margin-top',scrolled_val*.2-170+'px');
		$('#profPic').css('background-position', '-13px '+scrolled_val*.1+'px');
		if(scrolled_val==0){
			executeVariationReturn();
		}


});
