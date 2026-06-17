"use client";
import { useEffect, useState } from "react";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import type { Notification } from "@/lib/firebase-admin";

export default function AdminNotificationsPage() {
  const [history, setHistory] = useState<Notification[]>([]);
  const [form, setForm] = useState({ title: "", body: "", target: "all" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    fetch("/api/admin/notifications").then(r => r.json()).then(setHistory);
  }, []);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const res = await fetch("/api/admin/notifications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setSent(true);
      setForm({ title: "", body: "", target: "all" });
      const updated = await fetch("/api/admin/notifications").then(r => r.json());
      setHistory(updated);
      setTimeout(() => setSent(false), 3000);
    }
    setSending(false);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Compose */}
      <div className="bg-[#0D1526] border border-white/5 rounded-2xl p-6">
        <h3 className="text-white font-bold mb-4">Send Push Notification</h3>
        <form onSubmit={send} className="space-y-4">
          <div>
            <label className="text-gray-400 text-xs block mb-1.5">Target Audience</label>
            <select value={form.target} onChange={e => setForm(p => ({ ...p, target: e.target.value }))}
              className="w-full bg-[#131C30] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#0073FF]">
              <option value="all">All Users</option>
              <option value="customers">Customers Only</option>
              <option value="drivers">Drivers Only</option>
            </select>
          </div>
          <div>
            <label className="text-gray-400 text-xs block mb-1.5">Title *</label>
            <input required value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))}
              className="w-full bg-[#131C30] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#0073FF]"
              placeholder="Notification title" />
          </div>
          <div>
            <label className="text-gray-400 text-xs block mb-1.5">Message *</label>
            <textarea required rows={4} value={form.body} onChange={e => setForm(p => ({ ...p, body: e.target.value }))}
              className="w-full bg-[#131C30] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#0073FF] resize-none"
              placeholder="Notification body" />
          </div>
          {sent && <p className="text-green-400 text-sm">Notification sent!</p>}
          <button type="submit" disabled={sending}
            className="w-full bg-[#0073FF] hover:bg-[#0055CC] disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-colors text-sm">
            {sending ? "Sending…" : "Send Notification"}
          </button>
        </form>
      </div>

      {/* History */}
      <div className="bg-[#0D1526] border border-white/5 rounded-2xl p-6">
        <h3 className="text-white font-bold mb-4">Notification History</h3>
        {history.length === 0 ? (
          <AdminEmptyState message="No notifications sent yet." />
        ) : (
          <div className="space-y-3">
            {history.map(n => (
              <div key={n.id} className="bg-[#131C30] border border-white/5 rounded-xl p-4">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-white font-semibold text-sm">{n.title}</p>
                  <span className="text-gray-600 text-xs shrink-0">{new Date(n.sentAt).toLocaleDateString()}</span>
                </div>
                <p className="text-gray-400 text-xs mt-1">{n.body}</p>
                <p className="text-gray-600 text-xs mt-1">Target: {n.target}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
