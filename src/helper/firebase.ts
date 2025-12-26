import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYEX80EKn-Y35YUr_EWqC90gBXKEG-RNs",
  authDomain: "healthapp-cbb07.firebaseapp.com",
  projectId: "healthapp-cbb07",
  storageBucket: "healthapp-cbb07.firebasestorage.app",
  messagingSenderId: "1029095906682",
  appId: "1:1029095906682:web:d2ac4f5f08303fe748c2c8",
  measurementId: "G-LRGL7Z6CCG",
};

// Initialize Firebase (singleton pattern)
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
