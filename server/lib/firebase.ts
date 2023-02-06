// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwx3Tfu_ZZxb4Dq3EtRvL6oXUv_BV7_2s",
  authDomain: "zen-book-fcbff.firebaseapp.com",
  projectId: "zen-book-fcbff",
  storageBucket: "zen-book-fcbff.appspot.com",
  messagingSenderId: "425313256305",
  appId: "1:425313256305:web:47a65f4a8a041e9f2c2cd0"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);