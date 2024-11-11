import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZfpTIQn1IJhBAX9Z40CYTTg0abMcesgo",
    authDomain: "backend-ecommerce-8ddfe.firebaseapp.com",
    projectId: "backend-ecommerce-8ddfe",
    storageBucket: "backend-ecommerce-8ddfe.firebasestorage.app",
    messagingSenderId: "267781200697",
    appId: "1:267781200697:web:64ce7297c2d763e738a6e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);