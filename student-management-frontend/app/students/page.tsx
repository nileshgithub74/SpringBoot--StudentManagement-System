"use client";

import EmptyState from "@/components/common/EmptyState";
import ErrorMessage from "@/components/common/ErrorMessage";
import Loader from "@/components/common/Loader";
import AppShell from "@/components/layout/AppShell";
import StudentCard from "@/components/students/StudentCard";
import StudentTable from "@/components/students/StudentTable";
import { useStudents } from "@/hooks/useStudents";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const StudentsPage = () => {
    const { students, loading, error, refresh } = useStudents();
    const [search, setSearch] = useState("");

    const visibleStudents = useMemo(() => {
        const searchValue = search.trim().toLowerCase();

        if (!searchValue) return students;

        return students.filter((student) =>
            `${student.firstName} ${student.lastName} ${student.email} ${student.course}`
                .toLowerCase()
                .includes(searchValue),
        );
    }, [search, students]);

    return (
        <AppShell>
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[.18em] text-[#2d8269]">
                            Directory
                        </p>
                        <h1 className="mt-2 font-display text-4xl text-[var(--ink)]">
                            Students
                        </h1>
                        <p className="mt-2 text-sm text-[var(--muted)]">
                            Data loaded from your Spring Boot student API.
                        </p>
                    </div>
                    <Link href="/students/add" className="btn-primary gap-2">
                        <Plus size={17} />
                        Add student
                    </Link>
                </div>

                <div className="mt-8 flex items-center gap-3 border border-[var(--line)] bg-white p-4">
                    <Search size={18} className="text-[var(--muted)]" />
                    <input
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        className="h-10 flex-1 text-sm outline-none"
                        placeholder="Search loaded students"
                    />
                </div>

                {error && (
                    <div className="mt-5">
                        <ErrorMessage message={error} onRetry={refresh} />
                    </div>
                )}

                <div className="mt-5 border border-[var(--line)] bg-white">
                    {loading ? (
                        <div className="p-8">
                            <Loader label="Fetching /api/students" />
                        </div>
                    ) : visibleStudents.length === 0 ? (
                        <EmptyState
                            title="No students found"
                            description="The API returned no matching student records."
                        />
                    ) : (
                        <>
                            <div className="hidden md:block">
                                <StudentTable students={visibleStudents} onDelete={() => undefined} />
                            </div>
                            <div className="grid gap-3 p-4 md:hidden">
                                {visibleStudents.map((student) => (
                                    <StudentCard key={student.id} student={student} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </AppShell>
    );
};

export default StudentsPage;
