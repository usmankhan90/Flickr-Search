require(["jquery",'dom','ajax','jquery-ui'], function ($,dom,ajaxMod) {

var perpage=50;
var currentPage=1;
// modal Function
$(document).ready(function(){
  $('body').on('click', 'a.pop', function(){
   var text= $(this).find('img').attr("src");
   var res = text.replace("_q.jpg", "_z.jpg");
           $("#thedialog").attr('src', res);
        $("#somediv").dialog({
 			height: 'auto',
  			width:'auto',
  			position:  {my: "center", at: "center", of: window.top},
            modal: true,
            autoResize:true,
            close: function () {
                $("#thedialog").attr('src', "about:blank");
            }
        });
        return false;

    }); //close click
});

//onclick function for submission
$(document).ready(function() {
				  
	$("#submit").click(function (event) {
				if (term != $("#term").val())
					{
						dom.Clear();
						//$( "#dialog" ).dialog();
					}

				if($("#term").val() !="" ){
		
				/**********************/
				var term= $("#term").val()
				dom.updateStatus();
				ajaxMod.ajaxfun(currentPage);

				/**************************/	
				}else {

					alert("Please enter a keyword to search");
				}
	});
	//implementing infite scroll
	$("#gallery").scroll(function(){
						
					// check if we're at the bottom of the scrollcontainer
					 if ($(this)[0].scrollHeight - $(this).scrollTop() == $(this).outerHeight()) 

				  
					 {  
					   // If we're at the bottom, retrieve the next page
						currentPage++;
						ajaxMod.ajaxfun(currentPage);

						dom.updateStatus();

				   }

	});
	

});

});