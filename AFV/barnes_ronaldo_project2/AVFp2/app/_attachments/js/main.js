// Project 2
// Author: Ronaldo Barnes
// Created for: AVF Online 0205


 document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        // Empty
    }

    // alert dialog dismissed
    function alertDismissed() {
        // do something
    }

    // Show a custom alert
    //
    function showAlert() {
        navigator.notification.alert(
            'You are the winner!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );
    }