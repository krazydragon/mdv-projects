// Project 2
// Author: Ronaldo Barnes
// Created for: AVF Online 0205


document.addEventListener("deviceready", onDeviceReady, false);

   
    function onDeviceReady() {
    	
    }
    
    
    function alertDismissed() {
        
    }

   
    // Show alert 
    function showAlert() {
        navigator.notification.alert(
            'I work!',  
            alertDismissed,         
            'Alert',            
            'Click'                  
        );
    } 
    
 