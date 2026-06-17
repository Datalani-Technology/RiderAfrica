"use client";
import { useEffect, useState } from "react";
import type { Settings } from "@/lib/firebase-admin";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [areaInput, setAreaInput] = useState("");

  useEffect(() => {
    fetch("/api/admin/settings").then(r => r.json()).then(setSettings);
  }, []);

  const save = async () => {
    if (!settings) return;
    setSaving(true);
    await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
    setSaved(true);
    setSaving(false);
    setTimeout(() => setSaved(false), 3000);
  };

  const addArea = () => {
    if (!areaInput.trim() || !settings) return;
    setSettings(s => s ? { ...s, serviceAreas: [...s.serviceAreas, areaInput.trim()] } : s);
    setAreaInput("");
  };

  const removeArea = (area: string) => {
    setSettings(s => s ? { ...s, serviceAreas: s.serviceAreas.filter(a => a !== area) } : s);
  };

  if (!settings) return <div className="p-8 text-center text-gray-500 text-sm">Loading…</div>;

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Registration codes */}
      <div className="bg-[#0D1526] border border-white/5 rounded-2xl p-6 space-y-4">
        <h3 className="text-white font-bold">Registration Codes</h3>
        <div>
          <label className="text-gray-400 text-xs block mb-1.5">Customs Agent Registration Code</label>
          <input value={settings.registrationCodeCustomsAgent}
            onChange={e => setSettings(s => s ? { ...s, registrationCodeCustomsAgent: e.target.value } : s)}
            className="w-full bg-[#131C30] border border-white/10 rounded-xl px-4 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-[#0073FF]" />
        </div>
        <div>
          <label className="text-gray-400 text-xs block mb-1.5">Customer Support Registration Code</label>
          <input value={settings.registrationCodeSupport}
            onChange={e => setSettings(s => s ? { ...s, registrationCodeSupport: e.target.value } : s)}
            className="w-full bg-[#131C30] border border-white/10 rounded-xl px-4 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-[#0073FF]" />
        </div>
      </div>

      {/* Service areas */}
      <div className="bg-[#0D1526] border border-white/5 rounded-2xl p-6">
        <h3 className="text-white font-bold mb-4">Service Areas</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {settings.serviceAreas.map(a => (
            <span key={a} className="flex items-center gap-1.5 bg-[#131C30] border border-white/10 rounded-full px-3 py-1 text-xs text-gray-300">
              {a}
              <button onClick={() => removeArea(a)} className="text-gray-600 hover:text-red-400 transition-colors">✕</button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input value={areaInput} onChange={e => setAreaInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && addArea()}
            className="flex-1 bg-[#131C30] border border-white/10 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-[#0073FF]"
            placeholder="Add city / town…" />
          <button onClick={addArea} className="px-4 py-2 bg-[#0073FF]/20 hover:bg-[#0073FF]/40 border border-[#0073FF]/30 rounded-xl text-[#4DA6FF] text-sm transition-all">
            Add
          </button>
        </div>
      </div>

      {/* Platform toggle */}
      <div className="bg-[#0D1526] border border-white/5 rounded-2xl p-6 flex items-center justify-between">
        <div>
          <h3 className="text-white font-bold">Platform Status</h3>
          <p className="text-gray-500 text-xs mt-1">Toggle the entire platform on or off.</p>
        </div>
        <button
          onClick={() => setSettings(s => s ? { ...s, platformActive: !s.platformActive } : s)}
          className={`w-12 h-6 rounded-full transition-colors relative ${settings.platformActive ? "bg-green-500" : "bg-gray-600"}`}
        >
          <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${settings.platformActive ? "left-6" : "left-0.5"}`} />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={save} disabled={saving}
          className="px-6 py-2.5 bg-[#0073FF] hover:bg-[#0055CC] disabled:opacity-60 text-white font-bold rounded-xl text-sm transition-colors">
          {saving ? "Saving…" : "Save Settings"}
        </button>
        {saved && <p className="text-green-400 text-sm">Settings saved!</p>}
      </div>
    </div>
  );
}
