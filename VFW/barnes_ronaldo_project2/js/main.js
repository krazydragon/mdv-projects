// Project 2
// Author: Ronaldo Barnes
// Created for: VFW Online 1110


// wait until DOM loads
window.addEventListener("DOMContentLoaded", function() {

	//Retrieve element function
	function $(k) {
		var theElm = document.getElementById(k);
		return theElm;
	}

	//Restaurant Populater function
	function createRestTypes() {
		var formTag = document.getElementsByTagName("form"),
			pickLi = $("pick"),
			createType = document.createElement("select");
			createType.setAttribute("id","types");
			for (var b=0, c=restTypes.length; b<c; b++){
				var createOption = document.createElement("option");
				var optText = restTypes[b];
				createOption.setAttribute("value", optText);
				createOption.innerHTML = optText;
				createType.appendChild(createOption);
			}
			pickLi.appendChild(createType);
		}

	//Varibles 
	
	var restTypes = [ "---Pick A Restaurant Type---", "Sports Themed", "Bar/Club", "Outside", "Other" ];
	createRestTypes();
	
	





});
