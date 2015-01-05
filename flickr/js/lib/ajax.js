define(function (require) {

var query = require("jquery");

// the ajax process function
var aja=function ajaxProcess(page) {

var searchTerm = $("#term").val(); // get the user-entered search term
var URL2='https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d43b30e915b3163f308b558c501dffa0&'; 
var tags="&tags="+ searchTerm;
var tagmode="&tagmode=any";
var jsonFormat = "&format=json";
var currentPage=page;					
var ajaxURL= URL2+"per_page="+50+"&page="+currentPage+tags+tagmode+jsonFormat; //formiing the url

				
					
				 $.ajax({
				  url:ajaxURL,
				  dataType:"jsonp",
				  jsonp:"jsoncallback",
				  success: function(data) {
					  
						if(data.stat!="fail") {
							 console.log(data);	
							 //populating img gallery
							$.each(data.photos.photo, function(i,photo) {
							  var largePhoto="http://farm"+photo.farm+".static.flickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_b.jpg'";
							  var photoHTML="";
							  photoHTML+= "<div class='col-lg-3 col-sm-4 col-xs-6 col-md-offset-0'><a href='' class='pop'> <img class='img-circle' src='";
							  photoHTML+="http://farm"+photo.farm+".static.flickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_q.jpg'"; 
							  photoHTML+="  title='"+photo.title+"'" ;
							  photoHTML+="></a></div>";

							  $("#gallery").append(photoHTML).fadeIn(200);
							  
							  
							});
							
						}else {
							 $("#gallery").empty();
							 console.log("Error code "+data.stat);
							 photoHTML="Error !! Error !! "+data.stat;
							 $("#gallery").append(photoHTML).fadeIn(200);
							 	
						}
						
					}
	
			     });
	}
	return {
				ajaxfun:aja
			}

});