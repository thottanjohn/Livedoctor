
var databasesRef = firebase.database().ref().child("hospitals");

var x = document.getElementById("mySelect");
var y = document.getElementById("kSelect");

$(document).ready(function() {


  databasesRef.once('value', function(snapshot) {
    
    snapshot.forEach(function(childSnapshot) {
   
      var childKey = childSnapshot.val().hospitalname;
  
      var option = document.createElement("option");
  
      option.text = childKey;
      x.add(option);
    
      var childData = childSnapshot.val();
     
  /*
      for(var key in childData) {
      var value = key;
      var option = document.createElement("option");
  
      option.text = value;
      y.add(option);
    // do something with "key" and "value" variables
   
      }  */
      // ...

    
    });
  });
});


 
$('#mySelect').change(function(){
    var value =$(this).val();
    
    $('#kSelect').empty();
    
    var secRef = firebase.database().ref().child("Doctors").orderByChild('Hospital').equalTo(value);
    secRef.once('value', function(snapshot) {
     
    snapshot.forEach(function(childSnapshot) {

    var childKey = childSnapshot.val().Name;

    var option = document.createElement("option");

    option.text = childKey;
    option.setAttribute('id',childSnapshot.key);
    y.add(option);

     });
    });
  })

function testJS(){
  
  if(x.length!= 0 && y.length!=0){

   
   var doctor = y.options[y.selectedIndex].id;
   
   
   
   
   var dc = document.getElementById('doctor')
   dc.value=doctor;
   var frm = document.getElementById('search-theme-form') 
   frm.action = "page.html";
 
  }
  else{
    alert("Please select a valid doctor");
  }


}




