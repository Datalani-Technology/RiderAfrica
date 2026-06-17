"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("ra_cookie_consent")) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("ra_cookie_consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-[#0D1526] border border-[#0073FF]/30 rounded-2xl shadow-[0_8px_32px_rgba(0,115,255,0.2)] p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <span className="text-xl shrink-0">🍪</span>
        <p className="text-sm text-gray-300 flex-1">
          We use cookies to improve your experience. By continuing you agree to our{" "}
          <Link href="/privacy" className="text-[#4DA6FF] underline">Privacy Policy</Link>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={() => setVisible(false)} className="text-sm text-gray-500 hover:text-white px-4 py-2 transition-colors">
            Decline
          </button>
          <button onClick={accept} className="bg-[#0073FF] hover:bg-[#0055CC] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors btn-glow">
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
