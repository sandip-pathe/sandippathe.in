import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";

// Firebase configuration
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

// Essay interface
export interface Essay {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  createdAt?: number;
  updatedAt?: number;
}

// Collection reference
const ESSAYS_COLLECTION = "essays";

// Get all essays
export async function getEssays(): Promise<Essay[]> {
  try {
    const essaysRef = collection(db, ESSAYS_COLLECTION);
    const q = query(essaysRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Essay[];
  } catch (error) {
    console.error("Error fetching essays:", error);
    return [];
  }
}

// Get single essay by slug
export async function getEssayBySlug(slug: string): Promise<Essay | null> {
  try {
    const essays = await getEssays();
    return essays.find((e) => e.slug === slug) || null;
  } catch (error) {
    console.error("Error fetching essay:", error);
    return null;
  }
}

// Get single essay by ID
export async function getEssayById(id: string): Promise<Essay | null> {
  try {
    const docRef = doc(db, ESSAYS_COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Essay;
    }
    return null;
  } catch (error) {
    console.error("Error fetching essay:", error);
    return null;
  }
}

// Create new essay
export async function createEssay(
  essay: Omit<Essay, "id">
): Promise<Essay | null> {
  try {
    const essaysRef = collection(db, ESSAYS_COLLECTION);
    const now = Date.now();
    const docRef = await addDoc(essaysRef, {
      ...essay,
      createdAt: now,
      updatedAt: now,
    });

    return {
      id: docRef.id,
      ...essay,
      createdAt: now,
      updatedAt: now,
    };
  } catch (error) {
    console.error("Error creating essay:", error);
    return null;
  }
}

// Update existing essay
export async function updateEssay(
  id: string,
  essay: Partial<Essay>
): Promise<boolean> {
  try {
    const docRef = doc(db, ESSAYS_COLLECTION, id);
    await updateDoc(docRef, {
      ...essay,
      updatedAt: Date.now(),
    });
    return true;
  } catch (error) {
    console.error("Error updating essay:", error);
    return false;
  }
}

// Delete essay
export async function deleteEssay(id: string): Promise<boolean> {
  try {
    const docRef = doc(db, ESSAYS_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting essay:", error);
    return false;
  }
}

// Helper to generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Helper to estimate read time
export function estimateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Helper to get current month/year
export function getCurrentDate(): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const now = new Date();
  return `${months[now.getMonth()]} ${now.getFullYear()}`;
}

export { db };
