
var databasesRef = firebase.database().ref().child("hospitals");
var docsRef = firebase.database().ref().child("Doctors");

var x = document.getElementById("mySelect");
var y = document.getElementById("kSelect");
var dept = document.getElementById("depSelect");
var depdoc = document.getElementById("depdocSelect");
var doctorlist = document.getElementById("docsSelect");

var depst = document.getElementById("deptselectsection");
var hosp = document.getElementById("hospsection");
var docsec = document.getElementById("docselectsection");

var or = document.getElementById("or");
var ors = document.getElementById("ors");


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
  docsRef.once('value', function(snapshot) {
    
    snapshot.forEach(function(childSnapshot) {
   
      var docname = childSnapshot.val().Name;
  
      var option1 = document.createElement("option");
  
      option1.text = docname;
      option1.setAttribute('id',childSnapshot.key);
      doctorlist.add(option1);
      var depname = childSnapshot.val().Specialization;
  
      var option2 = document.createElement("option");
  
      option2.text = depname;
      dept.add(option2);
      
      //var childData = childSnapshot.val();
     
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
    depst.style.display = "none";  
    docsec.style.display = "none"; 
    or.style.display = "none"; 
    ors.style.display = "none"; 
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
  $('#depSelect').change(function(){
    var value =$(this).val();
    
    $('#depdocSelect').empty();
    hosp.style.display = "none";  
    docsec.style.display = "none";
    or.style.display = "none"; 

    ors.style.display = "none"; 
    var secRef = firebase.database().ref().child("Doctors").orderByChild('Specialization').equalTo(value);
    secRef.once('value', function(snapshot) {
     
    snapshot.forEach(function(childSnapshot) {

    var childKey = childSnapshot.val().Name;

    var option = document.createElement("option");

    option.text = childKey;
    option.setAttribute('id',childSnapshot.key);
    depdoc.add(option);

     });
    });
  })
  $('#docsSelect').change(function(){
    or.style.display = "none"; 
    hosp.style.display = "none";  
    depst.style.display = "none"; 
    ors.style.display = "none"; 

    

  })
function testJS(){
  var dc = document.getElementById('doctor');
  var frm = document.getElementById('search-theme-form') 
  
  if(x.length!= 0 && y.length!=0){

   
   var doctor = y.options[y.selectedIndex].id;
   
   
   
   

   dc.value=doctor;

   frm.action = "page.html";
 
  }else if(dept.length!= 0 && depdoc.length!=0){

    var doctor = depdoc.options[depdoc.selectedIndex].id;
   
   
   
   

    dc.value=doctor;

    frm.action = "page.html";
   }
   else if(doctorlist.length!=0){

    var doctor = doctorlist.options[doctorlist.selectedIndex].id;
   
   

    dc.value=doctor;

    frm.action = "page.html";
     

   }
  else{
    alert("Please select a valid doctor");
  }


}




