// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import "firebase/firestore";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIkcKQdwfEhPggBdkhIlCuGpKyL4vMjyE",
  authDomain: "naldccam-6ae51.firebaseapp.com",
  projectId: "naldccam-6ae51",
  storageBucket: "naldccam-6ae51.appspot.com",
  messagingSenderId: "152287355889",
  appId: "1:152287355889:web:544f51db43bdc92b1ada50",
  measurementId: "G-028X1Y4XGT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */


const db = getFirestore(app);

// Initializing the data base
export { db };

// Firebase storage reference
const storage = getStorage (app);


export default storage;