var database = firebase.database();
var mauth1=firebase.auth();
var mauth2=firebase.auth();

var secondaryApp = firebase.initializeApp(config, "Secondary");
var px=document.getElementById('outer');
var progress=document.getElementById('myProgress');
  
var logins =document.getElementById('login');
var logouts =document.getElementById('logout');
var profiles =document.getElementById('profile');
px.style.display="None";
function login_fn(){
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
        
          
        
        alert("success");
        
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

firebase.auth().onAuthStateChanged(function(user) {
    
      
       
  if (user) {
    // User is signed in.(
      logins.style.display="None";
      logouts.style.display="block";
      profiles.style.display="block";

      var link =document.getElementById('profilelink');

      var databasesRef = firebase.database().ref().child("hospitals");
      databasesRef.once('value', function(snapshot) {
      if (snapshot.hasChild(user.uid)) {
        link.href="hrhome.html?doctor=" + user.uid;
    // run some code
      }
      else{
        link.href="dochome.html?doctor=" + user.uid;
      }
     
    });


  }
      else {
        // User is signed out.

        login.style.display="block";
        logout.style.display="None";
        profile.style.display="None";
        // ...
      }
    });

    function logout(){
      firebase.auth().signOut().then(function() {
        console.log('Signed Out');
        login.style.display="block";
        logout.style.display="None";
        profile.style.display="None";

        //$('#logout').hide();
        //$('#login').show();
        //$('#profile').hide();
      
      }, function(error) {
        console.error('Sign Out Error', error);
      });
          }

          window.login=function(){
      
            var lg_username=$('#login_username').val();
                        var lg_password=$('#login_password').val()
            if(lg_username.length!= 0 &&  lg_password!=0){  
               
           
              
            firebase.auth().signInWithEmailAndPassword(lg_username,lg_password)
           .then(function(firebaseUser) {
            $('#login-modal').modal('toggle');
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
        }
         
          else{
        
                        alert("Please enter a valid username or passwprd");
                    }
            
        
        
        }



 $(document).ready(function() {
  

  var elem = document.getElementById("myBar");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      px.style.display="block";

      progress.style.display="None";

    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
 var parameters = location.search.substring(1).split("&");
 var temp = parameters[0].split("=");
 l = unescape(temp[1]);

})
