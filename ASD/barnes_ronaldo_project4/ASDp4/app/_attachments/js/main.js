// Project 4
// Author: Ronaldo Barnes
// Created for: ASD Online 0112


 var $db = $.couch.db("asdw4");
 $("#FamilyButton").live('click', fButton);
 function fButton(){
 	refreshRestaurants("Family");
 };
        
         
 function refreshRestaurants(cat){
  	$("#Category").empty();
  	$db.view("tracker/" + cat ,{
  		success: function(data){
 			$.each(data.rows, function(i, obj){
					var	newLi = $('<li></li>'),
             		newA = $('<a></a>', {
                            href: "#Restaurant",
                            restId : "'"+data.rows[i].value._id+"'",
                           	category : cat
                            }),
             		newH3 = $('<h3></h3>'),
             		newP = $('<p></p>'); 
         		$(newH3).html(obj.value.restaurant);
         		$(newP).html(obj.value.place);
         		$(newLi).append(newA, newH3, newP);
         		$('#Category').append(newLi);
            });
            $('#Category').listview('refresh');
         },
 	});
	};        

$('#main').live("pageshow", function(){   


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
                    $.mobile.changePage( "#main", "slidedown", true, true );
                },
                error: function() {
                    alert( "Cannot save new document." );
                 }
        });
        }
    });
   });

$('#Restaurants').live("pageshow", function(){
	
	
});


 //Populates Family Group Screen
    
    
    //Populates Bar Group Screen
    
    
    /*//Populates Outside Group Screen
    function oButton(){
        processLocal();
        getTypes(info, ID, "Outside");
        buttonPress(info, ID, '#OUT');
    }
    
    //Populates Sports Group Screen
    function sButton(){
        processLocal();
        getTypes(info, ID, "Sports");
        buttonPress(info, ID, '#SPO');
    }
    
    //Populates Other Group Screen
    function OButton(){
        processLocal();
        getTypes(info, ID, "Other");
        buttonPress(info, ID, '#OTH');
    }
    
    //Populates All Groups Screen
    function aButton(){
        processLocal();
        buttonPress(info, ID, '#ALL');
    }*/

    
    
    /*$("#BarButton").bind('click', bButton);
    $("#OutsideButton").bind('click', oButton);
    $("#SportsButton").bind('click', sButton);
    $("#OtherButton").bind('click', OButton);
    $("#AllButton").bind('click', aButton);*/
    
