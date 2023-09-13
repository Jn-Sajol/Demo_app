// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTqn5Uc3TCoUNKh7Q0yWwbzWZI8JLHpPA",
  authDomain: "fir-app-f968f.firebaseapp.com",
  projectId: "fir-app-f968f",
  storageBucket: "fir-app-f968f.appspot.com",
  messagingSenderId: "566474209231",
  appId: "1:566474209231:web:42a84d06ea05fa728604ba",
  measurementId: "G-Z0BT5NN0M7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };
