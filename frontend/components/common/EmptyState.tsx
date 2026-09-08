import { Inbox } from "lucide-react";

export default function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center border border-dashed border-[var(--line)] bg-white px-6 py-16 text-center">
      <Inbox
        size={28}
        strokeWidth={1.5}
        className="mb-3 text-[var(--accent)]"
      />
      <h3 className="font-semibold text-[var(--ink)]">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-[var(--muted)]">{description}</p>
    </div>
  );
}
