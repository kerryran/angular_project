export const environment = {
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT94ktWjBIPx_a5KQl8VY_boCNBb0xvnE",
  authDomain: "cyberseek-app.firebaseapp.com",
  databaseURL: "https://cyberseek-app-default-rtdb.firebaseio.com",
  projectId: "cyberseek-app",
  storageBucket: "cyberseek-app.appspot.com",
  messagingSenderId: "855202081237",
  appId: "1:855202081237:web:cacf013a5460a9e8e9b55c",
  measurementId: "G-6KHD77LLER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);