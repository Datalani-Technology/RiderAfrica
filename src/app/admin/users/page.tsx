"use client";
import { useEffect, useState } from "react";
import AdminBadge from "@/components/admin/AdminBadge";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import AdminModal from "@/components/admin/AdminModal";
import type { UserRecord } from "@/lib/firebase-admin";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<UserRecord[]>([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<{ open: boolean; user: UserRecord | null }>({ open: false, user: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/users").then(r => r.json()).then(data => { setUsers(data); setLoading(false); });
  }, []);

  const action = async (id: string, act: string) => {
    await fetch("/api/admin/users", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, action: act }) });
    setUsers(prev => prev.map(u => u.id === id ? { ...u, status: act === "suspend" ? "suspended" : "active" } : u));
    setModal({ open: false, user: null });
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this user permanently?")) return;
    await fetch("/api/admin/users", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <input
          value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search customers…"
          className="bg-[#0D1526] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#0073FF] w-64"
        />
        <span className="text-gray-500 text-sm">{filtered.length} records</span>
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
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Phone</th>
                  <th className="px-4 py-3 text-left">Joined</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(u => (
                  <tr key={u.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="px-4 py-3 text-white font-medium">{u.name}</td>
                    <td className="px-4 py-3 text-gray-400">{u.email}</td>
                    <td className="px-4 py-3 text-gray-400">{u.phone}</td>
                    <td className="px-4 py-3 text-gray-500">{u.joined}</td>
                    <td className="px-4 py-3"><AdminBadge status={u.status} /></td>
                    <td className="px-4 py-3 flex items-center gap-2">
                      <button onClick={() => setModal({ open: true, user: u })} className="text-xs text-[#4DA6FF] hover:underline">View</button>
                      <button onClick={() => action(u.id, u.status === "active" ? "suspend" : "activate")}
                        className={`text-xs hover:underline ${u.status === "active" ? "text-yellow-400" : "text-green-400"}`}>
                        {u.status === "active" ? "Suspend" : "Activate"}
                      </button>
                      <button onClick={() => remove(u.id)} className="text-xs text-red-400 hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <AdminModal open={modal.open} title="Customer Details" onClose={() => setModal({ open: false, user: null })}>
        {modal.user && (
          <dl className="space-y-3 text-sm">
            {[["Name", modal.user.name], ["Email", modal.user.email], ["Phone", modal.user.phone], ["Joined", modal.user.joined]].map(([k, v]) => (
              <div key={k} className="flex justify-between">
                <dt className="text-gray-500">{k}</dt>
                <dd className="text-white font-medium">{v}</dd>
              </div>
            ))}
            <div className="flex justify-between">
              <dt className="text-gray-500">Status</dt>
              <dd><AdminBadge status={modal.user.status} /></dd>
            </div>
          </dl>
        )}
      </AdminModal>
    </div>
  );
}
