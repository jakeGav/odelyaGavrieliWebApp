// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP_N6HeS4y0LMkxrhurtjGD_gTSJ34odg",
  authDomain: "odelyagavrieli-479dd.firebaseapp.com",
  projectId: "odelyagavrieli-479dd",
  storageBucket: "odelyagavrieli-479dd.appspot.com",
  messagingSenderId: "815865012472",
  appId: "1:815865012472:web:50f64d9e102c95af909b0d",
  measurementId: "G-CY7020LFPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);