var database = firebase.database();


function login(){
   var email=$('#login_email').val();
   var password=$('#login_password').val();
   var username=$('#username').val();
   var avgtime=$('#login_password').val();
   var token="0";
   var status="Unavailable";
firebase.auth().onAuthStateChanged(function(user) {



if (user) {
// User is signed in.(
var databasesRef = firebase.database().ref().child("hospitals");
if(!isNaN(avgtime)){
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
        Hospital:hospital
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
