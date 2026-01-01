"use client";

import { useState } from "react";
import { submitContactForm } from "./actions";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const workflow = formData.get("workflow") as string;
    const otherMessage = formData.get("message") as string;
    const message = otherMessage || workflow;

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: (formData.get("company") as string) || undefined,
      message: message,
    };

    const result = await submitContactForm(data);

    if (result.success) {
      setSubmitStatus({
        type: "success",
        message:
          result.message || "Thanks! I'll get back to you within 2 hours.",
      });
      (e.target as HTMLFormElement).reset();
    } else {
      setSubmitStatus({
        type: "error",
        message: result.error || "Something went wrong. Please try again.",
      });
    }

    setIsSubmitting(false);
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-slate-900 mb-4">
        Or Send a Message
      </h3>
      <p className="text-slate-600 mb-6">
        Prefer email? Fill this out and I&apos;ll respond within 2 hours (during
        business hours).
      </p>

      {submitStatus.type === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
          {submitStatus.message}
        </div>
      )}

      {submitStatus.type === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {submitStatus.message}
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-slate-700 mb-2"
          >
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-slate-700 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-slate-700 mb-2"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your Startup"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Which workflow is your biggest time drain? *
          </label>
          <div className="space-y-2 mb-4">
            <label className="flex items-center gap-2 p-3 border border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer">
              <input
                type="radio"
                name="workflow"
                value="Invoice/expense processing"
                className="w-4 h-4 text-blue-600"
                required
              />
              <span className="text-slate-700">Invoice/expense processing</span>
            </label>
            <label className="flex items-center gap-2 p-3 border border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer">
              <input
                type="radio"
                name="workflow"
                value="Lead qualification & CRM updates"
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-slate-700">
                Lead qualification & CRM updates
              </span>
            </label>
            <label className="flex items-center gap-2 p-3 border border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer">
              <input
                type="radio"
                name="workflow"
                value="Meeting notes & action items"
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-slate-700">
                Meeting notes & action items
              </span>
            </label>
            <label className="flex items-center gap-2 p-3 border border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer">
              <input
                type="radio"
                name="workflow"
                value="Customer data consolidation"
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-slate-700">
                Customer data consolidation
              </span>
            </label>
            <label className="flex items-center gap-2 p-3 border border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer">
              <input
                type="radio"
                name="workflow"
                value="Email/Slack triage"
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-slate-700">Email/Slack triage</span>
            </label>
          </div>
          <input
            type="text"
            name="message"
            placeholder="Other (please specify)..."
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
