// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoEoKa1sd5DoKqvSAJdr-P4Vwll1HPO68",
    authDomain: "yummy-tummy-cook-book.firebaseapp.com",
    projectId: "yummy-tummy-cook-book",
    storageBucket: "yummy-tummy-cook-book.appspot.com",
    messagingSenderId: "752323727264",
    appId: "1:752323727264:web:e064adb034460dc2855ec5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;