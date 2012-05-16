// Project 3
// Author: Ronaldo Barnes
// Created for: AVF Online 0205

var destinationType;
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

$('#Camera').live("pageshow", function(){
                  pictureSource=navigator.camera.PictureSourceType;
                  destinationType=navigator.camera.DestinationType;
                  });


function getPhoto(imageData) {
    var demoImage = $('#demoImage');
    
    demoImage.style.display = 'block';
    
    demoImage.src = imageData;
}

function capturePhoto() {
    navigator.camera.getPicture(getPhoto, camFail, { quality: 50, allowEdit: true, destinationType: navigator.camera.DestinationType.FILE_URI});
}

function camFail(error) {
    alert('Failed because: ' + error);
}
