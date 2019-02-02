$('#outer').hide();
function processForm()
        {
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
          var parameters = location.search.substring(1).split("&");
          var temp = parameters[0].split("=");
          l = unescape(temp[1]);
         
         
         var secRef= databasesRef.child("Doctors").child(l);
         secRef.on('value', function(snapshot) {
               $("#name").html("Doctor Name:"+snapshot.val().Name);
              
               $("#status").html("Status:"+snapshot.val().status);
        
               $("#AvgTime").html("Average Time:"+snapshot.val().Average_Time);
               $("#token").html("Token:"+snapshot.val().Token);
               if(snapshot.val().status ==="Available"){
                $("#AvgTime").show();
                $("#token").show();
              }else{
                $("#AvgTime").hide();
                $("#token").hide();
                
              }
              $('#outer').show();

              $('#myProgress').hide();
         });
   
  
      
  /*
      for(var key in childData) {
      var value = key;
      var option = document.createElement("option");
  
      option.text = value;
      y.add(option);
    // do something with "key" and "value" variables
   
      }  */
      // ...

    
  
          //Dialog with the text you put on the textbox
        }
        var databasesRef = firebase.database().ref();
        var x=document.getElementById("token");
        $(document).ready(function() {
            processForm();
            

        })
    