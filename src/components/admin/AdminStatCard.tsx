import { type LucideIcon } from "lucide-react";

type Props = {
  label: string;
  value: string | number;
  Icon: LucideIcon;
  trend?: string;
  color?: string;
};

export default function AdminStatCard({ label, value, Icon, trend, color = "#0073FF" }: Props) {
  return (
    <div className="bg-[#0D1526] border border-white/5 rounded-2xl p-5 flex items-center gap-4">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: `${color}20` }}
      >
        <Icon className="w-6 h-6" style={{ color }} strokeWidth={1.75} />
      </div>
      <div className="min-w-0">
        <p className="text-gray-400 text-xs truncate">{label}</p>
        <p className="text-white text-2xl font-black">{value}</p>
        {trend && <p className="text-gray-500 text-xs mt-0.5">{trend}</p>}
      </div>
    </div>
  );
}
