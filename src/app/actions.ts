"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // TODO: Implement actual email sending logic
  // For now, just log it (you can integrate with Resend, SendGrid, etc.)
  console.log("Contact form submission:", { name, email, message });

  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return { success: true, message: "Thank you! I'll get back to you soon." };
}
