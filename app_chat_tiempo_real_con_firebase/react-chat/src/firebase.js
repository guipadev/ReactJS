// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6Yotgyyeb7TmxdOwQqpXgp6aDEJjUtVs",
  authDomain: "chat-react-open.firebaseapp.com",
  projectId: "chat-react-open",
  storageBucket: "chat-react-open.appspot.com",
  messagingSenderId: "924286848623",
  appId: "1:924286848623:web:ae765e8cdebbae63c1479a",
  measurementId: "G-7E21LYQY0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);