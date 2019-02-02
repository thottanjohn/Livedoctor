  
firebase.auth().onAuthStateChanged(function(user) {
    
      
       
    if (user) {
      // User is signed in.(
       
        $('#login').hide();
        $('#logout').show();
        $('#profile').show();
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
  
          $('#logout').hide();
          $('#login').show();
          $('#profile').hide();
          // ...
        }
      });

      function logout(){
        firebase.auth().signOut().then(function() {
          console.log('Signed Out');
          $('#logout').hide();
          $('#login').show();
          $('#profile').hide();
        
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