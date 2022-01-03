
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
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
}
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
}
       Room_names = childKey;
      //Start code
      console.log("Room name - "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoom(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoom(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
