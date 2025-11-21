// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-9338V8f3E84LU8ns2_M6VfLASIjKATs",
  authDomain: "exam-project-2e816.firebaseapp.com",
  projectId: "exam-project-2e816",
  storageBucket: "exam-project-2e816.firebasestorage.app",
  messagingSenderId: "980085062140",
  appId: "1:980085062140:web:c7b07da946fe9f3851da79",
  measurementId: "G-4M6Z84ZEML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);