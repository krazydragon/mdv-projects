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
                       navigator.geolocation.getCurrentPosition(displayMap, notWork);
                       
                       
                       });

function displayMap(position){
    var lat = position.coords.latitude,
    long = position.coords.longitude,
    gpsData = (lat +","+ long);
    
    alert(gpsData);
    $('#map_canvas').gmap({'zoom': 8,'center': gpsData});
}



$('#Camera').live("pageshow", function(){
                  pictureSource=navigator.camera.PictureSourceType;
                  destinationType=navigator.camera.DestinationType;
                  });


function getPhoto(demoData) {
    var demoImage = $('#demoImage');
    
    demoImage.style.display = 'block';
    
    demoImage.src = demoData;
}

function capturePhoto() {
    navigator.camera.getPicture(getPhoto, notWork, { quality: 50, allowEdit: true, destinationType: navigator.camera.DestinationType.FILE_URI});
}

function notWork(error) {
    navigator.notification.alert(error);
}

function contacts_success(contacts) {
    $('#contacts-output').html("<strong>" + contacts.length + "</strong> contacts returned.");
    for (var i = 0; i < contacts.length ; i++) {        
        if (contacts[i].name && contacts[i].name.formatted) {
            $('#contacts-output').append("<br/>Contact " + (i+1) + " is <strong>" +
                                         contacts[i].name.formatted + "</strong>");
            break;
        }
    }
}
function contacts_fail (error) {
    $('#contacts-output').html("<strong>Error getting contacts.</strong>");
}
function get_contacts() {
    var obj = new ContactFindOptions();
    obj.filter = "";
    obj.multiple = true;
    navigator.contacts.find(
                            [ "displayName", "name" ], contacts_success,
                            contacts_fail, obj);
}

