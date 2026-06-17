"use client";
import { useEffect, useState } from "react";
import AdminBadge from "@/components/admin/AdminBadge";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import type { WithdrawalRecord } from "@/lib/firebase-admin";

export default function AdminWithdrawalsPage() {
  const [items, setItems] = useState<WithdrawalRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/withdrawals").then(r => r.json()).then(data => { setItems(data); setLoading(false); });
  }, []);

  const action = async (id: string, act: "approved" | "rejected") => {
    await fetch("/api/admin/withdrawals", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, action: act }) });
    setItems(prev => prev.map(w => w.id === id ? { ...w, status: act } : w));
  };

  return (
    <div className="bg-[#0D1526] border border-white/5 rounded-2xl overflow-hidden">
      {loading ? (
        <div className="p-8 text-center text-gray-500 text-sm">Loading…</div>
      ) : items.length === 0 ? (
        <AdminEmptyState message="No pending withdrawal requests." />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 text-gray-500 text-xs uppercase tracking-wide">
                <th className="px-4 py-3 text-left">Driver</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Bank</th>
                <th className="px-4 py-3 text-left">Trips</th>
                <th className="px-4 py-3 text-left">Balance</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Requested</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(w => (
                <tr key={w.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                  <td className="px-4 py-3 text-white">{w.driver}</td>
                  <td className="px-4 py-3 text-[#4DA6FF] font-bold">N$ {w.amount.toLocaleString()}</td>
                  <td className="px-4 py-3 text-gray-400">{w.bank}</td>
                  <td className="px-4 py-3 text-gray-400">{w.trips}</td>
                  <td className="px-4 py-3 text-gray-300">N$ {w.balance.toLocaleString()}</td>
                  <td className="px-4 py-3"><AdminBadge status={w.status} /></td>
                  <td className="px-4 py-3 text-gray-500">{new Date(w.requestedAt).toLocaleDateString()}</td>
                  <td className="px-4 py-3 flex gap-2">
                    {w.status === "pending" && (
                      <>
                        <button onClick={() => action(w.id, "approved")} className="text-xs text-green-400 hover:underline">Approve</button>
                        <button onClick={() => action(w.id, "rejected")} className="text-xs text-red-400 hover:underline">Reject</button>
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
  );
}
