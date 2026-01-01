"use server";

import { db } from "@/helper/firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  updateDoc,
  doc,
} from "firebase/firestore";

export interface Lead {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  createdAt: any;
  source: string;
  status: "new" | "contacted" | "qualified" | "converted" | "rejected";
}

export async function getLeads(limitCount: number = 50) {
  try {
    const leadsRef = collection(db, "automation-leads");
    const q = query(leadsRef, orderBy("createdAt", "desc"), limit(limitCount));
    const querySnapshot = await getDocs(q);

    const leads: Lead[] = [];
    querySnapshot.forEach((doc) => {
      leads.push({
        id: doc.id,
        ...doc.data(),
      } as Lead);
    });

    return { success: true, leads };
  } catch (error) {
    console.error("Error fetching leads:", error);
    return { success: false, leads: [], error: "Failed to fetch leads" };
  }
}

export async function updateLeadStatus(leadId: string, status: Lead["status"]) {
  try {
    const leadRef = doc(db, "automation-leads", leadId);
    await updateDoc(leadRef, { status });
    return { success: true };
  } catch (error) {
    console.error("Error updating lead status:", error);
    return { success: false, error: "Failed to update status" };
  }
}
