"use client";
import { useEffect, useState } from "react";
import AdminBadge from "@/components/admin/AdminBadge";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import type { PawningSubmission } from "@/lib/firebase-admin";

export default function AdminPawningPage() {
  const [items, setItems] = useState<PawningSubmission[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setItems([
        { id: "pw1", customer: "Festus Mwangi", itemType: "Laptop", estimatedValue: 8000, status: "pending", submittedAt: new Date().toISOString() },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const filtered = filter === "all" ? items : items.filter(i => i.status === filter);

  return (
    <div className="space-y-5">
      <div className="flex gap-2">
        {["all", "pending", "reviewed", "rejected"].map(s => (
          <button key={s} onClick={() => setFilter(s)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-all ${filter === s ? "bg-[#0073FF] text-white" : "bg-[#0D1526] text-gray-400 border border-white/10 hover:text-white"}`}>
            {s}
          </button>
        ))}
      </div>

      <div className="bg-[#0D1526] border border-white/5 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500 text-sm">Loading…</div>
        ) : filtered.length === 0 ? (
          <AdminEmptyState />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5 text-gray-500 text-xs uppercase tracking-wide">
                  <th className="px-4 py-3 text-left">Customer</th>
                  <th className="px-4 py-3 text-left">Item</th>
                  <th className="px-4 py-3 text-left">Est. Value</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Submitted</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(p => (
                  <tr key={p.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="px-4 py-3 text-white">{p.customer}</td>
                    <td className="px-4 py-3 text-gray-300">{p.itemType}</td>
                    <td className="px-4 py-3 text-[#4DA6FF] font-bold">N$ {p.estimatedValue.toLocaleString()}</td>
                    <td className="px-4 py-3"><AdminBadge status={p.status} /></td>
                    <td className="px-4 py-3 text-gray-500">{new Date(p.submittedAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3 flex gap-2">
                      {p.status === "pending" && (
                        <>
                          <button onClick={() => setItems(prev => prev.map(x => x.id === p.id ? { ...x, status: "reviewed" } : x))}
                            className="text-xs text-green-400 hover:underline">Review</button>
                          <button onClick={() => setItems(prev => prev.map(x => x.id === p.id ? { ...x, status: "rejected" } : x))}
                            className="text-xs text-red-400 hover:underline">Reject</button>
                        </>
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
