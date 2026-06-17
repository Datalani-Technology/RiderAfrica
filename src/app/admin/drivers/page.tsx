"use client";
import { useEffect, useState } from "react";
import AdminBadge from "@/components/admin/AdminBadge";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import AdminModal from "@/components/admin/AdminModal";
import type { DriverRecord } from "@/lib/firebase-admin";

export default function AdminDriversPage() {
  const [drivers, setDrivers] = useState<DriverRecord[]>([]);
  const [modal, setModal] = useState<{ open: boolean; driver: DriverRecord | null }>({ open: false, driver: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/drivers").then(r => r.json()).then(data => { setDrivers(data); setLoading(false); });
  }, []);

  const action = async (id: string, act: string) => {
    await fetch("/api/admin/drivers", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, action: act }) });
    setDrivers(prev => prev.map(d =>
      d.id === id
        ? { ...d, verificationStatus: act === "approve" ? "approved" : d.verificationStatus, status: act === "suspend" ? "suspended" : d.status }
        : d
    ));
    setModal({ open: false, driver: null });
  };

  return (
    <div className="space-y-5">
      <div className="bg-[#0D1526] border border-white/5 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500 text-sm">Loading…</div>
        ) : drivers.length === 0 ? (
          <AdminEmptyState />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5 text-gray-500 text-xs uppercase tracking-wide">
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Vehicle</th>
                  <th className="px-4 py-3 text-left">City</th>
                  <th className="px-4 py-3 text-left">Trips</th>
                  <th className="px-4 py-3 text-left">Verification</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map(d => (
                  <tr key={d.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="px-4 py-3 text-white font-medium">{d.name}</td>
                    <td className="px-4 py-3 text-gray-400">{d.vehicle}</td>
                    <td className="px-4 py-3 text-gray-400">{d.city}</td>
                    <td className="px-4 py-3 text-gray-300">{d.trips}</td>
                    <td className="px-4 py-3"><AdminBadge status={d.verificationStatus} /></td>
                    <td className="px-4 py-3"><AdminBadge status={d.status} /></td>
                    <td className="px-4 py-3 flex items-center gap-2">
                      <button onClick={() => setModal({ open: true, driver: d })} className="text-xs text-[#4DA6FF] hover:underline">View</button>
                      {d.verificationStatus === "pending" && (
                        <button onClick={() => action(d.id, "approve")} className="text-xs text-green-400 hover:underline">Approve</button>
                      )}
                      {d.status === "active" && (
                        <button onClick={() => action(d.id, "suspend")} className="text-xs text-yellow-400 hover:underline">Suspend</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <AdminModal open={modal.open} title="Driver Details" onClose={() => setModal({ open: false, driver: null })}>
        {modal.driver && (
          <dl className="space-y-3 text-sm">
            {[
              ["Name", modal.driver.name],
              ["Phone", modal.driver.phone],
              ["Email", modal.driver.email],
              ["Vehicle", modal.driver.vehicle],
              ["City", modal.driver.city],
              ["Trips", String(modal.driver.trips)],
              ["Earnings", `N$ ${modal.driver.earnings.toLocaleString()}`],
              ["Joined", modal.driver.joined],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between">
                <dt className="text-gray-500">{k}</dt>
                <dd className="text-white font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        )}
      </AdminModal>
    </div>
  );
}
