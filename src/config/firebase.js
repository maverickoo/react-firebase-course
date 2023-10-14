import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHlAnp0kGvRJZk2P7ZPPrSdUWnaFiQeJo",
  authDomain: "fir-course-bf996.firebaseapp.com",
  projectId: "fir-course-bf996",
  storageBucket: "fir-course-bf996.appspot.com",
  messagingSenderId: "475212010694",
  appId: "1:475212010694:web:2000a80da5606c6bdbf3c7",
  measurementId: "G-CRQEX9GE4C",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
