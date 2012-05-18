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

//GPS
function getGPS(){
    navigator.geolocation.getCurrentPosition(displayMap, notWork);
}

function displayMap(position){
    var lat = position.coords.latitude,
    long = position.coords.longitude,
    gpsData = (lat +","+ long);
    
    alert(gpsData);
    $('#map_canvas').gmap({'zoom': 8,'center': gpsData});
}

//Camera

$('#Camera').live("pageshow", function(){
                  var pictureSource = navigator.camera.PictureSourceType,
                  destinationType = navigator.camera.DestinationType;
                  });


function takePhoto(imageData) {
    var demoImage = document.getElementById('demoImage');
    
    demoImage.style.display = 'block';
    
    demoImage.src = imageData;
}

function capturePhoto() {
    navigator.camera.getPicture(takePhoto, notWork, { quality: 50});
}

function notWork(error) {
    navigator.notification.alert(error);
}

//Contacts
function contactsSuccess(contacts) {
    $('#contactsHTML').html("<strong>" + contacts.length + "</strong> contacts returned.");
    for (var i = 0; i < contacts.length ; i++) {        
        if (contacts[i].name && contacts[i].name.formatted) {
            $('#contactsHTML').append("<br/>Contact " + (i+1) + " is <strong>" +
                                      contacts[i].name.formatted + "</strong>");
            break;
        }
    }
}
function contactsError (error) {
    $('#contactsHTML').html("<strong>Can't get contacts.</strong>");
}
function getContacts() {
    var obj = new ContactFindOptions();
    obj.filter = "";
    obj.multiple = true;
    navigator.contacts.find(
                            [ "displayName", "name" ], contactsSuccess,
                            contactsError, obj);
}
//Network
function checkNetwork() {
    var network = navigator.network.connection.type;
    
    var types = {};
    types[Connection.UNKNOWN]  = 'Unknown connection';
    types[Connection.ETHERNET] = 'Ethernet connection';
    types[Connection.WIFI]     = 'WiFi connection';
    types[Connection.CELL_2G]  = 'Cell 2G connection';
    types[Connection.CELL_3G]  = 'Cell 3G connection';
    types[Connection.CELL_4G]  = 'Cell 4G connection';
    types[Connection.NONE]     = 'No network connection';
    
    $('#networkType').html(types[network]);
}