// Project 4
// Author: Ronaldo Barnes
// Created for: MiU Online 1111


	
$(document).ready(function(){	
	
	//Retrieve element function
	function a(k) {
		var theElm = document.getElementById(k);
		return theElm;
	}
	//Varibles 
	var famButton = a("FamilyButton"),
		baButton = a("BarButton"),
		outButton = a("OutsideButton"),
		spoButton = a("SportsButton"),
		othButton = a("OtherButton"),
		allButton = a("AllButton"),
		addEntry = a("addEntry"),
		wipeInfo = a("wipeInfo"),
		restForm = $("#restForm"),
		FAM = a("FAMpage"),
		BAR = a("BARpage"),
		SPO = a("SPOpage"),
		OUT = a("OUTpage"),
		OTH = a("OTHpage"),
		ALL = a("ALLpage"),
		info = new Array(),
		restInfo = ("place", "date", "types", "food", "numScale", "comments")
	;

	//Sort function	
	function i(a, b){
		var a = a.date, b = b.date
		if (a < b) {
      		return 1;
   		}
   		if (a > b) {
      		return -1;
   		}
   		if (a == b) {
     		return 0;
   		}
	}
	//JSON Object	
	function autoLoadData(){
	
		var json = {
			"Restaurant1" : {
				"place" : "Honolulu, HI",
				"restaurant" :"Dagon's Bar & Grill",
				"date" :"2008-10-29",
				"types" :"Outside",
				"food" : " Appetizers Other",
				"numScale" : "9",
				"comments" : "A great night out I have to go again!"
			},
			"Restaurant2" : {
				"place" : "Dallas, TX",
				"restaurant" : "Anthony's Seafood",
				"date" : "2009-03-04",
				"types" : "Family",
				"food" : "Appetizers Seafood Dessert",
				"numScale" : "10",
				"comments" : "Best seafood in the world!"
			},
			"Restaurant3" : {
				"place" : "Federal Way, WA",
				"restaurant" :"Odin's Fire",
				"date" : "2010-06-07",
				"types" : "Sports",
				"food" : "Meat Vegetables Grain",
				"numScale" : "8",
				"comments" : "The food was amazing!"
			},
			"Restaurant4" : {
				"place" : "Buffalo, N.Y.",
				"restaurant" : "McDonalds’",
				"date" : "2001-11-19",
				"types" : "Outside",
				"food" : "Meat Vegetables Grain Appetizers Other",
				"numScale" : "1",
				"comments" : "Will not try again"
			},
			"Restaurant5" : {
				"place" : "Fort Myers, FL",
				"restaurant" : "Chuck E Chesse",
				"date" : "2011-01-09",
				"types" :"Outside",
				"food" : "Vegetables Grain Other",
				"numScale" : "3",
				"comments" : "Food was ok."
			},
			"Restaurant6" : {
				"place" : "Appleton, WI",
				"restaurant" : "Jack in the Box",
				"date" : "2006-10-15",
				"types" : "Outside",
				"food" : " Meat Vegetables Other",
				"numScale" : "5",
				"comments" : "Food was good service not so much"
			},
			"Restaurant7" : {
				"place" : "Rapid City, S.D",
				"restaurant" : "Burger King",
				"date" : "2009-06-10",
				"types" : "Family",
				"food" : "Appetizers Other",
				"numScale" : "7",
				"comments" : "We had a great time"
			},
			"Restaurant8" : {
				"place" : "Lincoln, Neb",
				"restaurant" : "Old Country Buffet",
				"date" : "2005-10-01",
				"types" : "Family",
				"food" : "Appetizers Other",
				"numScale" : "9",
				"comments" : "Will come back next time I’m in town."
			},
			"Restaurant9" : {
				"place" : "Green Bay, Wis",
				"restaurant" : "Cheese head Bar",
				"date" : "2000-12-31",
				"types" : "Family",
				"food" : " Appetizers Other",
				"numScale" : "10",
				"comments" : "Outstanding!!!"
			},
			"Restaurant10" : {
				"place" : "Tupelo, Miss",
				"restaurant" : "Bubas Grill",
				"date" : "2002-05-04",
				"types" : "Sports",
				"food" : "Appetizers Other",
				"numScale" :"8",
				"comments" : "I thank my friend for recommending it!"
			},
			"Restaurant11" : {
				"place" : "Denver, CO",
				"restaurant" : "Papadaux",
				"date" : "2007-02-14",
				"types" : "Sports",
				"food" : "Appetizers Other",
				"numScale" : "6",
				"comments" : "Food was ok. Service was good."
			},
			"Restaurant12" : {
				"place" : "Beaverton, OR",
				"restaurant" : "Old Chicago",
				"date" : "2006-09-19",
				"types" : "Sports",
				"food" : "Appetizers Other",
				"numScale" :  "4" ,
				"comments" : "I will not go back!"
			},
			"Restaurant13" : {
				"place" : "Spanaway, WA",
				"restaurant" : "The Rock",
				"date" : "2007-12-09",
				"types" : "Bar",
				"food" :  "Appetizers Other",
				"numScale" : "2",
				"comments" : "Never again!"
			},
			"Restaurant14" : {
				"place" : "Lakewood, WA",
				"restaurant" : "Ivars",
				"date" : "2011-10-15",
				"types" : "Bar",
				"food" : "Appetizers Other",
				"numScale" : ["  ", "7" ],
				"comments" : "Great food. Bad service"
			},
			"Restaurant15" : {
				"place" : "Lakewood, CO",
				"restaurant" : "PF Changs",
				"date" : "2011-07-05",
				"types" : "Bar",
				"food" : "Appetizers Other",
				"numScale" : "8",
				"comments" : "One of my favs!"
			},
			"Restaurant16" : {
				"place" : "Las Vegas, NV",
				"restaurant" : "Pizzeria and Cucina",
				"date" : "2010-08-20",
				"types" : "Bar",
				"food" : "Appetizers Other",
				"numScale" : "10",
				"comments" : "The best ever."
			},
			"Restaurant17" : {
				"place" : "Reno, NV",
				"restaurant" :"Lucky Food",
				"date" : "2011-06-12" ,
				"types" : "Other",
				"food" : "Appetizers Other",
				"numScale" : "6",
				"comments" :"Great service bad food."
			},
			"Restaurant18" : {
				"place" : "Kihei, HI",
				"restaurant" : "Tha Beach",
				"date" : "2010-04-20",
				"types" : "Other",
				"food" : "Appetizers Other",
				"numScale" : "9",
				"comments" : "The best view"
			},
			"Restaurant19" : {
				"place" : "Kahakuloa, HI",
				"restaurant" : "Oceanside",
				"date" : "2010-11-11",
				"types" : "Other",
				"food" : "Appetizers Other",
				"numScale" : "10",
				"comments" : "The best!"
			},
			"Restaurant20" : {
				"place" : "Maunaloa, HI",
				"restaurant" : "Dave’s Grill",
				"date" : "2011-07-11",
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
			var newDiv = document.createElement("div"),
				newH3 = document.createElement("h3"),
				newP1 = document.createElement("p"),
				newP2 = document.createElement("p"),
				newP3 = document.createElement("p"),
				newP4 = document.createElement("p"),
				newP5 = document.createElement("p"),
				newP6 = document.createElement("p");	
			newDiv.appendChild(newH3);
			newH3.innerHTML = info[d].restaurant;
			newDiv.appendChild(newP1);
			newP1.innerHTML = "Date : " + info[d].date;
			newDiv.appendChild(newP2);
			newP2.innerHTML = "Location : " + info[d].place;
			newDiv.appendChild(newP3);
			newP3.innerHTML = "Type of Restaurant : " + info[d].types;
			newDiv.appendChild(newP4);
			newP4.innerHTML = "Kind of food served : " + info[d].food;
			newDiv.appendChild(newP5);
			newP5.innerHTML = "On a scale of 1-10 how good was it? : " + info[d].numScale;
			newDiv.appendChild(newP6);
			newP6.innerHTML = "Comments : " + info[d].comments;
			BUTTON.appendChild(newDiv);
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
		console.log(info);
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
		var sortArr = info.sort(i);
		viewData(info, BUTTON);
		
	}
	
	//Populates Family Group Screen
	function fButton(){
		processLocal();
		getTypes(info, "Family");
		buttonPress(info, FAM);
	}
	
	//Populates Bar Group Screen
	function bButton(){
		processLocal();
		getTypes(info, "Bar");
		buttonPress(info, BAR);
	}
	
	//Populates Outside Group Screen
	function oButton(){
		processLocal();
		getTypes(info, "Outside");
		buttonPress(info, OUT);
	}
	
	//Populates Sports Group Screen
	function sButton(){
		processLocal();
		getTypes(info, "Sports");
		buttonPress(info, SPO);
	}
	
	//Populates Other Group Screen
	function OButton(){
		processLocal();
		getTypes(info, "Other");
		buttonPress(info, OTH);
	}
	
	//Populates All Groups Screen
	function aButton(){
		processLocal();
		buttonPress(info, ALL);
	}

	function addItems(){
		a("date").value = today();
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
		for(d=0; d<info.length; d++){
			var val = info[d];
 			console.log(val.place);
		}
	}
	
	restForm.validate({
		submitHandler: function(){
			var info = restForm.serializeArray();
			parseRestForm(info);
		}
	})
	
	famButton.addEventListener("click", fButton);
	baButton.addEventListener("click", bButton);
	outButton.addEventListener("click", oButton);
	spoButton.addEventListener("click", sButton);
	othButton.addEventListener("click", OButton);
	allButton.addEventListener("click", aButton);
	addEntry.addEventListener("click", addItems);
	wipeInfo.addEventListener("click", emptyStorage);

});
	