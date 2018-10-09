var a=document.getElementById("name");  
    var x=document.getElementById("Token");
    var y=document.getElementById("AvgTime");
   
      
    firebase.auth().onAuthStateChanged(function(user) {
    
      
       
      if (user) {
        // User is signed in.(
         
      

        var mydocref= firebase.database().ref('Doctors/' + user.uid );
        mydocref.on('value', function(snapshot) {
        var status=snapshot.val().status;
        var Token=snapshot.val().Token;
        var Hospital=snapshot.val().Hospital;
        var Name=snapshot.val().Name;
        var AvgTime=snapshot.val().Average_Time;
        a.innerHTML=Name;
        x.innerHTML=Token;
        y.innerHTML=AvgTime;
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

      });
        
      
       
       
         // ...
      } 
      else {
        // User is signed out.

        window.location="index.html";
        
        // ...
      }


    });
    
    window.logout=function(){


      firebase.auth().signOut().then(function() {
  console.log('Signed Out');
}, function(error) {
  console.error('Sign Out Error', error);
});
    }
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