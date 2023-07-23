// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIYiaXo9fiTpRekyQIWaN9I_yjX4H9ySY",
  authDomain: "react-chat-9c675.firebaseapp.com",
  projectId: "react-chat-9c675",
  storageBucket: "react-chat-9c675.appspot.com",
  messagingSenderId: "296777058547",
  appId: "1:296777058547:web:9974ce055c58ca192a4f86",
  measurementId: "G-2F2R3LQ320",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
