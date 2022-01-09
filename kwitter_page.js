//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCXzYWuadEf-KxET5KebXi3uXTgSdaM3VM",
      authDomain: "kwitter-caad5.firebaseapp.com",
      databaseURL: "https://kwitter-caad5-default-rtdb.firebaseio.com",
      projectId: "kwitter-caad5",
      storageBucket: "kwitter-caad5.appspot.com",
      messagingSenderId: "827196602785",
      appId: "1:827196602785:web:2b8933be6c7326b9da33e0"
    };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0            
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
