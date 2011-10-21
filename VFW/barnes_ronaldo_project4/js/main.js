// Project 4
// Author: Ronaldo Barnes
// Created for: VFW Online 1110


// wait until DOM loads
window.addEventListener("DOMContentLoaded", function() {

	//Varibles 
	
	var restTypes = [ "---Pick A Type of Restaurant---", "Family", "Sports", "Bar", "Outside", "Other" ],
		showInfo = a("showInfo"),
		wipeInfo = a("wipeInfo"),
		save = a("submit"),
		erMsg = a("error"),
		foodTag = document.getElementsByName("food"),
		msg = ""
	;

	//Retrieve element function
	function a(k) {
		var theElm = document.getElementById(k);
		return theElm;
	}
	
	//Retrieve checked status
	function b(){
		var message = [];
		for(var d = 0; d < foodTag.length; d++){
			if(foodTag[d].checked) {
				message += " " + foodTag[d].value; 
			}
		}
		return msg = message;
	}	
	//Toggle controls
	function controls(k){
		switch (k){
			case "on":
				a("tracker").style.display = "none";
				a("wipeInfo").style.display = "inline";
				a("showInfo").style.display = "none";
				a("new").style.display = "inline";
				break;
			case "off":
				a("tracker").style.display = "block";
				a("wipeInfo").style.display = "inline";
				a("showInfo").style.display = "inline";
				a("new").style.display = "none";
				a("info").style.display = "none";			
				break;
			default:
				return false;
		}
	}
	
	
	//Restaurant Populater function
	function createRestTypes() {
		var formTag = document.getElementsByTagName("form"),
			pickLi = a("pick"),
			createType = document.createElement("select");
		createType.setAttribute("id","types");
		for (var d=0, c=restTypes.length; d<c; d++){
			var createOption = document.createElement("option");
			var optText = restTypes[d];
			createOption.setAttribute("value", optText);
			createOption.innerHTML = optText;
			createType.appendChild(createOption);
			}
			pickLi.appendChild(createType);
		}

	
	// Function to make sure for is filled out
	function vaildate(e){
		var getPlace = a("place"),
			getRestaurant = a("restaurant"),
			getDate =  a("date"),
			getType = a("types"),
			getFood = a("FOOD")
			// this is going to be an array of error messages.
			invaildAry = [];
		b();

		//reset errors
		erMsg.innerHTML = "";
		getPlace.style.border = "none";
		getRestaurant.style.border = "none";
		getDate.style.border = "none";
		getType.style.border = "none"; 
		getFood.style.border = "none";
				
			
		if(getPlace.value === "") {
			var placeError = "Please enter the city and state."
			getPlace.style.border = "5px solid blue";
			invaildAry.push(placeError);
		}	
		
		if(getRestaurant.value === "") {
			var restaurantError = "Please enter the Restaurant Name."
			getRestaurant.style.border = "5px solid blue";
			invaildAry.push(restaurantError);
		}	
		
		if(getDate.value === "") {
			var dateError = "Please enter the date."
			getDate.style.border = "5px solid blue";
			invaildAry.push(dateError);
		}	
		
		var dRE = /^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/;
  		if(!(dRE.exec(getDate.value))){
			var dateError = "Please enter the date in this format 'YYYY-MM-DD'."
			getDate.style.border = "5px solid blue";
			invaildAry.push(dateError);
 		}
		
		if(getType.value === "---Pick A Type of Restaurant---") {
			var typeError = "Please choose a Restaurant type."
			getType.style.border = "solid blue";
			invaildAry.push(typeError);
		}	
		
		if(msg.length === 0 ) {
			var foodError = "Please select a type of food."
			getFood.style.border = "5px solid blue";
			invaildAry.push(foodError);
		} 

		
		if(invaildAry.length >= 1){
			for(var d=0, h=invaildAry.length; d < h; d++){
				var text = document.createElement("li");
				text.innerHTML = invaildAry[d];
				erMsg.appendChild(text);
			}
			e.preventDefault();
			return false;
		}else{
		saveLocal(this.key);
		}
	}

	//Save data to local storage
	
	function saveLocal(key){
		if(!key){
			var num = Math.floor(Math.random()*7463778270);
		}else{
			num = key;
		}
		b();
		var	v = {};
		v.place = ["Location :  ", a("place").value]; 
		v.restaurant = ["Name of Restaurant :  ", a("restaurant").value];
		v.date = ["Date :  ", a("date").value];
		v.types = ["Type of Restaurant :  ", a("types").value];
		v.food = ["What did you have?", msg];
		v.numScale = ["How good it was on a scale of 1-10 :  ", a("numScale").value];
		v.comments = ["Comments :  ", a("comments").value];
		localStorage.setItem(num, JSON.stringify(v));
		alert("Restaurant Tracked!!! ");
	}
	
	
	// Displays the saved data in local storage on the screen
	function viewData(){
		if(localStorage.length === 0){
			autoLoadData();
			alert("There was no restaurant information saved. Default information will be loaded.")
		}
		controls("on");
		var newDiv = document.createElement("div"),
			newList = document.createElement("ul");
		newDiv.setAttribute("id", "info");
		newDiv.appendChild(newList);
		document.body.appendChild(newDiv);
		a("info").style.display = "block";		
		for(var d=0, l=localStorage.length; d<l; d++){
			var makeLi = document.createElement("li"),
				linkLi = document.createElement("li"),
				key = localStorage.key(d),
				v = localStorage.getItem(key),
				storageVal = JSON.parse(v),
				makeSub = document.createElement("ul");
			newList.appendChild(makeLi);
			makeLi.appendChild(makeSub);
			getImage(storageVal.types[1], makeSub);
			for(var z in storageVal){
				var makeSubLi = document.createElement("li"),
					y = storageVal[z][0]+" "+storageVal[z][1];
				makeSub.appendChild(makeSubLi);
				makeSubLi.innerHTML = y;
				makeSub.appendChild(linkLi);
			} 
			createItemLinks(localStorage.key(d), linkLi);
		var borderLine = document.createElement("h3");
		linkLi.appendChild(borderLine);		
		}
	}
	
	function getImage(types, makeSub){
		var pngLi = document.createElement("li");
		makeSub.appendChild(pngLi);
		var newImage = document.createElement("img"),
			setId = newImage.setAttribute("id", types + "png");
		
		pngLi.appendChild(newImage);
		
		
	}
	
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
			}
		}
		for(var n in json){	
			var num = Math.floor(Math.random()*7463778270);
			localStorage.setItem(num,  JSON.stringify(json[n]));
		}
	}
	
	// makes links to edit and delete saved data
	function createItemLinks(key, linkLi){
		var changeLink = document.createElement("a"),
			changeInfo = "Change Information";
		changeLink.href = "#";
		changeLink.key = key;
		changeLink.addEventListener("click",changeItem);
		changeLink.innerHTML = changeInfo;
		linkLi.appendChild(changeLink);
		
		var lineBreak = document.createElement("br");
		linkLi.appendChild(lineBreak);
		
		var delLink = document.createElement("a"),
			delInfo = "Delete Information";
		delLink.href = "#";
		delLink.key = key;
		delLink.addEventListener("click",delItem);
		delLink.innerHTML = delInfo;
		linkLi.appendChild(delLink);	
		
	
	}
	
	//Edit saved items
	function changeItem() {
		var value = localStorage.getItem(this.key),
			v = JSON.parse(value),
			foodAry = v.food[1].split(" ");
			foodAry.reverse();
			foodAry.pop();	
			
		controls("off");

		a("place").value = v.place[1]; 
		a("restaurant").value = v.restaurant[1]; 
		a("date").value = v.date[1];  
		a("types").value = v.types[1];   
		a("numScale").value = v.numScale[1];  
		a("comments").value = v.comments[1]; 
		
		for(var d=0; d<foodAry.length; d++){
			var f = foodAry[d];
		a(f).setAttribute("checked", "checked");
		}	
		

		
		//remove previous event listener
		 save.removeEventListener("click", saveLocal);	
		 // change submit button name
		 a("submit").value = "Edit Restaurant";
		 var changeSubmit = a("submit");
		 changeSubmit.key = this.key;
		 changeSubmit.addEventListener("click", vaildate);
		 
	}
	
	//Delete saved item
	function delItem(){
		var check = confirm("Are you sure you want to delete the information?")
		if(check){
			localStorage.removeItem(this.key);
			alert("Information was deleted!");
			window.location.reload();
		}else{
			alert("Information was not deleted.")
		}
	}
	//Wipe Storage
	
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


	
	
	
	
	
	createRestTypes();
	save.addEventListener("click", vaildate);
	showInfo.addEventListener("click", viewData);
	wipeInfo.addEventListener("click", emptyStorage);
	



});
