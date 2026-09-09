"use client";

import type {Student} from "@/types/student";
import {formatDate, initials} from "@/utils/helpers";
import {Eye, Pencil, Trash2} from "lucide-react";
import Link from "next/link";

export default function StudentTable({
    students,
    onDelete,
}: {
    students: Student[];
    onDelete: (student: Student) => void;
}) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left">
                <thead>
                    <tr className="border-b border-[var(--line)] text-[11px] uppercase tracking-[.14em] text-[var(--muted)]">
                        <th className="px-5 py-4 font-semibold">Student</th>
                        <th className="px-5 py-4 font-semibold">Age</th>
                        <th className="px-5 py-4 font-semibold">Course</th>
                        <th className="px-5 py-4 font-semibold">Address</th>
                        <th className="px-5 py-4 font-semibold">Date of birth</th>
                        <th className="px-5 py-4 text-right font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr
                            key={student.id}
                            className="border-b border-[var(--line)] last:border-0 hover:bg-[#fbfcfa]"
                        >
                            <td className="px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <span className="grid h-9 w-9 place-items-center bg-[#e1f1ed] text-xs font-bold text-[#1e6a5a]">
                                        {initials(student.firstName, student.lastName)}
                                    </span>
                                    <div>
                                        <Link
                                            href={`/students/${student.id}`}
                                            className="font-semibold text-[var(--ink)] hover:text-[#2d8269]"
                                        >
                                            {student.name}
                                        </Link>
                                        <p className="text-xs text-[var(--muted)]">
                                            {student.email}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-4 text-sm text-[var(--muted)]">
                                {student.age}
                            </td>
                            <td className="px-5 py-4 text-sm text-[var(--muted)]">
                                {student.course}
                            </td>
                            <td className="max-w-[220px] px-5 py-4 text-sm text-[var(--muted)]">
                                {student.address ?? "-"}
                            </td>
                            <td className="px-5 py-4 text-sm text-[var(--muted)]">
                                {student.dateOfBirth ? formatDate(student.dateOfBirth) : "-"}
                            </td>
                            <td className="px-5 py-4">
                                <div className="flex justify-end gap-3 text-[var(--muted)]">
                                    <Link
                                        href={`/students/${student.id}`}
                                        aria-label="View student"
                                    >
                                        <Eye size={17} />
                                    </Link>
                                    <Link
                                        href={`/students/${student.id}/edit`}
                                        aria-label="Edit student"
                                    >
                                        <Pencil size={17} />
                                    </Link>
                                    <button
                                        onClick={() => onDelete(student)}
                                        aria-label="Delete student"
                                    >
                                        <Trash2 size={17} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
