"use client";

import { Trash2, X } from "lucide-react";

export default function DeleteStudentModal({
  name,
  onCancel,
  onConfirm,
  loading,
}: {
  name: string;
  onCancel: () => void;
  onConfirm: () => void;
  loading: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[#102a2b]/45 p-4">
      <div className="w-full max-w-md bg-white p-6 shadow-xl">
        <div className="flex justify-between">
          <span className="grid h-10 w-10 place-items-center bg-red-50 text-red-600">
            <Trash2 size={19} />
          </span>
          <button onClick={onCancel} aria-label="Close">
            <X size={20} />
          </button>
        </div>
        <h2 className="mt-5 font-display text-2xl text-[var(--ink)]">
          Delete student?
        </h2>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
          This will permanently remove <strong>{name}</strong> from the student
          records.
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onCancel} className="btn-secondary">
            Cancel
          </button>
          <button onClick={onConfirm} disabled={loading} className="btn-danger">
            {loading ? "Deleting..." : "Delete student"}
          </button>
        </div>
      </div>
    </div>
  );
}
