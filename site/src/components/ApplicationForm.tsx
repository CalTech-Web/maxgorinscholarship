"use client";

import { useState } from "react";

export default function ApplicationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          _to: "FORM_RECEIVER_EMAIL",
          _subject: `New Scholarship Application from ${data.firstName} ${data.lastName}`,
          _from: "Max Gorin Scholarship",
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Application Submitted!</h3>
        <p className="text-green-700">Thank you for applying to the Max Gorin Scholarship. We will review your application and be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-section-bg rounded-2xl p-8 sm:p-10 shadow-sm space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-foreground/80 mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            placeholder="Your first name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-foreground/80 mb-2">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            placeholder="Your last name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="school" className="block text-sm font-medium text-foreground/80 mb-2">
          School / University <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="school"
          name="school"
          required
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          placeholder="Your school or university"
        />
      </div>

      <div>
        <label htmlFor="status" className="block text-sm font-medium text-foreground/80 mb-2">
          Current Status <span className="text-red-500">*</span>
        </label>
        <select
          id="status"
          name="status"
          required
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        >
          <option value="">Select your status</option>
          <option value="high-school-senior">High School Senior</option>
          <option value="undergraduate">Undergraduate Student</option>
          <option value="graduate">Graduate Student</option>
        </select>
      </div>

      <div>
        <label htmlFor="essay" className="block text-sm font-medium text-foreground/80 mb-2">
          Essay (400 words) <span className="text-red-500">*</span>
        </label>
        <p className="text-xs text-foreground/50 mb-2">
          &ldquo;Healthcare in America is a frequently debated topic. Do you believe an individual&apos;s ability to obtain higher education can impact their long-term quality of health? Why or why not?&rdquo;
        </p>
        <textarea
          id="essay"
          name="essay"
          required
          rows={10}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-y"
          placeholder="Write your 400-word essay here..."
        />
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
          Something went wrong. Please try again or email us at scholarship@maxgorinscholarship.com.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-accent-light hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
