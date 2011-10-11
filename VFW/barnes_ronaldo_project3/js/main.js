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
	
	function saveLocal(){
		var num = Math.floor(Math.random()*7463778270);
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
		//delLink.addEventListener("click","delItem");
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
	
	var restTypes = [ "---Pick A Type of Restaurant---", "Family", "Sports Themed", "Bar/Club", "Outside", "Other" ],
		showInfo = a("showInfo"),
		wipeInfo = a("wipeInfo"),
		save = a("submit");
	
	
	
	
	
	
	createRestTypes();
	save.addEventListener("click", saveLocal);
	showInfo.addEventListener("click", viewData);
	wipeInfo.addEventListener("click", emptyStorage);
	



});
