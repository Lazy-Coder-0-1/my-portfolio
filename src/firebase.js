// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS6bPct5HjENfZeKB227qwPpNwJaBLy0g",
  authDomain: "devakinandagopal-portfolio.firebaseapp.com",
  projectId: "devakinandagopal-portfolio",
  storageBucket: "devakinandagopal-portfolio.firebasestorage.app",
  messagingSenderId: "987304823573",
  appId: "1:987304823573:web:42605969c2f513d5a7371c",
  measurementId: "G-TEL9E81JEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);