import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAcjqapQz5J0PK_pOAMo6N0m0h8_9x8bLA",
  authDomain: "petmatch-d82cc.firebaseapp.com",
  projectId: "petmatch-d82cc",
  storageBucket: "petmatch-d82cc.appspot.com",
  messagingSenderId: "3352181963",
  appId: "1:3352181963:web:c54ed513b6172363802f4e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

//Entrar con correo
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
//Aquí definimos como se va a crear el user
const register = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    //campos que tendrá la cuenta en sí
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name: name,
      email: email,
      perfiles_asoc: [], //usuarios de los cual el usuario controla los medicamentos
      medicinas_asoc: [], //medicinas custom que agregue el usuario
      sexo: null,
      sangre: null,
      notas: null,
    });
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset link sent!");
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
//signout normal
const logout = () => {
  signOut(auth);
};
export { login, register, sendPasswordReset, logout };
