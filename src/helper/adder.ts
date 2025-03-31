import { collection, addDoc } from "firebase/firestore";
import { FIREBASE_DB } from "../../firebaseConf";

export const addSectionsToFirestore = async (
  sections: any[],
  collectionName: string
) => {
  try {
    const collectionRef = collection(FIREBASE_DB, collectionName);
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
