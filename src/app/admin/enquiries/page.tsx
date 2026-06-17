"use client";
import { useEffect, useState } from "react";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import AdminModal from "@/components/admin/AdminModal";
import type { Enquiry } from "@/lib/firebase-admin";

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [modal, setModal] = useState<{ open: boolean; item: Enquiry | null }>({ open: false, item: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/enquiries").then(r => r.json()).then(data => { setEnquiries(data); setLoading(false); });
  }, []);

  return (
    <div className="space-y-4">
      <div className="bg-[#0D1526] border border-white/5 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500 text-sm">Loading…</div>
        ) : enquiries.length === 0 ? (
          <AdminEmptyState message="No enquiries yet." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5 text-gray-500 text-xs uppercase tracking-wide">
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Subject</th>
                  <th className="px-4 py-3 text-left">Received</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map(e => (
                  <tr key={e.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="px-4 py-3 text-white">{e.name}</td>
                    <td className="px-4 py-3 text-gray-400">{e.email}</td>
                    <td className="px-4 py-3 text-gray-300">{e.subject}</td>
                    <td className="px-4 py-3 text-gray-500">{new Date(e.receivedAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3 flex gap-2">
                      <button onClick={() => setModal({ open: true, item: e })} className="text-xs text-[#4DA6FF] hover:underline">View</button>
                      <a href={`mailto:${e.email}`} className="text-xs text-green-400 hover:underline">Reply</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <AdminModal open={modal.open} title="Enquiry Message" onClose={() => setModal({ open: false, item: null })}>
        {modal.item && (
          <div className="space-y-3 text-sm">
            {[["From", modal.item.name], ["Email", modal.item.email], ["Subject", modal.item.subject]].map(([k, v]) => (
              <div key={k} className="flex justify-between">
                <span className="text-gray-500">{k}</span>
                <span className="text-white font-medium">{v}</span>
              </div>
            ))}
            <div className="pt-3 border-t border-white/10">
              <p className="text-gray-500 text-xs mb-1">Message</p>
              <p className="text-gray-200 leading-relaxed">{modal.item.message}</p>
            </div>
            <a href={`mailto:${modal.item.email}`}
              className="block w-full text-center bg-[#0073FF] hover:bg-[#0055CC] text-white font-bold py-2.5 rounded-xl text-sm transition-colors mt-4">
              Reply via Email
            </a>
          </div>
        )}
      </AdminModal>
    </div>
  );
}
