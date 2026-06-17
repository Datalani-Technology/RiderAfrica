"use client";
import { usePathname } from "next/navigation";

const labels: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/users": "Customers",
  "/admin/drivers": "Drivers",
  "/admin/driver-applications": "Driver Applications",
  "/admin/requests": "Trips & Requests",
  "/admin/payments": "Payments",
  "/admin/withdrawals": "Withdrawals",
  "/admin/support": "Support Queues",
  "/admin/pawning": "Pawning Submissions",
  "/admin/grocery": "Grocery Items",
  "/admin/subscribers": "Subscribers",
  "/admin/enquiries": "Enquiries",
  "/admin/notifications": "Notifications",
  "/admin/pricing": "Pricing",
  "/admin/settings": "Settings",
};

export default function AdminTopBar() {
  const pathname = usePathname();
  const title = labels[pathname] ?? "Admin";
  return (
    <header className="h-14 bg-[#070C18] border-b border-white/5 flex items-center px-6 shrink-0">
      <div className="flex-1">
        <h1 className="text-white font-bold text-base">{title}</h1>
        <p className="text-gray-600 text-xs">Admin Panel · Rider Africa</p>
      </div>
      <div className="w-8 h-8 bg-[#0073FF] rounded-full flex items-center justify-center text-white font-bold text-sm">A</div>
    </header>
  );
}
