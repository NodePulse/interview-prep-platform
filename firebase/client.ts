import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFd1UyRyracDIwVECr-IkwL8Bks_DMJgM",
  authDomain: "aceflow-304cc.firebaseapp.com",
  projectId: "aceflow-304cc",
  storageBucket: "aceflow-304cc.firebasestorage.app",
  messagingSenderId: "57228765266",
  appId: "1:57228765266:web:0a43971332e9d7189d978b",
  measurementId: "G-QYFX9NGJWM",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
