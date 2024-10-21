import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDCeDGg3XqMZaMQG8wcJpQrDJZ4xBsUHjA",
    authDomain: "practise-c5ff7.firebaseapp.com",
    projectId: "practise-c5ff7",
    storageBucket: "practise-c5ff7.appspot.com",
    messagingSenderId: "325761461700",
    appId: "1:325761461700:web:b1bb53ddab24b49a60c891",
    measurementId: "G-9DVZR1SZJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };