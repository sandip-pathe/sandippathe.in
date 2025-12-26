import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";

export interface Essay {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
}

// Generate URL-friendly slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Estimate reading time based on word count
export function estimateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

// Get current date in "Month Year" format
export function getCurrentDate(): string {
  const date = new Date();
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

// Fetch all essays from Firestore
export async function getEssays(): Promise<Essay[]> {
  try {
    const essaysRef = collection(db, "essays");
    const q = query(essaysRef, orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Essay[];
  } catch (error) {
    console.error("Error fetching essays:", error);
    return [];
  }
}

// Create new essay in Firestore
export async function createEssay(
  essayData: Omit<Essay, "id">
): Promise<Essay | null> {
  try {
    const essaysRef = collection(db, "essays");
    const docRef = await addDoc(essaysRef, essayData);

    return {
      id: docRef.id,
      ...essayData,
    };
  } catch (error) {
    console.error("Error creating essay:", error);
    return null;
  }
}

// Update existing essay in Firestore
export async function updateEssay(
  id: string,
  essayData: Partial<Omit<Essay, "id">>
): Promise<boolean> {
  try {
    const essayRef = doc(db, "essays", id);
    await updateDoc(essayRef, essayData);
    return true;
  } catch (error) {
    console.error("Error updating essay:", error);
    return false;
  }
}

// Delete essay from Firestore
export async function deleteEssay(id: string): Promise<boolean> {
  try {
    const essayRef = doc(db, "essays", id);
    await deleteDoc(essayRef);
    return true;
  } catch (error) {
    console.error("Error deleting essay:", error);
    return false;
  }
}
