
var databasesRef = firebase.database().ref().child("hospitals");
var docsRef = firebase.database().ref().child("Doctors");

var x = document.getElementById("mySelect");
var y = document.getElementById("kSelect");
var dept = document.getElementById("depSelect");

var doctorlist = document.getElementById("docsSelect");
var doclistdisplay =document.getElementById("doclistdisplay");
var rev =document.getElementById("rev");


var depst = document.getElementById("deptselectsection");
var hosp = document.getElementById("hospsection");
var docsec = document.getElementById("docselectsection");

var or = document.getElementById("or");
var ors = document.getElementById("ors");
$('#outer').hide();

    var lg_username = document.getElementById("login_username");
    var lg_password = document.getElementById("login_password");
   
                              
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

$(document).ready(function() {
 /* var option = document.createElement("div");
  option.innerHTML = "hello";
  doclistdisplay.prepend(option); */
  var list=[]

  

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
  
      //var option1 = document.createElement("option");
  
      //option1.text = docname;
      //option1.setAttribute('id',childSnapshot.key);
      //doctorlist.add(option1);
      var depname = childSnapshot.val().Specialization;
      if (!list.includes(depname)){
        list.push(depname);
        var option2 = document.createElement("option");
      
        option2.text = depname;
        dept.add(option2);

      }

      
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
    $('#outer').show();

    $('#myProgress').hide();
  });



});

$(function(){
  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var file =  $(this).data('include') + '.html';
    $(this).load(file);
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
    hosp.style.display = "none";  
    docsec.style.display = "none";
    or.style.display = "none";

    ors.style.display = "none"; 
    
  })
  $('#docsSelect').on('input',function(e){
    or.style.display = "none"; 
    hosp.style.display = "none";  
    depst.style.display = "none"; 
    ors.style.display = "none"; 
    

});
$('#rev').on('click',function(e){
  or.style.display = "block"; 
  hosp.style.display = "block";  
  depst.style.display = "block"; 
  ors.style.display = "block";
  docsec.style.display = "block"; 
  $('#kSelect').empty();
  $('#docsSelect').val('');
  $('#depSelect').val('None');

  $('#mySelect').val('None');
  doclistdisplay.innerHTML=""
  
});
   

    

function testJS(){
  var dc = document.getElementById('doctor');
  var frm = document.getElementById('search-theme-form') ;
  if(x.length!= 0 && y.length!=0){

   
   var doctor = y.options[y.selectedIndex].id;
   
   
   
   

   dc.value=doctor;

   frm.action = "page.html";
   frm.submit();
 
  }else if(dept.options[dept.selectedIndex].text!= "None"){

    var value = dept.options[dept.selectedIndex].text;
    doclistdisplay.innerHTML=""
    var secRef = firebase.database().ref().child("Doctors").orderByChild('Specialization').equalTo(value);
    secRef.once('value', function(snapshot) {
     
    snapshot.forEach(function(childSnapshot) {

      var childKey = childSnapshot.val().Name;
      var phno = childSnapshot.val().Phone_no;
      var Specialization = childSnapshot.val().Specialization;
      var chkey =childSnapshot.key; 
      var option = document.createElement("div");
      option.setAttribute('class','c');
          
      var name =document.createElement("h3");
      var link =document.createElement("a");
      link.setAttribute('href',"page.html?doctor=" +  chkey);
      link.innerHTML= childKey;
      name.prepend(link);
      var p_content =document.createElement("p");
      p_content.innerHTML= "CAll: " + phno  +"<br>" + "Specialization :" + Specialization;
      option.prepend( p_content);
      option.prepend(name);
      
  
  
      doclistdisplay.append(option);
     });
    });

   
   

   }
  
   else if(doctorlist.value.length !=0){
    doclistdisplay.innerHTML=""
    var secRef = firebase.database().ref().child("Doctors").orderByChild('Name').startAt(doctorlist.value);
    secRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {

    var childKey = childSnapshot.val().Name;
    var phno = childSnapshot.val().Phone_no;
    var Specialization = childSnapshot.val().Specialization;
    var chkey =childSnapshot.key; 
    var option = document.createElement("div");
    option.setAttribute('class','c');
        
    var name =document.createElement("h3");
    var link =document.createElement("a");
    link.setAttribute('href',"page.html?doctor=" +  chkey);
    link.innerHTML= childKey;
    name.prepend(link);
    var p_content =document.createElement("p");
    p_content.innerHTML= "CAll: " + phno  +"<br>" + "Specialization :" + Specialization;
    option.prepend( p_content);
    option.prepend(name);
    


    doclistdisplay.append(option);

     });
     if (!snapshot.exists()) {
      alert('No item mathes your search');
    }
    });
    //var doctor = doctorlist.options[doctorlist.selectedIndex].id;
   
   //alert("SD");

    //dc.value=doctor;

    //frm.action = "page.html";
     

   }
  else{
    alert("Please select a valid doctor");
  }


}

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







