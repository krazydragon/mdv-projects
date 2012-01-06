// Project 1
// Author: Ronaldo Barnes
// Created for: ASD Online 0112


	

$(function(){	
	
	//Varibles 
	var info = new Array(),
		restInfo = ("place", "date", "types", "food", "numScale", "comments")
	;
	
	
	//JSON Object
	function i(b, a){
		return a.numScale-b.numScale
	}
	
	function u(a, b){
		var restA = a.restaurant.toLowerCase( );
			restB = b.restaurant.toLowerCase( );
		if (restA < restB) {return -1}
		if (restA > restB) {return 1}
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
		}

		for(var n in json){	
			var num = Math.floor(Math.random()*7463778270);
			localStorage.setItem(num,  JSON.stringify(json[n]));
		}
	}
		
	// Displays the saved data in local storage on the screen
	function viewData(info, BUTTON){
		for (var d=0; d<info.length; d++){	
			var newDiv = $('<div></div>'),
				newH3 = $('<h3></h3>'),
				newP1 = $('<p></p>'),
				newP2 = $('<p></p>'),
				newP3 = $('<p></p>'),
				newP4 = $('<p></p>'),
				newP5 = $('<p></p>'),
				newP6 = $('<p></p>');
			$(newH3).html(info[d].restaurant);
			$(newP1).html("Location : " + info[d].place);
			$(newP2).html("Date : " + info[d].date);
			$(newP3).html("Type of Restaurant : " + info[d].types);
			$(newP4).html("Kind of food served : " + info[d].food);
			$(newP5).html("On a scale of 1-10 how good was it? : " + info[d].numScale);
			$(newP6).html("Comments : " + info[d].comments);
			$(newDiv).attr("data-role", "collapsible").append(newH3, newP1, newP2, newP3, newP4, newP5, newP6);
			$(BUTTON +'page').append(newDiv);
			
			
		}	

		
	}

	//Poulate correct info when button is pressed
	function processLocal(Button){
		if(localStorage.length === 0){
			autoLoadData();
		}
		var restArr= new Array();
		for(d=0; d<localStorage.length; d++){;
			var key = localStorage.key(d),
				val = localStorage.getItem(key),
				v = JSON.parse(val);
			restArr.push(v);						
		}
		return info = restArr;	
	}
	
	//Picks proper groups
	function getTypes(v, b){
		var restArr= new Array()
		for(d=0; d<info.length; d++){
			if(b === v[d].types){
				restArr.push(v[d]);
			}
		}
		return info = restArr;
	}
	
	//Sorts info
	function buttonPress(info, BUTTON){
		var sortArr = info.sort(u);
		viewData(info, BUTTON);
		
	}
	
	function today(){
		var now = new Date(),
   			year =now.getFullYear(),
   			month = now.getMonth() + 1, 
   			day = now.getDate();
   		if(day < 10){
   			day = "0" + day
   		}
		var rv = year + "-" + month + "-" + day
		return rv;
	}
	
	//Populates Family Group Screen
	function fButton(){
		processLocal();
		getTypes(info, "Family");
		buttonPress(info, '#FAM');
	}
	
	//Populates Bar Group Screen
	function bButton(){
		processLocal();
		getTypes(info, "Bar");
		buttonPress(info, ('#BAR'));
	}
	
	//Populates Outside Group Screen
	function oButton(){
		processLocal();
		getTypes(info, "Outside");
		buttonPress(info, '#OUT');
	}
	
	//Populates Sports Group Screen
	function sButton(){
		processLocal();
		getTypes(info, "Sports");
		buttonPress(info, '#SPO');
	}
	
	//Populates Other Group Screen
	function OButton(){
		processLocal();
		getTypes(info, "Other");
		buttonPress(info, '#OTH');
	}
	
	//Populates All Groups Screen
	function aButton(){
		processLocal();
		buttonPress(info, '#ALL');
	}
	
	
	function addItems(){
		$('#date').val() = today();
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
	
	function parseRestForm(info){
		alert("Restaurant Tracked!");
		$("#mainLink").click();
		}
	
	
	$("#restForm").validate({
		submitHandler: function(){
			var info = $("#restForm").serializeArray();
			parseRestForm(info);
		}
	})
	
	$("#FamilyButton").bind('click', fButton);
	$("#BarButton").bind('click', bButton);
	$("#OutsideButton").bind('click', oButton);
	$("#SportsButton").bind('click', sButton);
	$("#OtherButton").bind('click', OButton);
	$("#AllButton").bind('click', aButton);
	$("#addEntry").bind('click', addItems);
	$("#wipeInfo").bind('click', emptyStorage);

});
	