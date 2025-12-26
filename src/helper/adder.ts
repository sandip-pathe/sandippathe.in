import { collection, addDoc, getFirestore } from "firebase/firestore";
import { initializeApp, getApps } from "firebase/app";

// Firebase configuration (reuse from firebase-essays)
const firebaseConfig = {
  apiKey: "AIzaSyC9l7CEXtrK8qtjTZWd2kV6GP3P4LUJM6U",
  authDomain: "healthapp-cbb07.firebaseapp.com",
  projectId: "healthapp-cbb07",
  storageBucket: "healthapp-cbb07.firebasestorage.app",
  messagingSenderId: "766606119808",
  appId: "1:766606119808:web:532dfa596f14f08410e765",
};

// Initialize Firebase (only once)
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export const addSectionsToFirestore = async (
  sections: any[],
  collectionName: string
) => {
  try {
    const collectionRef = collection(db, collectionName);
    const promises = sections.map(async (s) => {
      const docRef = await addDoc(collectionRef, s);
      console.log(`Added document with ID: ${docRef.id}`);
    });

    await Promise.all(promises);
    console.log("All sections added successfully");
  } catch (error) {
    console.error("Error adding sections to Firestore:", error);
  }
};
