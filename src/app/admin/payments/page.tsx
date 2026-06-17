"use client";
import { useEffect, useState } from "react";
import AdminBadge from "@/components/admin/AdminBadge";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import type { PaymentRecord } from "@/lib/firebase-admin";

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/payments").then(r => r.json()).then(data => { setPayments(data); setLoading(false); });
  }, []);

  const action = async (id: string, act: "confirmed" | "rejected") => {
    await fetch("/api/admin/payments", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, action: act }) });
    setPayments(prev => prev.map(p => p.id === id ? { ...p, status: act } : p));
  };

  return (
    <div className="bg-[#0D1526] border border-white/5 rounded-2xl overflow-hidden">
      {loading ? (
        <div className="p-8 text-center text-gray-500 text-sm">Loading…</div>
      ) : payments.length === 0 ? (
        <AdminEmptyState message="No pending payments." />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 text-gray-500 text-xs uppercase tracking-wide">
                <th className="px-4 py-3 text-left">Customer</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Method</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(p => (
                <tr key={p.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                  <td className="px-4 py-3 text-white">{p.customer}</td>
                  <td className="px-4 py-3 text-[#4DA6FF] font-bold">N$ {p.amount}</td>
                  <td className="px-4 py-3 text-gray-400">{p.method}</td>
                  <td className="px-4 py-3"><AdminBadge status={p.status} /></td>
                  <td className="px-4 py-3 text-gray-500">{new Date(p.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-3 flex gap-2">
                    {p.status === "pending" && (
                      <>
                        <button onClick={() => action(p.id, "confirmed")} className="text-xs text-green-400 hover:underline">Confirm</button>
                        <button onClick={() => action(p.id, "rejected")} className="text-xs text-red-400 hover:underline">Reject</button>
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
