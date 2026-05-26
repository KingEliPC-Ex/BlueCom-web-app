// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKgkSlUYAFh4jc8CJZutHyRM5gjWkKHPc",
  authDomain: "bluecom-web-app.firebaseapp.com",
  projectId: "bluecom-web-app",
  storageBucket: "bluecom-web-app.firebasestorage.app",
  messagingSenderId: "1013107139525",
  appId: "1:1013107139525:web:4e6b3162b260b70954a1ac",
  measurementId: "G-R7P62ZF6EZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
