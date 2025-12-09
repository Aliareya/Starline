// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaSN5xAS0py2c_tQ8us4C41qM2GpJ_H1c",
  authDomain: "starline-ac446.firebaseapp.com",
  projectId: "starline-ac446",
  storageBucket: "starline-ac446.firebasestorage.app",
  messagingSenderId: "196485638678",
  appId: "1:196485638678:web:e06fa5a7e0708602946337",
  measurementId: "G-X0S1946LYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);