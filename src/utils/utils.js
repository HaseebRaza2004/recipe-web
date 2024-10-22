import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCwxVcJaC52-yUFDXwH-nLBw90bauS0K6I",
    authDomain: "e-commerce-web---shoplife.firebaseapp.com",
    projectId: "e-commerce-web---shoplife",
    storageBucket: "e-commerce-web---shoplife.appspot.com",
    messagingSenderId: "508774774692",
    appId: "1:508774774692:web:5afd2e8821c9caaa4b7331",
    measurementId: "G-KN8CXYW08M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };