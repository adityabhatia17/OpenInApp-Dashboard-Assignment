import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOQmMIGssufd4FZ7AJpcaN07qeDcTQ-wE",
  authDomain: "openinapp-dashboard-assignment.firebaseapp.com",
  projectId: "openinapp-dashboard-assignment",
  storageBucket: "openinapp-dashboard-assignment.appspot.com",
  messagingSenderId: "116305397457",
  appId: "1:116305397457:web:6f91fb4f43c6dda5ece7f0",
  measurementId: "G-4BWVGWQBXL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, doc, setDoc };
