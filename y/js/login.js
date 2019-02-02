
var lg_username = document.getElementById("login_username");
var lg_password = document.getElementById("login_password");
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    window.location="hrhome.html";
   
    // ...
  } else {
    // User is signed out.
    
    // ...
  }
window.login=function(){
    
    var lg_username=$('#login_username').val();
    var lg_password=$('#login_password').val()
    if(lg_username.length!= 0 &&  lg_password!=0){  
       
   
      
            firebase.auth().signInWithEmailAndPassword(lg_username,lg_password)
   .then(function(firebaseUser) {
 

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
                          
$(function() {
    
    var $formLogin = $('#login-form');
   
    var $divForms = $('#div-forms');
    var $modalAnimateTime = 300;
    var $msgAnimateTime = 150;
    var $msgShowTime = 2000;
  
 /*   $("form").submit(function () {
        switch(this.id) {
            case "login-form":
                alert("heel");
            
                var $lg_username=$('#login_username').val();
                var $lg_password=$('#login_password').val();
     
                firebase.auth.signInWithEmailAndPassword($lg_username,$lg_password).catch(function(error){
                    msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "error", "glyphicon-remove", "Login error");
                });

              
              //  else {
                    //msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "success", "glyphicon-ok", "Login OK");
                //}
                
               // if ($lg_username == "ERROR") {
                //    msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "error", "glyphicon-remove", "Login error");
              //  } 

                return false;
                break;
           
            default:
                return false;
        }
        return false;
    }); */

});



    
   
    
    function modalAnimate ($oldForm, $newForm) {
        var $oldH = $oldForm.height();
        var $newH = $newForm.height();
        $divForms.css("height",$oldH);
        $oldForm.fadeToggle($modalAnimateTime, function(){
            $divForms.animate({height: $newH}, $modalAnimateTime, function(){
                $newForm.fadeToggle($modalAnimateTime);
            });
        });
    }
    
    function msgFade ($msgId, $msgText) {
        $msgId.fadeOut($msgAnimateTime, function() {
            $(this).text($msgText).fadeIn($msgAnimateTime);
        });
    }
    
    function msgChange($divTag, $iconTag, $textTag, $divClass, $iconClass, $msgText) {
        var $msgOld = $divTag.text();
        msgFade($textTag, $msgText);
        $divTag.addClass($divClass);
        $iconTag.removeClass("glyphicon-chevron-right");
        $iconTag.addClass($iconClass + " " + $divClass);
        setTimeout(function() {
            msgFade($textTag, $msgOld);
            $divTag.removeClass($divClass);
            $iconTag.addClass("glyphicon-chevron-right");
            $iconTag.removeClass($iconClass + " " + $divClass);
  		}, $msgShowTime);
    }
});
                       