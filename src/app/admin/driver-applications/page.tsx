"use client";
import { useEffect, useState } from "react";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import AdminModal from "@/components/admin/AdminModal";
import type { DriverApplication } from "@/lib/firebase-admin";

export default function AdminDriverApplicationsPage() {
  const [apps, setApps] = useState<DriverApplication[]>([]);
  const [modal, setModal] = useState<{ open: boolean; app: DriverApplication | null }>({ open: false, app: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/drivers?type=applications").then(r => r.json()).then(data => { setApps(data); setLoading(false); });
  }, []);

  const visible = apps.filter(a => !a.archived);

  return (
    <div className="space-y-5">
      <p className="text-gray-400 text-sm">{visible.length} pending application{visible.length !== 1 ? "s" : ""}</p>

      <div className="bg-[#0D1526] border border-white/5 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500 text-sm">Loading…</div>
        ) : visible.length === 0 ? (
          <AdminEmptyState message="No pending driver applications." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5 text-gray-500 text-xs uppercase tracking-wide">
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Phone</th>
                  <th className="px-4 py-3 text-left">Vehicle</th>
                  <th className="px-4 py-3 text-left">City</th>
                  <th className="px-4 py-3 text-left">Submitted</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {visible.map(a => (
                  <tr key={a.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="px-4 py-3 text-white font-medium">{a.name}</td>
                    <td className="px-4 py-3 text-gray-400">{a.phone}</td>
                    <td className="px-4 py-3 text-gray-400">{a.vehicleType}</td>
                    <td className="px-4 py-3 text-gray-400">{a.city}</td>
                    <td className="px-4 py-3 text-gray-500">{new Date(a.submittedAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3 flex items-center gap-2">
                      <button onClick={() => setModal({ open: true, app: a })} className="text-xs text-[#4DA6FF] hover:underline">View</button>
                      <a href={`mailto:${a.email}`} className="text-xs text-green-400 hover:underline">Contact</a>
                      <button onClick={() => setApps(prev => prev.map(x => x.id === a.id ? { ...x, archived: true } : x))}
                        className="text-xs text-gray-500 hover:underline">Archive</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <AdminModal open={modal.open} title="Application Details" onClose={() => setModal({ open: false, app: null })}>
        {modal.app && (
          <div className="space-y-3 text-sm">
            {[
              ["Name", modal.app.name],
              ["Phone", modal.app.phone],
              ["Email", modal.app.email],
              ["Vehicle Type", modal.app.vehicleType],
              ["City", modal.app.city],
              ["Submitted", new Date(modal.app.submittedAt).toLocaleString()],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between">
                <span className="text-gray-500">{k}</span>
                <span className="text-white font-medium">{v}</span>
              </div>
            ))}
            <div className="pt-3 border-t border-white/10">
              <p className="text-gray-500 text-xs mb-1">Required documents should be emailed to:</p>
              <a href="mailto:registration@riderafrica.com" className="text-[#4DA6FF] text-sm">registration@riderafrica.com</a>
            </div>
          </div>
        )}
      </AdminModal>
    </div>
  );
}
