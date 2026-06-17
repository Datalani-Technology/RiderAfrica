"use client";
import { useEffect, useState } from "react";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import type { GroceryItem } from "@/lib/firebase-admin";

export default function AdminGroceryPage() {
  const [items, setItems] = useState<GroceryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setItems([
        { id: "g1", customer: "Lerato Dlamini", storeName: "Checkers Windhoek", itemName: "Almond milk 1L", reviewed: false, submittedAt: new Date().toISOString() },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const markReviewed = (id: string) => setItems(prev => prev.map(i => i.id === id ? { ...i, reviewed: true } : i));

  return (
    <div className="space-y-4">
      <p className="text-gray-400 text-sm">{items.filter(i => !i.reviewed).length} unreviewed item reports</p>
      <div className="bg-[#0D1526] border border-white/5 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500 text-sm">Loading…</div>
        ) : items.length === 0 ? (
          <AdminEmptyState message="No missing item reports." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5 text-gray-500 text-xs uppercase tracking-wide">
                  <th className="px-4 py-3 text-left">Customer</th>
                  <th className="px-4 py-3 text-left">Store</th>
                  <th className="px-4 py-3 text-left">Item</th>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map(i => (
                  <tr key={i.id} className={`border-b border-white/5 transition-colors ${i.reviewed ? "opacity-50" : "hover:bg-white/2"}`}>
                    <td className="px-4 py-3 text-white">{i.customer}</td>
                    <td className="px-4 py-3 text-gray-400">{i.storeName}</td>
                    <td className="px-4 py-3 text-gray-300">{i.itemName}</td>
                    <td className="px-4 py-3 text-gray-500">{new Date(i.submittedAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      {!i.reviewed && (
                        <button onClick={() => markReviewed(i.id)} className="text-xs text-green-400 hover:underline">Mark Reviewed</button>
                      )}
                      {i.reviewed && <span className="text-xs text-gray-600">Reviewed</span>}
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
