import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvucJW9UrRAMmdYJY-4cQZiIOHzsH-zZM",
  authDomain: "petmatch-d9728.firebaseapp.com",
  projectId: "petmatch-d9728",
  storageBucket: "petmatch-d9728.appspot.com",
  messagingSenderId: "66244554481",
  appId: "1:66244554481:web:761f2c73bc0648c86a0350",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore();
const auth = getAuth();
export { database, auth };
