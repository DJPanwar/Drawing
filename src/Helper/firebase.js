// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr3Dd-aVOAC0iX3jXt3VdTdlR-SXyW79A",
  authDomain: "drawing-e3d1c.firebaseapp.com",
  projectId: "drawing-e3d1c",
  storageBucket: "drawing-e3d1c.appspot.com",
  messagingSenderId: "44775413596",
  appId: "1:44775413596:web:61dd9e6cf430cdaf265399",
  measurementId: "G-S2VNFW33M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export { auth, app };