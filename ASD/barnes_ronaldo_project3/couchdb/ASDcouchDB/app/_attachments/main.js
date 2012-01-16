// Project 3
// Author: Ronaldo Barnes
// Created for: ASD Online 0112


    

$(document).ready(function(){    
	$.ajax({
    	url: '/asdapp/_all_docs?include_docs=true&start_key="Restaurant01"&end_key="Restaurant10"',
    	type: 'GET',
    	dataType: 'json',
    	success: function(json){
    		$.each(json.rows, function(i, obj){
   				   var	newLi = $('<li></li>'),
                		newH3 = $('<h3></h3>'),
                		newP1 = $('<p></p>'),
                		newP2 = $('<p></p>'),
                		newP3 = $('<p></p>'),
                		newP4 = $('<p></p>'),
                		newP5 = $('<p></p>'),
                		newP6 = $('<p></p>'); 
            $(newH3).html(obj.doc.restaurant);
            $(newP1).html("Location : " + obj.doc.place);
            $(newP2).html("Date : " + obj.doc.date);
            $(newP3).html("Type of Restaurant : " + obj.doc.types);
            $(newP4).html("Kind of food served : " + obj.doc.food);
            $(newP5).html("On a scale of 1-10 how good was it? : " + obj.doc.numScale);
            $(newP6).html("Comments : " + obj.doc.comments);
            $(newLi).append(newH3, newP1, newP2, newP3, newP4, newP5, newP6);
            $('#Recentpage').append(newLi); 
                
        })},
    	complete: function() {
            $('#Recentpage').listview('refresh');
        }     

	});
});