import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "e-commerce-game-over.firebaseapp.com",
  projectId: "e-commerce-game-over",
  storageBucket: "e-commerce-game-over.appspot.com",
  messagingSenderId: "498209877241",
  appId: "1:498209877241:web:02eb62d66eed402d864628",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
