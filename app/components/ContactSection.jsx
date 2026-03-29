"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  business: "",
  email: "",
  packageName: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage("Your message has been sent successfully.");
        setForm(initialForm);

        // ✅ Show WhatsApp option instead of auto-opening
        setShowWhatsApp(true);
      } else {
        setStatusMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="px-0 pb-24 pt-20">
      <div className="container-main grid gap-10 rounded-[2rem] border border-sky-400/20 bg-gradient-to-br from-slate-900 via-blue-950/50 to-slate-950 p-8 md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">
            Contact
          </div>

          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Ready to upgrade your business?
          </h2>

          <p className="mt-5 text-lg text-slate-300">
            Tell us about your requirement. We’ll guide you with the right solution.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="name"
              placeholder="Your name"
              className="input-ui"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              name="business"
              placeholder="Business name"
              className="input-ui"
              value={form.business}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="email"
              type="email"
              placeholder="Email address"
              className="input-ui"
              value={form.email}
              onChange={handleChange}
              required
            />

            <select
              name="packageName"
              className="input-ui bg-[#020617] text-white"
              value={form.packageName}
              onChange={handleChange}
              required
            >
              <option value="" className="bg-[#020617] text-white">Select package</option>
              <option value="Basic" className="bg-[#020617] text-white">Basic</option>
              <option value="Premium" className="bg-[#020617] text-white">Premium</option>
              <option value="Platinum" className="bg-[#020617] text-white">Platinum</option>
              <option value="Custom Software" className="bg-[#020617] text-white">Custom Software</option>
            </select>
          </div>

          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your requirement"
            className="input-ui"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="blue-button" disabled={loading}>
            {loading ? "Sending..." : "Send Inquiry"}
          </button>

          {statusMessage && (
            <p className="text-sm text-sky-300">{statusMessage}</p>
          )}

          {/* ✅ WhatsApp appears ONLY after success */}
          {showWhatsApp && (
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              target="_blank"
              className="mt-2 inline-block rounded-full bg-green-500 px-5 py-2 text-white font-semibold hover:bg-green-600"
            >
              Continue on WhatsApp
            </a>
          )}
        </form>
      </div>
    </section>
  );
}
