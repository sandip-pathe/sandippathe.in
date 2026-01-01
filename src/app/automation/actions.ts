"use server";

import { db } from "@/helper/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // Save to Firestore
    const docRef = await addDoc(collection(db, "automation-leads"), {
      ...data,
      createdAt: serverTimestamp(),
      source: "automation-landing-page",
      status: "new",
    });

    // Send email notification
    try {
      await resend.emails.send({
        from: "Automation Leads <onboarding@resend.dev>",
        to: ["sandippathe9689@gmail.com"],
        subject: `🔔 New Automation Lead: ${data.name} from ${
          data.company || "Unknown"
        }`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Automation Lead Submission</h2>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${
                data.email
              }">${data.email}</a></p>
              <p style="margin: 10px 0;"><strong>Company:</strong> ${
                data.company || "Not provided"
              }</p>
              <p style="margin: 10px 0;"><strong>Workflow/Message:</strong><br/>${
                data.message || "No message provided"
              }</p>
            </div>
            
            <div style="margin: 20px 0;">
              <p><strong>Lead ID:</strong> ${docRef.id}</p>
              <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <a href="https://sandippathe.in/automation/admin" 
                 style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                View in Admin Dashboard
              </a>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Email notification failed:", emailError);
      // Don't fail the form submission if email fails
    }

    return {
      success: true,
      id: docRef.id,
      message: "Thanks! I'll get back to you within 2 hours.",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      error: "Failed to submit form. Please try again.",
    };
  }
}
