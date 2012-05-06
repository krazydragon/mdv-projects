// Project 4
// Author: Ronaldo Barnes
// Created for: ASD Online 0112


 var $db = $.couch.db("asdw4");


function editEntry(){
	var key = $(this).attr('restid');
	$db.openDoc(key, {success: function(obj) {
        $('#fav').val() = obj.fav;
        $('#restaurant').val() = obj.restaurant;
		$('#place').val() = obj.place;
		$('#date').val() = obj.date;
		$('#types').val() = obj.types;
		$('#food').val() = obj.food;
		$('#numScale').val() = obj.numScale;
		$('#comments').val() = obj.comments;
}    		
});
    }
    
    
function deleteEntry(){
	var key = $(this).attr('restid');
	console.log(key);
	$db.openDoc(key, { success: function(doc) {  
       $db.removeDoc(doc, { success: function() {     
       }})  
      }});
    }


         


$('#main').live("pageshow", function(){   
	
	var obj = {
				"Family" : "Family oriented restaurants.", 
				"Outside": "Places to eat outside",
				"Bar": "No kids allowed",
				"Sports" : "Places to watch the game.", 
				"Other" : "Unique Restaurants."
				};
 	$.each(obj, function(cat, txt){
 		var	newLi = $('<li></li>'),
            newA = $('<a></a>', {
            	href: "restaurants.html?" + cat,
               	category : cat
            }),
            newI = $('<img src= "images/' + cat + '.png"/>')
            newH3 = $('<h3></h3>'),
            newP = $('<p></p>'); 
         $(newH3).html(cat);
         $(newP).html(txt);
         $(newA).append(newI, newH3, newP);
         $(newLi).append(newA);
         $('#mainLinks').append(newLi);
 	});
 	$('#mainLinks').listview('refresh');
 	$("#restForm").validate({
 	    submitHandler: function(){
 	    
 	        var Restaurant = {
 	            "place" : $('#place').val(),
 	            "restaurant" :$('#restaurant').val(),
 	            "date" :$('#date').val(),
 	            "types" :$('#types').val(),
 	            "food" : $('#food').val(),
 	            "numScale" : $('#numScale').val(),
 	            "comments" : $('#comments').val(),
 	            "fav" : $('#fav').val(),
 	            "creation_time" : ( new Date() ).getTime()
 	        };
 	        $db.saveDoc( Restaurant, {
 	            success: function() {
 	                
 	            },
 	            error: function() {
 	                alert( "Cannot save new document." );
 	             }
 	    });
 	    }
 	});        	
	
   });


   
  $('#Categories').live("pageshow", function(){
    var catData = $(this).data("url"),
    	cat = catData.split('?');
	$("#Category").empty();
  	$db.view("tracker/" + cat[1] ,{
  		success: function(data){
 			$.each(data.rows, function(i, obj){
				var	newLi = $('<li></li>'),
             		newA = $('<a></a>', {
                            href: "#entryPage?" + obj.id,
                            restId : obj.id
                            }),
             		newH3 = $('<h3></h3>'),
             		newP = $('<p></p>'); 
         		$(newH3).html(obj.value.restaurant);
         		$(newP).html(obj.value.place);
         		$(newA).append(newH3, newP);
         		$(newLi).append(newA);
         		$('#Category').append(newLi);
            });
            $('#Category').listview('refresh');
         },
 	});	
  });
  
  $('#entryPage').live("pageshow", function(){ 
  		$('#Entry').children().remove();  
		var keyData = $(this).data("url"),
			key = keyData.split('?');
	    $db.openDoc( key[1], { 
	    	success: function(obj) {
	    		var	newLi = $('<li></li>'),
                		newH2 = $('<h2></h2>'),
                		newP1 = $('<p></p>'),
                		newP2 = $('<p></p>'),
                		newP3 = $('<p></p>'),
                		newP4 = $('<p></p>'),
                		newP5 = $('<p></p>'),
                		newP6 = $('<p></p>');
                		newA1 = $('<a href="#addRest" data-role="button"  id="' + key + '"data-icon="back">Edit</a>'),
                		newA2 = $('<a href="#main" data-role="button"  id="' + key + '"data-icon="delete">Delete</a>')
	       	 $(newH2).html(obj.restaurant);
             $(newP1).html("Location : " + obj.place);
             $(newP2).html("Date : " + obj.date);
             $(newP3).html("Type of Restaurant : " + obj.types);
             $(newP4).html("Kind of food served : " + obj.food);
             $(newP5).html("On a scale of 1-10 how good was it? : " + obj.numScale);
             $(newP6).html("Comments : " + obj.comments);
             $(newA1).bind('click', editEntry);
             $(newA2).bind('click', deleteEntry);
             $(newLi).append(newH2, newP1, newP2, newP3, newP4, newP5, newP6, newA1, newA2);
            $('#Entry').append(newLi)
    		$('#Entry').listview('refresh');
    		}    		
	       });
	       
	     });	
  
