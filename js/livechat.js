// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDkDeBwYVbGNGZ1n7SMUtrC1dQCJlDAEDc",
    authDomain: "wedding-f1932.firebaseapp.com",
    databaseURL: "https://wedding-f1932-default-rtdb.firebaseio.com",
    projectId: "wedding-f1932",
    storageBucket: "wedding-f1932.appspot.com",
    messagingSenderId: "172034100874",
    appId: "1:172034100874:web:332eff7bc44e6b7590e773",
    measurementId: "G-HFB6LL9589"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
// initialize database

// get user's data

// submit form
// listen for submit event on the form and call the postChat function
document.getElementById("message-form").addEventListener("submit", sendMessage);

// send message to db
function sendMessage(e) {
  e.preventDefault();

  // get values to be submitted
  const timestamp = Date.now();
  const times = new Date().toLocaleString();
  const username = document.getElementById("form-name").value;
  if (username.length == 0) {
    alert('Silakan masukkan nama Anda.');
    return;
  }
  const presencetx = document.getElementById("form-presence");
  if (presencetx.value == "0") {
      alert('Silakan pilih status kehadiran Anda.');
      return;
  }
  const presence = presencetx.selectedIndex;

  const messageInput = document.getElementById("form-comment");
  if (messageInput.length == 0) {
    alert('Silakan masukkan Ucapan dan Doa.');
    return;
  }
  const message = messageInput.value;

  // clear the input box
  messageInput.value = "";

  //auto scroll to bottom
  document
    .getElementById("messages")
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  // create db collection and send in the data
  const ref = db.ref('messages').push({
      username,
      message,
      presence,
      timestamp,
      times,
  });

}

// display the messages
// reference the collection created earlier

const dbRef = firebase.database().ref('messages').orderByChild('timestamp');

// Array untuk menyimpan data yang sudah diambil
let dataArray = [];

// Menambahkan event listener untuk child_added
dbRef.on('child_added', (snapshot) => {
  const newData = snapshot.val();
  dataArray.push(newData);

  // Urutkan dataArray dari yang terbesar ke terkecil berdasarkan timestamp
  dataArray.sort((a, b) => b.timestamp - a.timestamp);
  
  // Batasi data menjadi 10 teratas
  const top10Data = dataArray.slice(0, 10);

  // Tampilkan data yang sudah diurutkan (misalnya, dalam sebuah elemen HTML)
  const dataListElement = document.getElementById('messages');
  dataListElement.innerHTML = ''; // Kosongkan daftar sebelum menambahkan data baru
  dataArray.forEach(data => {
        const message = `<div class="card-body bg-theme-dark shadow p-3 mx-0 mt-3 mb-3 rounded-4" data-parent="true" id="f2796cf6-cca7-4fd7-87f1-e974745ce1ab" style="
    margin-left: -30px;>
            <div id="body-content-f2796cf6-cca7-4fd7-87f1-e974745ce1ab" data-taptime="0" data-liked="false" ontouchend="like.tapTap(this)">
            
        <div class="d-flex flex-wrap justify-content-between align-items-center">
            <p class="text-light text-truncate m-0 p-0"><strong class="me-1">${data.username}</strong></p>
            <small class="text-light m-0 p-0" style="font-size: 0.75rem;">${data.times}.</small>
        </div>
        <hr class="text-light my-1">
        <p class="text-light mt-0 mb-1 mx-0 p-0" style="white-space: pre-wrap !important; 
        font-size: 0.95rem;" id="content-f2796cf6-cca7-4fd7-87f1-e974745ce1ab">${data.message}</p>
            </div>
            `;
            dataListElement.innerHTML += message;
  });
});


// const dbRef = firebase.database().ref('messages');

// Query untuk mengambil data dengan timestamp terbaru
// dbRef.orderByChild('timestamp').startAt().limitToLast(10).once('value', (snapshot) => {
//   snapshot.forEach((childSnapshot) => {
//     const data = childSnapshot.val();
    // const message = `<div class="card-body bg-theme-dark shadow p-3 mx-0 mt-3 mb-3 rounded-4" data-parent="true" id="f2796cf6-cca7-4fd7-87f1-e974745ce1ab" style="
    // margin-left: -30px;>
    //         <div id="body-content-f2796cf6-cca7-4fd7-87f1-e974745ce1ab" data-taptime="0" data-liked="false" ontouchend="like.tapTap(this)">
            
    //     <div class="d-flex flex-wrap justify-content-between align-items-center">
    //         <p class="text-light text-truncate m-0 p-0"><strong class="me-1">${data.username}</strong></p>
    //         <small class="text-light m-0 p-0" style="font-size: 0.75rem;">${data.times}.</small>
    //     </div>
    //     <hr class="text-light my-1">
    //     <p class="text-light mt-0 mb-1 mx-0 p-0" style="white-space: pre-wrap !important; 
    //     font-size: 0.95rem;" id="content-f2796cf6-cca7-4fd7-87f1-e974745ce1ab">${data.message}</p>
    //         </div>
    //         `;

  // append the message on the page
  // document.getElementById("messages").innerHTML += message;
  // });
// });


// const reFF = db.ref("messages/");

// reFF.on("child_added", function (snapshot) {
//   const messages = snapshot.val();

//    const message = `<div class="card-body bg-theme-dark shadow p-3 mx-0 mt-3 mb-3 rounded-4" data-parent="true" id="f2796cf6-cca7-4fd7-87f1-e974745ce1ab" style="
//     margin-left: -30px;>
//             <div id="body-content-f2796cf6-cca7-4fd7-87f1-e974745ce1ab" data-taptime="0" data-liked="false" ontouchend="like.tapTap(this)">
            
//         <div class="d-flex flex-wrap justify-content-between align-items-center">
//             <p class="text-light text-truncate m-0 p-0"><strong class="me-1">${messages.username}</strong></p>
//             <small class="text-light m-0 p-0" style="font-size: 0.75rem;">${messages.times}.</small>
//         </div>
//         <hr class="text-light my-1">
//         <p class="text-light mt-0 mb-1 mx-0 p-0" style="white-space: pre-wrap !important; 
//         font-size: 0.95rem;" id="content-f2796cf6-cca7-4fd7-87f1-e974745ce1ab">${messages.message}</p>
//             </div>
//             `;

//   // append the message on the page
//   document.getElementById("messages").innerHTML += message;
// });
