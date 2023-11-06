  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
  const firebaseConfig = {
    apiKey: "AIzaSyDSE3syxroAfuSFMPRlMzdGZ45uApN-W9k",
    authDomain: "mybook-9b191.firebaseapp.com",
    projectId: "mybook-9b191",
    storageBucket: "mybook-9b191.appspot.com",
    messagingSenderId: "442421738767",
    appId: "1:442421738767:web:91a6ba77aafba53aa7d27a",
    measurementId: "G-JCPGBGBBFJ"
  };
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);