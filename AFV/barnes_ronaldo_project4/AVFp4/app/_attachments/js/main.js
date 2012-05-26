// Project 4
// Author: Ronaldo Barnes
// Created for: AVF Online 0205

$(document).ready(function(){ 
 var $db = $.couch.db("avfp2");

 
   
 function editEntry(key){
        $db.openDoc(key, {success: function(obj) {
            $('#fav').val(obj.fav);
            $('#restaurant').val(obj.restaurant);
            $('#place').val(obj.place);
            $('#date').val(obj.date);
            $('#types').val(obj.types);
            $('#food').val(obj.food);
            $('#numScale').val(obj.numScale);
            $('#comments').val(obj.comments);
            $(key).unbind('click', editEntry);
    }            
    });
        }
        
        
    function deleteEntry(key){
        console.log(key);
        $db.openDoc(key, { success: function(doc) {  
           $db.removeDoc(doc, { success: function() {     
           }}) ; 
          }});
        $('#Entry').empty();
        }

    function createEntry(){ 
        var key = $(this).attr('id');
        console.log(key);
      $db.openDoc( key, { 
          success: function(obj) {
              var    newLi = $('<li></li>'),
                   newH2 = $('<h2></h2>'),
                   newP1 = $('<p></p>'),
                   newP2 = $('<p></p>'),
                   newP3 = $('<p></p>'),
                   newP4 = $('<p></p>'),
                   newP5 = $('<p></p>'),
                   newP6 = $('<p></p>'),
                      newA1 = $('<a href="#addRest" data-role="button"  data-icon="back">Edit</a>'),
                   newA2 = $('<a href="#" data-role="button" data-icon="delete">Delete</a>');
              $(newH2).html(obj.restaurant);
        $(newP1).html("Location : " + obj.place);
        $(newP2).html("Date : " + obj.date);
        $(newP3).html("Type of Restaurant : " + obj.types);
        $(newP4).html("Kind of food served : " + obj.food);
        $(newP5).html("On a scale of 1-10 how good was it? : " + obj.numScale);
        $(newP6).html("Comments : " + obj.comments);
        $(newA1).bind('click', editEntry(key));
        $(newA2).bind('click', deleteEntry(key));
        $(newLi).append(newH2, newP1, newP2, newP3, newP4, newP5, newP6, newA1, newA2);
       $('#Entry').append(newLi);
       $('#Entry').listview('refresh');
       }            
         });
         
       };  
       
    $('#main').live("pageshow", function(){ 
        $('#Category').children().remove();
                
        
         $("#restForm").validate({
             submitHandler: function(){
             
                 var Restaurant = {
                     "place" : $('#place').val(),
                     "restaurant" :$('#restaurant').val(),
                     "date" :$('#date').val(),
                     "types" :$('#types').val(),
                     "food" : $('#food').val(),
                     "numScale" : $('#numScale').val(),
                     "comments" : $('#comments').val(),
                     "fav" : $('#fav').val(),
                     "creation_time" : ( new Date() ).getTime()
                 };
                 $db.saveDoc( Restaurant, {
                     success: function() {
                         
                     },
                     error: function() {
                         alert( "Cannot save new document." );
                      }
             });
             }
         });            
         
       });
    function button(cat){
        
        
        var newUl = $('<ul data-role="listview" data-inset="true" data-theme="a" id="Entry"></ul>');
        $('#entryContent').append(newUl);
          $db.view("Tracker/" + cat ,{
              success: function(data){
                 $.each(data.rows, function(i, obj){
                    var    newLi = $('<li></li>'),
                         newA = $('<a></a>', {
                                href: "#entryPage",
                                id : obj.id
                                }),
                         newH3 = $('<h3></h3>'),
                         newP = $('<p></p>'); 
                     $(newH3).html(obj.value.restaurant);
                     $(newP).html(obj.value.place);
                     $(newA).append(newH3, newP);
                     $(newA).bind('click', createEntry);
                     $(newLi).append(newA);
                     $('#Category').append(newLi);
                });
                $('#Category').listview('refresh');
             }
         });
          
      };
    $("#FamilyButton").bind('click', button("Family"));
    $("#BarButton").bind('click', button("Bar"));
    $("#OutsideButton").bind('click', button("Outside"));
    $("#SportsButton").bind('click', button("Sports"));
    $("#OtherButton").bind('click', button("Other"));
    
   

  
  
       
  
});
           


