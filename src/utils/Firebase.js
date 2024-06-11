// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy8MWnodBazqZz9SVuBzOAkIw3zP50UCc",
  authDomain: "netflixgpt-25ca4.firebaseapp.com",
  projectId: "netflixgpt-25ca4",
  storageBucket: "netflixgpt-25ca4.appspot.com",
  messagingSenderId: "481855980905",
  appId: "1:481855980905:web:0960780db7237355b9a9f8",
  measurementId: "G-XPTZRPB5CV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
