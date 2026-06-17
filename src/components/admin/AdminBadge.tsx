const colors: Record<string, string> = {
  active:    "bg-green-100 text-green-700",
  approved:  "bg-green-100 text-green-700",
  confirmed: "bg-green-100 text-green-700",
  completed: "bg-green-100 text-green-700",
  resolved:  "bg-green-100 text-green-700",
  pending:   "bg-yellow-100 text-yellow-700",
  "in progress": "bg-blue-100 text-blue-700",
  open:      "bg-blue-100 text-blue-700",
  suspended: "bg-red-100 text-red-700",
  rejected:  "bg-red-100 text-red-700",
  cancelled: "bg-red-100 text-red-700",
};

export default function AdminBadge({ status }: { status: string }) {
  const cls = colors[status.toLowerCase()] ?? "bg-gray-100 text-gray-600";
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${cls}`}>
      {status}
    </span>
  );
}
