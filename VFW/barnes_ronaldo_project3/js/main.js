// Project 3
// Author: Ronaldo Barnes
// Created for: VFW Online 1110


// wait until DOM loads
window.addEventListener("DOMContentLoaded", function() {

	//Retrieve element function
	function a(k) {
		var theElm = document.getElementById(k);
		return theElm;
	}
	
	//Retrieve checked status
	function b(foodCheck){
		if (a(foodCheck).checked){
       		message = "Yes"
 		} else {
 			message = "No"
 		};
		msg = message;
		return msg; 
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

	//Save data to local storage
	
	function saveLocal(key){
		if(!key){
			var num = Math.floor(Math.random()*7463778270);
		}else{
			num = key;
		}
		var	v = {};
			v.place = ["Location :  ", a("place").value]; 
			v.resturant = ["Name of Restaurant :  ", a("restaurant").value];
			v.date = ["Date :  ", a("date").value];
			v.types = ["Type of Restaurant :  ", a("types").value];
			v.numScale = ["How good it was on a scale of 1-10 :  ", a("numScale").value];
			v.comments = ["Comments :  ", a("comments").value];
		localStorage.setItem(num, JSON.stringify(v));
		alert("Restaurant Tracked!!! ");
	}
	
	
	// Displays the saved data in local storage on the screen
	function viewData(){
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
			for(var z in storageVal){
				var makeSubLi = document.createElement("li"),
					y = storageVal[z][0]+" "+storageVal[z][1];
				makeSub.appendChild(makeSubLi);
				makeSubLi.innerHTML = y;
				makeSub.appendChild(linkLi);
			} 
			createItemLinks(localStorage.key(d), linkLi);
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
	
	function changeItem() {
		var value = localStorage.getItem(this.key),
			v = JSON.parse(value);
			
		controls("off");
		
		a("place").value = v.place[1]; 
		a("restaurant").value = v.resturant[1]; 
		a("date").value = v.date[1];  
		a("types").value = v.types[1];   
		a("numScale").value = v.numScale[1];  
		a("comments").value = v.comments[1]; 
		
		//remove previous event listener
		 save.removeEventListener("click", saveLocal);	
		 // change submit button name
		 a("submit").value = "Edit Restaurant";
		 var changeSubmit = a("submit");
		 changeSubmit.key = this.key;
		 changeSubmit.addEventListener("click", validate);
		 
	}
	
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
			alert("Nothing to Clear!")
		}else{
			localStorage.clear();
			alert("Tracker is empty now.");
			window.location.reload();
			return false;
		}
	}

	function vaildate(e){
		var getPlace = a("place"),
			getRestaurant = a("restaurant"),
			getDate =  a("date"),
			getType = a("types"),
			// this is going to be an array of error messages.
			invaildAry = [];

		//reset errors
		erMsg.innerHTML = "";
		getPlace.style.border = "none";
		getRestaurant.style.border = "none";
		getDate.style.border = "none";
		getType.style.border = "none"; 
				
			
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
		
		if(getType.value === "---Pick A Type of Restaurant---") {
			var typeError = "Please choose a Restaurant type."
			getType.style.border = "5px solid blue";
			invaildAry.push(typeError);
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

	//Varibles 
	
	var restTypes = [ "---Pick A Type of Restaurant---", "Family", "Sports Themed", "Bar/Club", "Outside", "Other" ],
		showInfo = a("showInfo"),
		wipeInfo = a("wipeInfo"),
		save = a("submit"),
		erMsg = a("error");
	
	
	
	
	
	
	createRestTypes();
	save.addEventListener("click", vaildate);
	showInfo.addEventListener("click", viewData);
	wipeInfo.addEventListener("click", emptyStorage);
	



});
