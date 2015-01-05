define(function (require) {
    var pair = require("jquery");
    var status=function updatestatus(){
										//Show number of loaded items
										var totalItems=$('#gallery img').length;
										$('#status').text('Loaded '+totalItems+' Items');
									}

    //search on enter
	var keyPress =function searchKeyPress(e)
					$(document).keypress(function(event) {
    						var keycode = (event.keyCode ? event.keyCode : event.which);
    						if (keycode == '13') {
        					$('#submit').click();
    									}
									});
    //Clearing the gallery
    var clear = function clearList(){          
                
                $("#gallery").empty();                        
       
    }

             
    return {
        	updateStatus: status,
        	keypress:keyPress,
            Clear:clear
    };
});

