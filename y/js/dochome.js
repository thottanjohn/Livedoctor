$('#outer').hide();
var a=document.getElementById("name");  
var x=document.getElementById("Token");
var y=document.getElementById("AvgTime");
var ph=document.getElementById("phone");
var spec=document.getElementById("specialization");
   
      
    firebase.auth().onAuthStateChanged(function(user) {

      
       
      if (user) {
        // User is signed in.(
          var elem = document.getElementById("myBar");   
          var width = 1;
          var id = setInterval(frame, 10);
          function frame() {
              if (width >= 100) {
                clearInterval(id);
          
          
              } else {
                width++; 
                elem.style.width = width + '%'; 
              }
          }

        var mydocref= firebase.database().ref('Doctors/' + user.uid );
        mydocref.on('value', function(snapshot) {
        var status=snapshot.val().status;
        var Token=snapshot.val().Token;
        var Hospital=snapshot.val().Hospital;
        var Name=snapshot.val().Name;
        var AvgTime=snapshot.val().Average_Time;
        var Specialization=snapshot.val().Specialization;
        var Phone=snapshot.val().Phone_no
        a.innerHTML=Name;
        x.innerHTML=Token;
        y.innerHTML=AvgTime;
        ph.innerHTML=Phone;
        spec.innerHTML=Specialization;
        if(status==="Unavailable"){

        
        x.style.display = "none"; 
        y.style.display = "none"; 
        $("#add").hide();
        $("#sub").hide();

        $("#un").prop("checked", true); 
        }else{
        a.style.display = "block"; 
        x.style.display = "block"; 
        y.style.display = "block"; 
        
        
        $("#ava").prop("checked", true); 
        $("#add").show();
        $("#sub").show();


      }
      $('#outer').show();

      $('#myProgress').hide();
      });


        
      
       
       
         // ...
      } 
      else {
        // User is signed out.

        window.location="index.html";
        // ...
      }


    });
    

function handleClick(myRadio) {
  
currentValue = myRadio.value;
var mydocref= firebase.database().ref('Doctors/' + firebase.auth().currentUser.uid );
mydocref.child("status").set(currentValue);
if( currentValue === "Unavailable"){
  x.style.display = "none"; 
  y.style.display = "none"; 
  $("#un").prop("checked", true); 
}else{
  x.style.display = "block"; 
  y.style.display = "block"; 
$("#avail").prop("checked", true); 


  } 
  }

$(document).ready(function() {

  $("#add").hide();
  $("#sub").hide();
});
    function add(){
      var mydocref= firebase.database().ref('Doctors/' + firebase.auth().currentUser.uid );
   
     
        t=Number( x.innerHTML);
        mydocref.child("Token").set(t+1);
        x.innerHTML=t+1;
    
    }

    function sub(){
      var mydocref= firebase.database().ref('Doctors/' + firebase.auth().currentUser.uid );
      t=Number( x.innerHTML);
        mydocref.child("Token").set(t-1);
        x.innerHTML=t-1;
    }
    