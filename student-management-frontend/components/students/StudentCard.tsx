import type { Student } from "@/types/student";
import { initials } from "@/utils/helpers";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const StudentCard = ({ student }: { student: Student }) => (
  <Link
    href={`/students/${student.id}`}
    className="block border border-[var(--line)] bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md"
  >
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center bg-[#e1f1ed] text-sm font-bold text-[#1e6a5a]">
          {initials(student.firstName, student.lastName)}
        </span>
        <div>
          <p className="font-semibold text-[var(--ink)]">
            {student.name}
          </p>
          <p className="text-xs text-[var(--muted)]">{student.email}</p>
        </div>
      </div>
      <ArrowUpRight size={17} className="text-[var(--muted)]" />
    </div>
    <div className="mt-4 flex justify-between border-t border-[var(--line)] pt-3 text-xs">
      <span className="text-[var(--muted)]">
        {student.course} · Age {student.age}
      </span>
      <span className="font-semibold text-[#2d8269]">View details</span>
    </div>
  </Link>
);

export default StudentCard;
