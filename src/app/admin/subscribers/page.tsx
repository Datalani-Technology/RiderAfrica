"use client";
import { useEffect, useState } from "react";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import type { Subscriber } from "@/lib/firebase-admin";

export default function AdminSubscribersPage() {
  const [subs, setSubs] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/subscribers").then(r => r.json()).then(data => { setSubs(data); setLoading(false); });
  }, []);

  const exportCsv = () => {
    const rows = [["Email", "Subscribed At"], ...subs.map(s => [s.email, s.subscribedAt])];
    const blob = new Blob([rows.map(r => r.join(",")).join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "subscribers.csv"; a.click();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-gray-400 text-sm">{subs.length} subscriber{subs.length !== 1 ? "s" : ""}</p>
        {subs.length > 0 && (
          <button onClick={exportCsv} className="px-3 py-1.5 bg-[#0D1526] border border-white/10 rounded-xl text-xs text-gray-300 hover:text-white hover:border-[#0073FF]/40 transition-all">
            Export CSV
          </button>
        )}
      </div>

      <div className="bg-[#0D1526] border border-white/5 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500 text-sm">Loading…</div>
        ) : subs.length === 0 ? (
          <AdminEmptyState message="No subscribers yet." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5 text-gray-500 text-xs uppercase tracking-wide">
                  <th className="px-4 py-3 text-left">#</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Subscribed</th>
                </tr>
              </thead>
              <tbody>
                {subs.map((s, i) => (
                  <tr key={s.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="px-4 py-3 text-gray-600">{i + 1}</td>
                    <td className="px-4 py-3 text-white">{s.email}</td>
                    <td className="px-4 py-3 text-gray-500">{new Date(s.subscribedAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
