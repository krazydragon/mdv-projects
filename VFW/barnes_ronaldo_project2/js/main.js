// Project 2
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
		return msg   
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
	
	function saveLocal(){
		var num = Math.floor(Math.random()*20023002341),
			val = {};
			val.place = ["Location", a("place").value]; 
			val.resturant = ["Name of Restaurant", a("restaurant").value];
			val.date = ["Date", a("date").value];
			val.types = ["Type of Restaurant", a("types").value];
			val.what = ["The following is what you ate…"];
			b(appetizer);
			val.appetizer = ["Appetizer", msg];
			b(meat);
			val.meat = ["Meat", msg ];
			b(seafood);
			val.seafood = ["Seafood", msg];
			b(vegeables);
			val.vegetables = ["Vegetables", msg];
			b(grain);
			val.grain = ["Grain", msg];
			b(dessert);
			val.dessert = ["Dessert", msg];
			b(other);
			val.other = ["Other", msg];
			val.numScale = ["How good it was on a scale of 1-10", a("numScale").value];
			val.comments = ["Comments", a("comments")];
		localStorage.setItem(num, JSON.stringify(val));
		alert("Restaurant Tracked!!! ");
	}

	function viewData(){
		var newDiv = document.createElement("div"),
			newList = document.createElement("ul");
		newDiv.setAttribute("id", "items");
		newDiv.appendChild(newList);
		for(var d=0, l=localStorage.length; d<l; d++){
			var makeLi = document.createElement("li"),
				k = localStorage.key(d),
				v = localStorage.getItem(k),
				storageVal = JSON.parse(v),
				makeSub = document.createElement("ul");
			newList.appendChild(makeLi);
			makeLi.appendChild(makeSub);
			for(var z in storageVal){
				var makeSubLi = document.createElement("li"),
					y = storageVal[z][0]+" "+storageVal[z][1];
				makeSub.appendChild(makeSubLi);
				makeSubLi.innerHTML = y;
				
			} 
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


	//Varibles 
	
	var restTypes = [ "---Pick A Type of Restaurant---", "Sports Themed", "Bar/Club", "Outside", "Other" ],
		showInfo = a("showInfo"),
		wipeInfo = a("wipeInfo"),
		save = a("submit");
	
	
	
	
	
	
	createRestTypes();
	save.addEventListener("click", saveLocal);
	showInfo.addEventListener("click", viewData);
	wipeInfo.addEventListener("click", emptyStorage);
	

	





});
