
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
