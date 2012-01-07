// Project 1
// Author: Ronaldo Barnes
// Created for: ASD Online 0112


    

$(document).ready(function(){    
    
    //Varibles 
    var info = new Array(),
        ID = new Array();
    
    
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
    
        var json = {
            "Restaurant1" : {
                "place" : "Honolulu, HI",
                "restaurant" :"Dagon's Bar & Grill",
                "date" :"10-29-2008",
                "types" :"Outside",
                "food" : " Appetizers Other",
                "numScale" : "9",
                "comments" : "A great night out I have to go again!"
            },
            "Restaurant2" : {
                "place" : "Dallas, TX",
                "restaurant" : "Anthony's Seafood",
                "date" : "03-04-2009",
                "types" : "Family",
                "food" : "Appetizers Seafood Dessert",
                "numScale" : "10",
                "comments" : "Best seafood in the world!"
            },
            "Restaurant3" : {
                "place" : "Federal Way, WA",
                "restaurant" :"Odin's Fire",
                "date" : "06-07-2010",
                "types" : "Sports",
                "food" : "Meat Vegetables Grain",
                "numScale" : "8",
                "comments" : "The food was amazing!"
            },
            "Restaurant4" : {
                "place" : "Buffalo, N.Y.",
                "restaurant" : "McDonalds’",
                "date" : "11-19-2001",
                "types" : "Outside",
                "food" : "Meat Vegetables Grain Appetizers Other",
                "numScale" : "1",
                "comments" : "Will not try again"
            },
            "Restaurant5" : {
                "place" : "Fort Myers, FL",
                "restaurant" : "Chuck E Chesse",
                "date" : "01-09-2011",
                "types" :"Outside",
                "food" : "Vegetables Grain Other",
                "numScale" : "3",
                "comments" : "Food was ok."
            },
            "Restaurant6" : {
                "place" : "Appleton, WI",
                "restaurant" : "Jack in the Box",
                "date" : "10-15-2006",
                "types" : "Outside",
                "food" : " Meat Vegetables Other",
                "numScale" : "5",
                "comments" : "Food was good service not so much"
            },
            "Restaurant7" : {
                "place" : "Rapid City, S.D",
                "restaurant" : "Burger King",
                "date" : "06-10-2009",
                "types" : "Family",
                "food" : "Appetizers Other",
                "numScale" : "7",
                "comments" : "We had a great time"
            },
            "Restaurant8" : {
                "place" : "Lincoln, Neb",
                "restaurant" : "Old Country Buffet",
                "date" : "10-01-2005",
                "types" : "Family",
                "food" : "Appetizers Other",
                "numScale" : "9",
                "comments" : "Will come back next time I’m in town."
            },
            "Restaurant9" : {
                "place" : "Green Bay, Wis",
                "restaurant" : "Cheese head Bar",
                "date" : "12-31-2000",
                "types" : "Family",
                "food" : " Appetizers Other",
                "numScale" : "10",
                "comments" : "Outstanding!!!"
            },
            "Restaurant10" : {
                "place" : "Tupelo, Miss",
                "restaurant" : "Bubas Grill",
                "date" : "05-04-2002",
                "types" : "Sports",
                "food" : "Appetizers Other",
                "numScale" :"8",
                "comments" : "I thank my friend for recommending it!"
            },
            "Restaurant11" : {
                "place" : "Denver, CO",
                "restaurant" : "Papadaux",
                "date" : "02-14-2007",
                "types" : "Sports",
                "food" : "Appetizers Other",
                "numScale" : "6",
                "comments" : "Food was ok. Service was good."
            },
            "Restaurant12" : {
                "place" : "Beaverton, OR",
                "restaurant" : "Old Chicago",
                "date" : "09-19-2006",
                "types" : "Sports",
                "food" : "Appetizers Other",
                "numScale" :  "4" ,
                "comments" : "I will not go back!"
            },
            "Restaurant13" : {
                "place" : "Spanaway, WA",
                "restaurant" : "The Rock",
                "date" : "12-09-2007",
                "types" : "Bar",
                "food" :  "Appetizers Other",
                "numScale" : "2",
                "comments" : "Never again!"
            },
            "Restaurant14" : {
                "place" : "Lakewood, WA",
                "restaurant" : "Ivars",
                "date" : "10-15-2011",
                "types" : "Bar",
                "food" : "Appetizers Other",
                "numScale" : ["  ", "7" ],
                "comments" : "Great food. Bad service"
            },
            "Restaurant15" : {
                "place" : "Lakewood, CO",
                "restaurant" : "PF Changs",
                "date" : "07-05-2011",
                "types" : "Bar",
                "food" : "Appetizers Other",
                "numScale" : "8",
                "comments" : "One of my favs!"
            },
            "Restaurant16" : {
                "place" : "Las Vegas, NV",
                "restaurant" : "Pizzeria and Cucina",
                "date" : "08-20-2010",
                "types" : "Bar",
                "food" : "Appetizers Other",
                "numScale" : "10",
                "comments" : "The best ever."
            },
            "Restaurant17" : {
                "place" : "Reno, NV",
                "restaurant" :"Lucky Food",
                "date" : "06-12-2011" ,
                "types" : "Other",
                "food" : "Appetizers Other",
                "numScale" : "6",
                "comments" :"Great service bad food."
            },
            "Restaurant18" : {
                "place" : "Kihei, HI",
                "restaurant" : "Tha Beach",
                "date" : "04-20-2010",
                "types" : "Other",
                "food" : "Appetizers Other",
                "numScale" : "9",
                "comments" : "The best view"
            },
            "Restaurant19" : {
                "place" : "Kahakuloa, HI",
                "restaurant" : "Oceanside",
                "date" : "11-11-2010",
                "types" : "Other",
                "food" : "Appetizers Other",
                "numScale" : "10",
                "comments" : "The best!"
            },
            "Restaurant20" : {
                "place" : "Maunaloa, HI",
                "restaurant" : "Dave’s Grill",
                "date" : "07-11-2011",
                "types" : "Other",
                "food" : "Appetizers Other",
                "numScale" : "1",
                "comments" : "Never again!"
            }
        };

        for(var n in json){    
            var num = Math.floor(Math.random()*100000);
            localStorage.setItem(num,  JSON.stringify(json[n]));
        }
    }
        
    
    
   // Displays the saved data in local storage on the screen
    function viewData(info, ID, BUTTON){
        $(BUTTON +'page').empty();
        for (var d=0; d<info.length; d++){    
            var id = ID[d],
            	newDiv = $('<div></div>').attr("data-role", "collapsible"),
                newH3 = $('<h3></h3>'),
                newP1 = $('<p></p>'),
                newP2 = $('<p></p>'),
                newP3 = $('<p></p>'),
                newP4 = $('<p></p>'),
                newP5 = $('<p></p>'),
                newP6 = $('<p></p>'),
                newA1 = $('<a href="#" id="editButton" data-role="button" data-icon="back">Edit</a>')//.bind('click', editEntry(id)),
                newA2 = $('<a href="#" id="deleteButton" data-role="button" data-icon="delete">Delete</a>')//.bind('click', deleteEntry(id));
            $(newH3).html(info[d].restaurant);
            $(newP1).html("Location : " + info[d].place);
            $(newP2).html("Date : " + info[d].date);
            $(newP3).html("Type of Restaurant : " + info[d].types);
            $(newP4).html("Kind of food served : " + info[d].food);
            $(newP5).html("On a scale of 1-10 how good was it? : " + info[d].numScale);
            $(newP6).html("Comments : " + info[d].comments);
            $(newDiv).append(newH3, newP1, newP2, newP3, newP4, newP5, newP6, newA1, newA2);
            $(BUTTON +'page').append(newDiv);
        }    
        
        
    }
    
    function editEntry(id){
       console.log(id);
    }
    
    function deleteEntry(){
    
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
			restArr.push(v);
			ID.push(localStorage.key(d));						
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
        var sortArr = info.sort(u);
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
            return false;
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