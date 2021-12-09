import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBHI-Ukc_AYeg98UrF8Y-pttSUcqGLDrzk",
  authDomain: "disney-plus-clone-ee35a.firebaseapp.com",
  projectId: "disney-plus-clone-ee35a",
  storageBucket: "disney-plus-clone-ee35a.appspot.com",
  messagingSenderId: "1086789338282",
  appId: "1:1086789338282:web:ecf4bc624912fbf1b87cd3",
  measurementId: "G-76T6W44334",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
