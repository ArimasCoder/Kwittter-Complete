const firebaseConfig = {
      apiKey: "AIzaSyDU9dCLgw8Xd34Mk7Iv8Ur5Ced1oMmQShU",
      authDomain: "kwitter-2ff72.firebaseapp.com",
      databaseURL: "https://kwitter-2ff72-default-rtdb.firebaseio.com",
      projectId: "kwitter-2ff72",
      storageBucket: "kwitter-2ff72.appspot.com",
      messagingSenderId: "513436489494",
      appId: "1:513436489494:web:f17e83f725e89a0bfe2237"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name+" !";

function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row="<div class='room_name' id="+
      Room_names+" onclick='redirectToRoomName(this.id)'>#"+
      Room_names+"</div><hr>";

      document.getElementById("output").innerHTML+=row;


      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html";
}