// Project 2
// Author: Ronaldo Barnes
// Created for: MiU Online 1111


	

	
	
	//Retrieve element function
	function a(k) {
		var theElm = document.getElementById(k);
		return theElm;
	}
	
	var famButton = a("FamilyButton"),
		baButton = a("BarButton"),
		outButton = a("OutsideButton"),
		spoButton = a("SportsButton"),
		othButton = a("OtherButton"),
		wipeInfo = a("wipeInfo")
	;
	
	
	//JSON Object	
	function autoLoadData(){
	
		var json = {
			"Restaurant1" : {
				"place" : ["Location :  ", "Honolulu, HI"],
				"restaurant" : ["Name of Restaurant :  ", "Dagon's Bar & Grill" ],
				"date" : ["Date :  ", "2008-10-29" ],
				"types" : ["Type of Restaurant :  ", "Outside"],
				"food" : ["What did you have?: ", " Appetizers Other"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "9" ],
				"comments" : ["Comments :  ", "A great night out I have to go again!"]
			},
			"Restaurant2" : {
				"place" : ["Location :  ", "Dallas, TX"],
				"restaurant" : ["Name of Restaurant :  ", "Anthony's Seafood" ],
				"date" : ["Date :  ", "2009-03-04" ],
				"types" : ["Type of Restaurant :  ", "Family"],
				"food" : ["What did you have?: ", " Appetizers Seafood Dessert"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "10" ],
				"comments" : ["Comments :  ", "Best seafood in the world!"]
			},
			"Restaurant3" : {
				"place" : ["Location :  ", "Federal Way, WA"],
				"restaurant" : ["Name of Restaurant :  ", "Odin's Fire" ],
				"date" : ["Date :  ", "2010-06-07" ],
				"types" : ["Type of Restaurant :  ", "Sports"],
				"food" : ["What did you have?: ", " Meat Vegetables Grain"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "8" ],
				"comments" : ["Comments :  ", "The food was amazing!"]
			},
			"Restaurant4" : {
				"place" : ["Location :  ", "Buffalo, N.Y."],
				"restaurant" : ["Name of Restaurant :  ", "McDonalds’" ],
				"date" : ["Date :  ", "2001-11-19" ],
				"types" : ["Type of Restaurant :  ", "Outside"],
				"food" : ["What did you have?: ", " Meat Vegetables Grain Appetizers Other"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "1" ],
				"comments" : ["Comments :  ", "Will not try again"]
			},
			"Restaurant5" : {
				"place" : ["Location :  ", " Fort Myers, FL"],
				"restaurant" : ["Name of Restaurant :  ", "Chuck E Chesse" ],
				"date" : ["Date :  ", "2011-01-09" ],
				"types" : ["Type of Restaurant :  ", "Outside"],
				"food" : ["What did you have?: ", " Vegetables Grain Other"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "3" ],
				"comments" : ["Comments :  ", "Food was ok."]
			},
			"Restaurant6" : {
				"place" : ["Location :  ", "Appleton, WI"],
				"restaurant" : ["Name of Restaurant :  ", "Jack in the Box" ],
				"date" : ["Date :  ", "2006-10-15" ],
				"types" : ["Type of Restaurant :  ", "Outside"],
				"food" : ["What did you have?: ", " Meat Vegetables Other"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "5" ],
				"comments" : ["Comments :  ", "Food was good service not so much"]
			},
			"Restaurant7" : {
				"place" : ["Location :  ", "Rapid City, S.D"],
				"restaurant" : ["Name of Restaurant :  ", "Burger King" ],
				"date" : ["Date :  ", "2009-06-10" ],
				"types" : ["Type of Restaurant :  ", "Family"],
				"food" : ["What did you have?: ", " Appetizers Other"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "7" ],
				"comments" : ["Comments :  ", "We had a great time"]
			},
			"Restaurant8" : {
				"place" : ["Location :  ", "Lincoln, Neb"],
				"restaurant" : ["Name of Restaurant :  ", "Old Country Buffet" ],
				"date" : ["Date :  ", "2005-10-01" ],
				"types" : ["Type of Restaurant :  ", "Family"],
				"food" : ["What did you have?: ", " Appetizers Other"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "9" ],
				"comments" : ["Comments :  ", "Will come back next time I’m in town."]
			},
			"Restaurant9" : {
				"place" : ["Location :  ", "Green Bay, Wis"],
				"restaurant" : ["Name of Restaurant :  ", "Cheese head Bar" ],
				"date" : ["Date :  ", "2000-12-31" ],
				"types" : ["Type of Restaurant :  ", "Family"],
				"food" : ["What did you have?: ", " Appetizers Other"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "10" ],
				"comments" : ["Comments :  ", "Outstanding!!!"]
			},
			"Restaurant10" : {
				"place" : ["Location :  ", "Tupelo, Miss"],
				"restaurant" : ["Name of Restaurant :  ", "Bubas Grill" ],
				"date" : ["Date :  ", "2002-05-04" ],
				"types" : ["Type of Restaurant :  ", "Sports"],
				"food" : ["What did you have?: ", " Appetizers Other"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "8" ],
				"comments" : ["Comments :  ", "I thank my friend for recommending it!"]
			},
			"Restaurant11" : {
				"place" : ["Location :  ", "Denver, CO"],
				"restaurant" : ["Name of Restaurant :  ", "Papadaux" ],
				"date" : ["Date :  ", "2007-02-14" ],
				"types" : ["Type of Restaurant :  ", "Sports"],
				"food" : ["What did you have?: ", " Appetizers Other"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "6" ],
				"comments" : ["Comments :  ", "Food was ok. Service was good."]
			},
			"Restaurant12" : {
				"place" : ["Location :  ", "Beaverton, OR"],
				"restaurant" : ["Name of Restaurant :  ", "Old Chicago" ],
				"date" : ["Date :  ", "2006-09-19" ],
				"types" : ["Type of Restaurant :  ", "Sports"],
				"food" : ["What did you have?: ", " Appetizers Other"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "4" ],
				"comments" : ["Comments :  ", "I will not go back!"]
			},
			"Restaurant13" : {
				"place" : ["Location :  ", "Spanaway, WA"],
				"restaurant" : ["Name of Restaurant :  ", "The Rock" ],
				"date" : ["Date :  ", "2007-12-09" ],
				"types" : ["Type of Restaurant :  ", "Bar"],
				"food" : ["What did you have?: ", " Appetizers Other"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "2" ],
				"comments" : ["Comments :  ", "Never again!"]
			},
			"Restaurant14" : {
				"place" : ["Location :  ", "Lakewood, WA"],
				"restaurant" : ["Name of Restaurant :  ", "Ivars" ],
				"date" : ["Date :  ", "2011-10-15" ],
				"types" : ["Type of Restaurant :  ", "Bar"],
				"food" : ["What did you have?: ", " Appetizers Other"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "7" ],
				"comments" : ["Comments :  ", "Great food. Bad service"]
			},
			"Restaurant15" : {
				"place" : ["Location :  ", "Lakewood, CO"],
				"restaurant" : ["Name of Restaurant :  ", "PF Changs" ],
				"date" : ["Date :  ", "2011-07-05" ],
				"types" : ["Type of Restaurant :  ", "Bar"],
				"food" : ["What did you have?: ", " Appetizers Other"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "8" ],
				"comments" : ["Comments :  ", "One of my favs!"]
			},
			"Restaurant16" : {
				"place" : ["Location :  ", "Las Vegas, NV"],
				"restaurant" : ["Name of Restaurant :  ", "Pizzeria and Cucina" ],
				"date" : ["Date :  ", "2010-08-20" ],
				"types" : ["Type of Restaurant :  ", "Bar"],
				"food" : ["What did you have?: ", " Appetizers Other"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "10" ],
				"comments" : ["Comments :  ", "The best ever."]
			},
			"Restaurant17" : {
				"place" : ["Location :  ", "Reno, NV"],
				"restaurant" : ["Name of Restaurant :  ", "Lucky Food" ],
				"date" : ["Date :  ", "2011-06-12" ],
				"types" : ["Type of Restaurant :  ", "Other"],
				"food" : ["What did you have?: ", " Appetizers Other"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "6" ],
				"comments" : ["Comments :  ", "Great service bad food."]
			},
			"Restaurant18" : {
				"place" : ["Location :  ", "Kihei, HI"],
				"restaurant" : ["Name of Restaurant :  ", "Tha Beach" ],
				"date" : ["Date :  ", "2010-04-20" ],
				"types" : ["Type of Restaurant :  ", "Other"],
				"food" : ["What did you have?: ", " Appetizers Other"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "9" ],
				"comments" : ["Comments :  ", "The best view"]
			},
			"Restaurant19" : {
				"place" : ["Location :  ", "Kahakuloa, HI"],
				"restaurant" : ["Name of Restaurant :  ", "Oceanside" ],
				"date" : ["Date :  ", "2010-11-11" ],
				"types" : ["Type of Restaurant :  ", "Other"],
				"food" : ["What did you have?: ", " Appetizers Other"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "10" ],
				"comments" : ["Comments :  ", ""]
			},
			"Restaurant20" : {
				"place" : ["Location :  ", "Maunaloa, HI"],
				"restaurant" : ["Name of Restaurant :  ", "Dave’s Grill" ],
				"date" : ["Date :  ", "2011-07-11" ],
				"types" : ["Type of Restaurant :  ", "Other"],
				"food" : ["What did you have?: ", " Appetizers Other"  ],
				"numScale" : ["How good it was on a scale of 1-10 :  ", "1" ],
				"comments" : ["Comments :  ", ""]
			}
		}

		for(var n in json){	
			var num = Math.floor(Math.random()*7463778270);
			localStorage.setItem(num,  JSON.stringify(json[n]));
		}
	}
		
	//Poulate correct info when button is pressed
	function buttonPress(Button){
		if(localStorage.length === 0){
			autoLoadData();
		}
		for(d=0; d<localStorage.length; d++){
			var key = localStorage.key(d),
				val = localStorage.getItem(key),
				v = JSON.parse(val);
			if(Button === v.types[1]){
				for (z in v){
					console.log(v[z][1]);
				}
			}
		}	
	}
	
	function fButton(){
		buttonPress("Family");
	}
	
	function bButton(){
		buttonPress("Bar");
	}
	
	function oButton(){
		buttonPress("Outside");
	}
	
	function sButton(){
		buttonPress("Sports");
	}
	
	function OButton(){
		buttonPress("Other");
	}
	
	//Wipe local storage
	function emptyStorage(){
		if(localStorage.length === 0) {
			alert("Nothing to Clear!");
			window.location.reload();
		}else{
			localStorage.clear();
			alert("Tracker is empty now.");
			window.location.reload();
			return false;
		}
	}	
	
	autoLoadData();
	famButton.addEventListener("click", fButton);
	baButton.addEventListener("click", bButton);
	outButton.addEventListener("click", oButton);
	spoButton.addEventListener("click", sButton);
	othButton.addEventListener("click", OButton);
	wipeInfo.addEventListener("click", emptyStorage);
	