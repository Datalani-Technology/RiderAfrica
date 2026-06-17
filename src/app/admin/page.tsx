"use client";
import { useEffect, useState } from "react";
import AdminStatCard from "@/components/admin/AdminStatCard";
import { Users, Car, Route, CreditCard, Wallet, Mail } from "lucide-react";

type Stats = {
  totalUsers: number; totalDrivers: number; tripsToday: number;
  pendingPayments: number; pendingWithdrawals: number; subscribers: number;
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch("/api/admin/dashboard").then(r => r.json()).then(setStats);
  }, []);

  const cards = stats
    ? [
        { label: "Total Customers", value: stats.totalUsers, Icon: Users, color: "#0073FF" },
        { label: "Active Drivers", value: stats.totalDrivers, Icon: Car, color: "#10B981" },
        { label: "Trips Today", value: stats.tripsToday, Icon: Route, color: "#F59E0B" },
        { label: "Pending Payments", value: stats.pendingPayments, Icon: CreditCard, color: "#EF4444" },
        { label: "Pending Withdrawals", value: stats.pendingWithdrawals, Icon: Wallet, color: "#8B5CF6" },
        { label: "Newsletter Subscribers", value: stats.subscribers, Icon: Mail, color: "#06B6D4" },
      ]
    : [];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-white font-black text-xl mb-1">Welcome back</h2>
        <p className="text-gray-400 text-sm">Here is a live snapshot of your platform.</p>
      </div>

      {stats ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {cards.map(c => <AdminStatCard key={c.label} {...c} />)}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-[#0D1526] border border-white/5 rounded-2xl p-5 h-20 animate-pulse" />
          ))}
        </div>
      )}

      {/* Quick links */}
      <div className="bg-[#0D1526] border border-white/5 rounded-2xl p-5">
        <h3 className="text-white font-bold text-sm mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: "/admin/driver-applications", label: "Review Applications" },
            { href: "/admin/payments", label: "Confirm Payments" },
            { href: "/admin/withdrawals", label: "Approve Withdrawals" },
            { href: "/admin/support", label: "Support Queue" },
          ].map(q => (
            <a key={q.href} href={q.href}
              className="bg-[#131C30] hover:bg-[#0073FF]/20 border border-white/5 hover:border-[#0073FF]/30 rounded-xl px-3 py-2.5 text-xs text-gray-300 hover:text-white transition-all text-center"
            >
              {q.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
