  //Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDSE3syxroAfuSFMPRlMzdGZ45uApN-W9k",
    authDomain: "mybook-9b191.firebaseapp.com",
    projectId: "mybook-9b191",
    storageBucket: "mybook-9b191.appspot.com",
    messagingSenderId: "442421738767",
    appId: "1:442421738767:web:91a6ba77aafba53aa7d27a",
    measurementId: "G-JCPGBGBBFJ"
  };
  //Initialize Firebase
  export const app = initializeApp(firebaseConfig);

// import { initializeApp } from "firebase/app";

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBWeR8UdEmK9aCGxKgBjaG0jK3euA4IWsw",
//   authDomain: "mydatabase-e2522.firebaseapp.com",
//   databaseURL: "https://mydatabase-e2522-default-rtdb.firebaseio.com",
//   projectId: "mydatabase-e2522",
//   storageBucket: "mydatabase-e2522.appspot.com",
//   messagingSenderId: "573847235209",
//   appId: "1:573847235209:web:76e5e4978f160c6a4e7458",
//   measurementId: "G-TYG933L2N7"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);