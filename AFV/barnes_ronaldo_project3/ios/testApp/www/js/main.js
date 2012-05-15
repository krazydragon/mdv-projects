// Project 3
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
    $('#Geolocation').live("pageshow", function(){
        navigator.geolocation.getCurrentPosition(displayMap, noMap);
                           
        
    });

    function displayMap(position){
        var lat = position.coords.latitude,
            long = position.coords.longitude,
            gpsData = (lat +","+ long);
        
        alert(gpsData);
        $('#map_canvas').gmap({'zoom': 8,'center': gpsData});
    }

    function noMap(error) {
        alert('Can\'t retrieve position.\nError: ' + error);
    };