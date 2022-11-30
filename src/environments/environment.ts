// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'cyberseek-app',
    appId: '1:855202081237:web:cacf013a5460a9e8e9b55c',
    databaseURL: 'https://cyberseek-app-default-rtdb.firebaseio.com',
    storageBucket: 'cyberseek-app.appspot.com',
    apiKey: 'AIzaSyAT94ktWjBIPx_a5KQl8VY_boCNBb0xvnE',
    authDomain: 'cyberseek-app.firebaseapp.com',
    messagingSenderId: '855202081237',
    measurementId: 'G-6KHD77LLER',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

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