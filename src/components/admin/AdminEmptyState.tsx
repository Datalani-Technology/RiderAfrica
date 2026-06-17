import { InboxIcon } from "lucide-react";

export default function AdminEmptyState({ message = "No records found." }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-gray-500">
      <InboxIcon className="w-12 h-12 mb-4 text-gray-600" strokeWidth={1} />
      <p className="text-sm">{message}</p>
    </div>
  );
}
