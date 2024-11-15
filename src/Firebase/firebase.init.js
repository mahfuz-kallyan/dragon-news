// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj88Tu1U8amkRCtJz3g0JdLoUFawO5JDQ",
  authDomain: "dragon-news-a58f7.firebaseapp.com",
  projectId: "dragon-news-a58f7",
  storageBucket: "dragon-news-a58f7.firebasestorage.app",
  messagingSenderId: "309857261578",
  appId: "1:309857261578:web:6f170510c5af3f4613e7f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;