
// Project 4
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
    gpsData = (lat +","+ long),
    gpsOptions = {
    center:gpsData,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.HYBRID
    };
    
    alert(gpsData);
    $('#map_canvas').gmap(gpsOptions);
var geocoder,
map,
infowindow = new google.maps.InfoWindow(),
marker,
gpsData;

$('#Geolocation').live("pageshow", function(){
                       navigator.geolocation.getCurrentPosition(displayMap, notWork);
                       });


function displayMap(position){
	lat = position.coords.latitude;
    long = position.coords.longitude;
    gpsData = new google.maps.LatLng(lat, long);
    var gpsOptions = {
    center:gpsData,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.HYBRID
    };
    
    map = new google.maps.Map(document.getElementById('map_canvas'),gpsOptions);
    geocoder = new google.maps.Geocoder(); 
    
    
}
function getAddress(){
    geocoder.geocode({'latLng': gpsData}, function(results, status){
                     if (status == google.maps.GeocoderStatus.OK){
                     if (results[0]){
                     map.setZoom(10);
                     marker = new google.maps.Marker({
                                                     position: gpsData,
                                                     map: map    
                                                     });
                     navigator.notification.alert(
                                                  results[0].formatted_address,  
                                                  alertDismissed,         
                                                  'This is where you are!',            
                                                  'OK'                  
                                                  );
                     }
                     else{alert("No results found");}
                     }
                     else{alert("Geocoder failed due to: " + status);
                     }
                     });

}

//Camera


$('#Camera').live("pageshow", function(){
                  var pictureSource = navigator.camera.PictureSourceType,
                  destinationType = navigator.camera.DestinationType;
                  });


function takePhoto(imageData) {


            

function getPhoto(imageData) {

    var demoImage = document.getElementById('demoImage');
    
    demoImage.style.display = 'block';
    
    demoImage.src = imageData;
}


function capturePhoto() {
    navigator.camera.getPicture(takePhoto, notWork, { quality: 50});


function capturePhoto() {
    navigator.camera.getPicture(getPhoto, notWork, { quality: 50});
}

function retrievePhoto() {
    
    navigator.camera.getPicture(getPhoto, notWork, { quality: 50, 
                                destinationType: navigator.camera.DestinationType.FILE_URI,
                                sourceType: navigator.camera.PictureSourceType.SAVEDPHOTOALBUM });

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