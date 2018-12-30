var responseObject;
var responseArray;
$( document ).ready(function() {
	leftOffset = $("#profPic").offset().left;
	$("#navRow").css("background-size", $(window).width()+"px " + $(window).width()*.6 + "px");
	//resize fishbowl
	$("#movingPicture2").width($(window).width()+200);
	$("#movingPicture2").height($(window).width()*.9);
	//resize Instrument Picture
	$("#movingPicture").width($(window).width()+200);
	$("#movingPicture").height($(window).width()*.7);
		$("#rightBrain").css({marginLeft: ($(window).width())});
	if($(window).width()<=700){
			$("#navRow").css("background-size", 702+"px " + 421 + "px");
	}
	else{
		$("#navRow").css("background-size", $(window).width()+"px " + $(window).width()*.6 + "px");
	}
	$.ajax({
	  url: './jsonData/categoryInfo.json',
	  type: 'POST',//gateway/diagnosticResult
	  contentType: 'application/json',
	  /*data: JSON.stringify({
		   preformDiagnostic:"false",GWId:4,diagnosticToRun:"Memory.py",startTimestamp:"153984.36",finishTimestamp:"1573249.55",diagnosticResult:"success",
	  }),*/
	  dataType: 'json',
	  success: function (response) {
		   $("#meContent").html(response.me.mainContent);
		   $("#musicContent").html(response.me.mainContent2);

	  },
	  error: function (data, status, error) {
		   console.log(data, status, error);
		   var modal = document.getElementById('myModal');
		   $(".modal-content").html(data.responseJSON.message);
		   modal.style.display = "block";
	  }
	});

	$.ajax({
	  url: './jsonData/deployedContent.json',
	  type: 'POST',//gateway/diagnosticResult
	  contentType: 'application/json',
	  /*data: JSON.stringify({
		   preformDiagnostic:"false",GWId:4,diagnosticToRun:"Memory.py",startTimestamp:"153984.36",finishTimestamp:"1573249.55",diagnosticResult:"success",
	  }),*/
	  dataType: 'json',
	  success: function (response) {
		  		console.log(response);
            console.log(response.content[0].siteName);
				responseObject = response;
            //response.reverse();
				//alert(response.content[0].siteName);
            responseArray = [];
            responseArray.push("<thead><tr><th scope='col'>Site Name</th><th scope='col'>Site Description</th><th scope='col'>Site Link</th></tr></thead><tbody>");
            for (var i = 0; i < response.content.length; i++){
					alert(response.content[i].siteName);
                responseArray.push("<tr><td>"+ response.content[i].siteName +"</td><td>"+ response.content[i].siteDescription+ "</td><td>"+ response.content[i].siteLink+ "</td></tr>");
            }
            responseArray.push("</tbody> </table>");
            $("#deployedContent").html(responseArray.join(""));
        },
	  error: function (data, status, error) {
		   console.log(data, status, error);
		   var modal = document.getElementById('myModal');
		   $(".modal-content").html(data.responseJSON.message);
		   modal.style.display = "block";
	  }
	});
});
