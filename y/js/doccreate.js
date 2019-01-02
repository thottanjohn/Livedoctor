var database = firebase.database();
var mauth1=firebase.auth();
var mauth2=firebase.auth();

var secondaryApp = firebase.initializeApp(config, "Secondary");


function login(){
  //alert($('#login_email'));
  
  var email=document.getElementById('login_email').value;
  var password=document.getElementById('login_password').value;
  var username=document.getElementById('username').value;
  var avgtime=document.getElementById('avgminute').value;
  var address=document.getElementById('location').value;
  //var latitude=$('#lat').val();
  //var longitude=$('#long').val();
  var specialization=document.getElementById('specialization').value;
  var phoneno=document.getElementById('phone_no').value;
  var token="0";
  var status="Unavailable";
  //var imagefile = document.getElementById("image_uploads").files;
  //var imagename = imagefile[0].name;
   // use the Blob or File API
firebase.auth().onAuthStateChanged(function(user) {
 


if (user) {
// User is signed in.(
//var storageService = firebase.storage();
//var storageRef = storageService.ref();
var databasesRef = firebase.database().ref().child("hospitals");
if(! isNaN(avgtime)  &&  ! isNaN(phoneno) ){

    
    databasesRef.once('value', function(snapshot) {
        if (snapshot.hasChild(user.uid)) {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(function(user) {
        
          
        
        
        
        // Success 
        })
        .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
           alert('Wrong password.');
        } else {
        alert(errorMessage);
        }
        console.log(error);
        // Error Handling
        });
        // run some code
        
        }
        else{
         
        var parameters = location.search.substring(1).split("&");
        var temp = parameters[0].split("=");
        l = unescape(temp[1]);
        //var file = imagefile[0];
        //storageRef.child("images/"+imagename).put(file).then(function(snapshot) {
          //alert(snapshot);
        //});
        var secRef = firebase.database().ref().child("hospitals").child(l);
        secRef.once('value', function(snapshot) {
        
        var hospital = snapshot.val().hospitalname;
        var email = snapshot.val().email;
        var password = snapshot.val().password;
        
        firebase.database().ref('Doctors/' + user.uid).set({
        Name: username,
        email: email,
        Token: token,
        Average_Time:avgtime, 
        status:status,
        Hospital:hospital,
        Phone_no:phoneno,
        Location:address,
        Specialization:specialization,
        });
      firebase.auth().signInWithEmailAndPassword(email,password)
        .then(function(firebaseUser) {
        window.location="hrhome.html"
        // Success 
        })
        .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
        } else {
        alert(errorMessage);
        }
        console.log(error);
        // Error Handling
        }); 


        
        });
      
    
          
           
        
        }
        
        
        
        
        });
}else{

    alert("please enter no. as average time")
}
  // ...
} else {
// User is signed out.

window.location="index.html";

// ...
}
})




}




 $(document).ready(function() {

 var parameters = location.search.substring(1).split("&");
 var temp = parameters[0].split("=");
 l = unescape(temp[1]);

})
