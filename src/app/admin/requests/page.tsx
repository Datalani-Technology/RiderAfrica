"use client";
import { useEffect, useState } from "react";
import AdminBadge from "@/components/admin/AdminBadge";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import type { TripRecord } from "@/lib/firebase-admin";

const TYPES = ["All", "Local Parcel", "International", "Overseas", "Flight", "Transport", "Grocery", "Pawning"];

export default function AdminRequestsPage() {
  const [trips, setTrips] = useState<TripRecord[]>([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/requests").then(r => r.json()).then(data => { setTrips(data); setLoading(false); });
  }, []);

  const filtered = filter === "All" ? trips : trips.filter(t => t.type === filter);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {TYPES.map(t => (
          <button key={t} onClick={() => setFilter(t)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${filter === t ? "bg-[#0073FF] text-white" : "bg-[#0D1526] text-gray-400 border border-white/10 hover:text-white"}`}>
            {t}
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
                  <th className="px-4 py-3 text-left">ID</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Customer</th>
                  <th className="px-4 py-3 text-left">Driver</th>
                  <th className="px-4 py-3 text-left">Amount</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(t => (
                  <tr key={t.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="px-4 py-3 text-gray-500 font-mono text-xs">{t.id}</td>
                    <td className="px-4 py-3 text-gray-300">{t.type}</td>
                    <td className="px-4 py-3 text-white">{t.customer}</td>
                    <td className="px-4 py-3 text-gray-400">{t.driver}</td>
                    <td className="px-4 py-3 text-[#4DA6FF] font-bold">N$ {t.amount}</td>
                    <td className="px-4 py-3"><AdminBadge status={t.status} /></td>
                    <td className="px-4 py-3 text-gray-500">{new Date(t.createdAt).toLocaleDateString()}</td>
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
