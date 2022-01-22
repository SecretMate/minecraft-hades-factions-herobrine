var firebaseConfig = {
    apiKey: "AIzaSyA4i8hKa97hZ5esXbIu7FeTjWrwvg-rr3E",
    authDomain: "m-hades.firebaseapp.com",
    databaseURL: "https://m-hades-default-rtdb.firebaseio.com",
    projectId: "m-hades",
    storageBucket: "m-hades.appspot.com",
    messagingSenderId: "53260879261",
    appId: "1:53260879261:web:2dfc5b0df7aab026cedb74"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addInfo() {
     user_name = document.getElementById("user_name").value;
     range = document.getElementById("range").value;
     play_time = document.getElementById("play_time").value;
     work_type = document.getElementById("work_type").value;
     email = document.getElementById("email").value;

     firebase.database().ref("/").child(user_name).child(play_time).child(work_type).child(range).child(email).update({
        purpose:"Adding User"
    }).then(function() {
      window.location = "finish.html";
    });
  }