$('#outer').hide();
firebase.auth().onAuthStateChanged(function(user) {
    var x=document.getElementById("hospitalname");
    var y=document.getElementById("hrname");
    var ul = document.getElementById("dynamic-list");
 
    
     
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
      var databasesRef = firebase.database().ref().child("hospitals");
      databasesRef.once('value', function(snapshot) {
      if (snapshot.hasChild(user.uid)) {
    // run some code
      }
      else{
      window.location="dochome.html";
      }
      
  var mRef = firebase.database().ref().child("hospitals/"+user.uid);
  mRef.once('value', function(snapshot) {
  

  x.innerHTML=" "+snapshot.val().hospitalname;
  y.innerHTML=" "+snapshot.val().hrname;
  var ref = firebase.database().ref().child("Doctors");
  var secRef = firebase.database().ref().child("Doctors").orderByChild('Hospital').equalTo(snapshot.val().hospitalname);
  secRef.once('value', function(snapshot) {
   
  snapshot.forEach(function(childSnapshot) {

  var childKey = childSnapshot.val().Name;
  var specialization = childSnapshot.val().Specialization;
  var key =childSnapshot.key;
  var bt = document.createElement("BUTTON");
  var name =document.createElement("h3");
  var spec =document.createElement("p");
  name.setAttribute('class',"card-title");
  spec.setAttribute('class',"card-body");
  name.setAttribute('id',childKey);
  bt.setAttribute('id',key);
  var option2 = document.createElement("div");
  var option3 = document.createElement("div");

  option2.setAttribute('class','card w75 xy');
  option3.setAttribute('class','cardbody');
  bt.setAttribute('class','btn btn-danger');
  var t = document.createTextNode("Remove Doctor");
  bt.appendChild(t);
  name.appendChild(document.createTextNode(childKey));
  spec.appendChild(document.createTextNode(specialization));
  option3.appendChild(name);
  option3.appendChild(spec);
  option3.appendChild(bt);
  option2.appendChild(option3)
  bt.onclick = function() {
    ul.removeChild(option2);

    ref.child(this.id).remove();


    // onclick stuff
  }


  ul.appendChild(option2);

  

   });
   $('#outer').show();

   $('#myProgress').hide();
  });
    
 });

  
});  // ... 
} else {
      // User is signed out.
  
      window.location="index.html";
      
      // ...
    }
  })
  
     
     // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
     // // The Firebase SDK is initialized and available here!
     //
     // firebase.auth().onAuthStateChanged(user => { });
     // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
     // firebase.messaging().requestPermission().then(() => { });
     // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
     //
     // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  
  
  
 
 // var mRef = firebase.database().ref().child("hospitals/aswini");

  
  

function adddoctor(){
  var dc = document.getElementById('doctor')
 dc.value=firebase.auth().currentUser.uid;
 var frm = document.getElementById('search-theme-form') 
 frm.action = "doccreate.html";
}
function removedoc(id){

alert(id);
//ul.removeChild(deldiv);


}
  /*
   for(var key in childData) {
   var value = key;
   var option = document.createElement("option");
  
   option.text = value;
   y.add(option);
  // do something with "key" and "value" variables
  
   }  */
   // ...
  
  
 
  
  
  
  
  
 /* var secRef = firebase.database().ref().child("Doctors").orderByChild('Hospital').equalTo(value);
  secRef.once('value', function(snapshot) {
  
  snapshot.forEach(function(childSnapshot) {
  
  var childKey = childSnapshot.val().Name;
  
  var option = document.createElement("option");
  
  option.text = childKey;
  y.add(option);
  
  });
  });
  }) */
  

  
  
  
  
  