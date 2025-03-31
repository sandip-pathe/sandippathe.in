import { initializeApp } from "firebase/app";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  collection,
  getDocs,
  query,
  Firestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9l7CEXtrK8qtjTZWd2kV6GP3P4LUJM6U",
  authDomain: "healthapp-cbb07.firebaseapp.com",
  projectId: "healthapp-cbb07",
  storageBucket: "healthapp-cbb07.firebasestorage.app",
  messagingSenderId: "766606119808",
  appId: "1:766606119808:web:532dfa596f14f08410e765",
};

const FIREBASE_APP = initializeApp(firebaseConfig);

let FIREBASE_DB: Firestore;

try {
  FIREBASE_DB = initializeFirestore(FIREBASE_APP, {
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager(),
    }),
  });
  console.log("🔥 Firestore initialized with persistence");
} catch (err) {
  if ((err as { code: string }).code === "failed-precondition") {
    console.error("Persistence failed: Multiple tabs open.", err);
  } else if ((err as { code: string }).code === "unimplemented") {
    console.error(
      "Persistence failed: Browser does not support persistence.",
      err
    );
  } else {
    console.error("Persistence failed:", err);
  }
}

export { FIREBASE_DB };

export async function fetchData(collectionName: string) {
  try {
    if (!FIREBASE_DB) {
      throw new Error("Firestore is not initialized.");
    }
    const querySnapshot = await getDocs(
      collection(FIREBASE_DB, collectionName)
    );
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    return [];
  }
}
