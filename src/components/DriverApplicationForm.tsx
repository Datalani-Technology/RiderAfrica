"use client";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Car, IdCard, FileText, Camera } from "lucide-react";

const docItems = [
  { Icon: Camera, label: "Clear photo of your vehicle (exterior, front + side)" },
  { Icon: IdCard, label: "Copy of your Namibian ID or Passport" },
  { Icon: Car, label: "Vehicle registration certificate" },
  { Icon: FileText, label: "Valid driver's licence (Code B or higher)" },
];

export default function DriverApplicationForm() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", vehicleType: "", city: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const body = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      subject: "Driver Partner Application",
      message: `Vehicle Type: ${form.vehicleType}\nCity / Town: ${form.city}${form.message ? `\n\nAdditional Info:\n${form.message}` : ""}\n\n---\nApplicant will email documents to registration@riderafrica.com`,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" strokeWidth={1.5} />
        <h3 className="text-2xl font-black text-green-800 mb-3">Application Received!</h3>
        <p className="text-green-700 mb-4">
          Thank you, <strong>{form.name}</strong>. We will review your application and contact you within 24 hours.
        </p>
        <div className="bg-green-100 rounded-2xl p-5 text-left">
          <p className="text-green-800 font-bold text-sm mb-3">Next step — email your documents to:</p>
          <a
            href="mailto:registration@riderafrica.com"
            className="text-[#0073FF] font-bold text-lg hover:underline"
          >
            registration@riderafrica.com
          </a>
          <ul className="mt-3 space-y-1">
            {docItems.map((d) => (
              <li key={d.label} className="flex items-center gap-2 text-green-700 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" strokeWidth={2} />
                {d.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
      {/* Personal info */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
          <input
            type="text" name="name" required
            value={form.name} onChange={handleChange}
            placeholder="Your full name"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0073FF] focus:ring-2 focus:ring-[#0073FF]/10 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone / WhatsApp *</label>
          <input
            type="tel" name="phone" required
            value={form.phone} onChange={handleChange}
            placeholder="+264 81 ..."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0073FF] focus:ring-2 focus:ring-[#0073FF]/10 transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
        <input
          type="email" name="email" required
          value={form.email} onChange={handleChange}
          placeholder="your@email.com"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0073FF] focus:ring-2 focus:ring-[#0073FF]/10 transition-all"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Vehicle Type *</label>
          <select
            name="vehicleType" required
            value={form.vehicleType} onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0073FF] focus:ring-2 focus:ring-[#0073FF]/10 transition-all text-gray-700"
          >
            <option value="">Select vehicle type</option>
            <option>Motorcycle</option>
            <option>Car (sedan / hatchback)</option>
            <option>SUV / Bakkie</option>
            <option>Van</option>
            <option>Truck</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">City / Town *</label>
          <input
            type="text" name="city" required
            value={form.city} onChange={handleChange}
            placeholder="e.g. Windhoek, Swakopmund..."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0073FF] focus:ring-2 focus:ring-[#0073FF]/10 transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Info (optional)</label>
        <textarea
          name="message"
          rows={3}
          value={form.message} onChange={handleChange}
          placeholder="Anything else you'd like us to know..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0073FF] focus:ring-2 focus:ring-[#0073FF]/10 transition-all resize-none"
        />
      </div>

      {/* Required documents notice */}
      <div className="bg-[#F4F7FF] border border-[#0073FF]/20 rounded-2xl p-5">
        <p className="text-sm font-bold text-gray-800 mb-3">
          Required documents — email after submitting:
          <a href="mailto:registration@riderafrica.com" className="text-[#0073FF] ml-1 font-bold">
            registration@riderafrica.com
          </a>
        </p>
        <ul className="space-y-2">
          {docItems.map((d) => (
            <li key={d.label} className="flex items-center gap-3 text-sm text-gray-600">
              <div className="w-7 h-7 bg-[#0073FF]/10 rounded-lg flex items-center justify-center shrink-0">
                <d.Icon className="w-4 h-4 text-[#0073FF]" strokeWidth={1.75} />
              </div>
              {d.label}
            </li>
          ))}
        </ul>
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again or WhatsApp us at +264 81 469 8594.</p>
      )}

      <p className="text-xs text-gray-400">
        By submitting you confirm you meet the stated requirements and agree to our{" "}
        <Link href="/terms" className="text-[#0073FF] underline">Terms & Conditions</Link>.
      </p>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#0073FF] hover:bg-[#0055CC] disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors btn-glow"
      >
        {status === "sending" ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}
