  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBAJUE3cUfuLevk0bva_53Q2NxibIgWEio",
    authDomain: "prueba-firebase-abc0f.firebaseapp.com",
    projectId: "prueba-firebase-abc0f",
    storageBucket: "prueba-firebase-abc0f.appspot.com",
    messagingSenderId: "969887729540",
    appId: "1:969887729540:web:117fc4705594afa531ffd1",
    measurementId: "G-MV1ZL707WS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
