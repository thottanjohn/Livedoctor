firebase.auth().onAuthStateChanged(function(user) {
    var x=document.getElementById("hospitalname");
    var y=document.getElementById("hrname");
    var ul = document.getElementById("dynamic-list");
    
    
     
    if (user) {
      // User is signed in.(
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
  

  x.innerHTML="Hosptial Name:"+snapshot.val().hospitalname;
  y.innerHTML="HR Name:"+snapshot.val().hrname;

  var secRef = firebase.database().ref().child("Doctors").orderByChild('Hospital').equalTo(snapshot.val().hospitalname);
  secRef.once('value', function(snapshot) {
   
  snapshot.forEach(function(childSnapshot) {

  var childKey = childSnapshot.val().Name;
  var key =childSnapshot.key;
  var div=document.createElement("div");
  var li = document.createElement("div");
  var bt = document.createElement("BUTTON");
  li.setAttribute('id',childKey);
  bt.setAttribute('id',key);

  var t = document.createTextNode("Remove Doctor");
  bt.appendChild(t);
  li.appendChild(document.createTextNode(childKey));
  div.appendChild(li);
  div.appendChild(bt);
  bt.addEventListener("click",removedoc);


  ul.appendChild(div);

  

   });
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
 
  window.logout=function(){


    firebase.auth().signOut().then(function() {
console.log('Signed Out');
}, function(error) {
console.error('Sign Out Error', error);
});
  }

  
  

function adddoctor(){
  var dc = document.getElementById('doctor')
 dc.value=firebase.auth().currentUser.uid;
 alert(dc.value);
 var frm = document.getElementById('search-theme-form') 
 frm.action = "doccreate.html";
}
function removedoc(){
var deldiv=document.getElementById(this.id);
alert(deldiv);
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
  

  
  
  
  
  