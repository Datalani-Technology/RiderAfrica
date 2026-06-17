"use client";
import { useEffect, useState } from "react";
import type { PricingRecord } from "@/lib/firebase-admin";

export default function AdminPricingPage() {
  const [pricing, setPricing] = useState<PricingRecord[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/pricing").then(r => r.json()).then(data => { setPricing(data); setLoading(false); });
  }, []);

  const update = (id: string, field: "baseRate" | "perKm", value: number) => {
    setPricing(prev => prev.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const save = async () => {
    setSaving(true);
    await fetch("/api/admin/pricing", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pricing),
    });
    setSaved(true);
    setSaving(false);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {loading ? (
        <div className="p-8 text-center text-gray-500 text-sm">Loading…</div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {pricing.map(p => (
              <div key={p.id} className="bg-[#0D1526] border border-white/5 rounded-2xl p-5">
                <h3 className="text-white font-bold text-sm mb-4">{p.service}</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-gray-500 text-xs block mb-1">Base Rate ({p.currency})</label>
                    <input
                      type="number" min={0}
                      value={p.baseRate}
                      onChange={e => update(p.id, "baseRate", Number(e.target.value))}
                      className="w-full bg-[#131C30] border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-[#0073FF]"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs block mb-1">Per KM ({p.currency})</label>
                    <input
                      type="number" min={0} step={0.5}
                      value={p.perKm}
                      onChange={e => update(p.id, "perKm", Number(e.target.value))}
                      className="w-full bg-[#131C30] border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-[#0073FF]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={save} disabled={saving}
              className="px-6 py-2.5 bg-[#0073FF] hover:bg-[#0055CC] disabled:opacity-60 text-white font-bold rounded-xl text-sm transition-colors">
              {saving ? "Saving…" : "Save Pricing"}
            </button>
            {saved && <p className="text-green-400 text-sm">Saved!</p>}
          </div>
        </>
      )}
    </div>
  );
}
