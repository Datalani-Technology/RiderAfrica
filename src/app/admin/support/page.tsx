"use client";
import { useEffect, useState } from "react";
import AdminBadge from "@/components/admin/AdminBadge";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import type { SupportTicket } from "@/lib/firebase-admin";

export default function AdminSupportPage() {
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [tab, setTab] = useState<"customer" | "customs">("customer");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using the trip requests endpoint as placeholder — wired to Firebase later
    setTimeout(() => {
      setTickets([
        { id: "s1", user: "Amara Nkosi", type: "customer", subject: "Package not arrived", status: "open", createdAt: new Date().toISOString() },
        { id: "s2", user: "Cargo Co.", type: "customs", subject: "Import clearance query", status: "open", createdAt: new Date().toISOString() },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const filtered = tickets.filter(t => t.type === tab);

  const resolve = (id: string) => setTickets(prev => prev.map(t => t.id === id ? { ...t, status: "resolved" } : t));

  return (
    <div className="space-y-5">
      <div className="flex gap-2">
        {(["customer", "customs"] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-full text-sm font-semibold capitalize transition-all ${tab === t ? "bg-[#0073FF] text-white" : "bg-[#0D1526] text-gray-400 border border-white/10 hover:text-white"}`}>
            {t === "customer" ? "Customer Support" : "Customs Agents"}
          </button>
        ))}
      </div>

      <div className="bg-[#0D1526] border border-white/5 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500 text-sm">Loading…</div>
        ) : filtered.length === 0 ? (
          <AdminEmptyState message="No open tickets in this queue." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5 text-gray-500 text-xs uppercase tracking-wide">
                  <th className="px-4 py-3 text-left">User</th>
                  <th className="px-4 py-3 text-left">Subject</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(t => (
                  <tr key={t.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="px-4 py-3 text-white">{t.user}</td>
                    <td className="px-4 py-3 text-gray-300">{t.subject}</td>
                    <td className="px-4 py-3"><AdminBadge status={t.status} /></td>
                    <td className="px-4 py-3 text-gray-500">{new Date(t.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      {t.status === "open" && (
                        <button onClick={() => resolve(t.id)} className="text-xs text-green-400 hover:underline">Resolve</button>
                      )}
                    </td>
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
