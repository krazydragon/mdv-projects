// Project 1
// Author: Ronaldo Barnes
// Created for: AVF Online 0205


    

$(document).ready(function(){    
    
    
    
   
    //Varibles 
    var info = new Array(),
        ID = new Array();        
        
    $.ajax({
    	url: 'xhr/dummy.json',
    	type: 'GET',
    	dataType: 'json',
    	success: function(json){
    		$.each(json.Restaurants, function(i, obj){    
            	localStorage.setItem(i,  JSON.stringify(obj))
        	})
        }
        })     
          
    
          
    //JSON Object
    function i(b, a){
        return a.numScale-b.numScale;
    }
    
    function u(a, b){
        var restA = a.restaurant.toLowerCase( ),
            restB = b.restaurant.toLowerCase( );
        if (restA < restB){ 
            return -1;
        }
        if (restA > restB){
            return 1;
        }
        return 0;
    }
    
    function autoLoadData(){
    	
     
    }
        
    
    
   // Displays the saved data in local storage on the screen
    function viewData(info, ID, BUTTON){
        $(BUTTON +'page').empty();
        for (var d=0; d<info.length; d++){    
            var id = info[d].id,
            	newDiv = $('<div></div>').attr("data-role", "collapsible"),
                newH3 = $('<h3></h3>'),
                newP1 = $('<p></p>'),
                newP2 = $('<p></p>'),
                newP3 = $('<p></p>'),
                newP4 = $('<p></p>'),
                newP5 = $('<p></p>'),
                newP6 = $('<p></p>'),
                newA1 = $('<a href="#addRest" data-role="button"  id="' + id + '" group="' + BUTTON + '" data-icon="back">Edit</a>'),
                newA2 = $('<a href="#main" data-role="button"  id="' + id + '" group="' + BUTTON + '" data-icon="delete">Delete</a>');   
            $(newH3).html(info[d].restaurant);
            $(newP1).html("Location : " + info[d].place);
            $(newP2).html("Date : " + info[d].date);
            $(newP3).html("Type of Restaurant : " + info[d].types);
            $(newP4).html("Kind of food served : " + info[d].food);
            $(newP5).html("On a scale of 1-10 how good was it? : " + info[d].numScale);
            $(newP6).html("Comments : " + info[d].comments);
            $(newA1).bind('click', editEntry);
            $(newA2).bind('click', deleteEntry);
            $(newDiv).append(newH3, newP1, newP2, newP3, newP4, newP5, newP6, newA1, newA2);
            $(BUTTON +'page').append(newDiv);          
        }    
        $(BUTTON +'page').listview('refresh');
        
    }
    
    function editEntry(){
    	
       var key = $(this).attr('id'),
       	   temp = localStorage.getItem(key),
       	   obj = JSON.parse(temp),
       	   foodAry = obj.food.split(" ");
		foodAry.reverse();
		foodAry.pop();
        $('#fav').val(obj.fav);
        $('#restaurant').val(obj.restaurant);
		$('#place').val(obj.place);
		$('#date').val(obj.date);
		$('#types').val(obj.types);
		$('#food').val(obj.food);
		$('#numScale').val(obj.numScale);
		$('#comments').val(obj.comments);
		for(var d=0; d<foodAry.length; d++){
			var f = foodAry[d];
		$('#food').setAttribute(f, "checked");
		}
    }
    
    function deleteEntry(){
    	var key = $(this).attr('id'),
    		group = $(this).attr('id');
    	
    	localStorage.removeItem(key);
    	$('main').listview('refresh');
    }
    
    //Poulate correct info when button is pressed
    function processLocal(Button){
        if(localStorage.length === 0){
            autoLoadData();
        }
        var restArr= new Array();
		for(var d=0; d<localStorage.length; d++){;
			var key = localStorage.key(d),
				val = localStorage.getItem(key),
				v = JSON.parse(val);
			v.id = ""+ key +"";
			restArr.push(v);
									
		}
		info = restArr;
		return [info, ID];	    
    }
    
    //Picks proper groups
    function getTypes(v, ID, b){
        var restArr= new Array(),
        	id = new Array();
		for(var d=0; d<info.length; d++){
			if(b === v[d].types){
				restArr.push(v[d]);
				id.push(ID[d]);
			}
		}
		info = restArr;
		ID = id;
		return [info, ID];
    }
    
    //Sorts info
    function buttonPress(info, ID, BUTTON){
    	console.log(info);
        info.sort(u);
        viewData(info, ID, BUTTON);
        
    }
    
    //Populates Family Group Screen
    function fButton(){
        processLocal();
        getTypes(info, ID, "Family");
        buttonPress(info, ID, '#FAM');
    }
    
    //Populates Bar Group Screen
    function bButton(){
        processLocal();
        getTypes(info, "Bar");
        buttonPress(info, ID, '#BAR');
    }
    
    //Populates Outside Group Screen
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
    }
    
    

    //Wipe local storage
    function emptyStorage(){
        if(localStorage.length === 0) {
            window.location.reload();
        }else{
            localStorage.clear();
            window.location.reload();
        }
    }    
    
    
    $("#restForm").validate({
        submitHandler: function(){
            var Restaurant = {
                "place" : $('#place').val(),
                "restaurant" :$('#restaurant').val(),
                "date" :$('#date').val(),
                "types" :$('#types').val(),
                "food" : $('#food').val(),
                "numScale" : $('#numScale').val(),
                "comments" : $('#comments').val()
            };
            var num = Math.floor(Math.random()*1000000);
            localStorage.setItem(num,  JSON.stringify(Restaurant));
            alert("Restaurant Tracked!");
            $('#mainLink').click();
        }
    });
    
    $("#FamilyButton").bind('click', fButton);
    $("#BarButton").bind('click', bButton);
    $("#OutsideButton").bind('click', oButton);
    $("#SportsButton").bind('click', sButton);
    $("#OtherButton").bind('click', OButton);
    $("#AllButton").bind('click', aButton);
    $("#wipeInfo").bind('click', emptyStorage);
    

});

