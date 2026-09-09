"use client";

import ErrorMessage from "@/components/common/ErrorMessage";
import Loader from "@/components/common/Loader";
import AppShell from "@/components/layout/AppShell";
import StudentCard from "@/components/students/StudentCard";
import {useStudents} from "@/hooks/useStudents";
import {GraduationCap, Plus, Users} from "lucide-react";
import Link from "next/link";

const DashboardPage = () => {
    const { students, loading, error, refresh } = useStudents();
    const activeStudents = students.filter((student) => student.status === "ACTIVE").length;

    return (
        <AppShell>
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[.18em] text-[#2d8269]">
                            Overview
                        </p>
                        <h1 className="mt-2 font-display text-4xl text-[var(--ink)]">
                            Good morning, Admin.
                        </h1>
                        <p className="mt-2 text-sm text-[var(--muted)]">
                            Here is what is happening across your student community.
                        </p>
                    </div>
                    <Link href="/students" className="btn-primary gap-2">
                        <Plus size={17} />
                        Manage students
                    </Link>
                </div>

                {error && (
                    <div className="mt-6">
                        <ErrorMessage message={error} onRetry={refresh} />
                    </div>
                )}

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="border border-[var(--line)] bg-[#183f3e] p-5 text-white">
                        <GraduationCap className="text-[#e2c044]" size={22} />
                        <p className="mt-6 text-sm text-white/60">Total students</p>
                        <p className="mt-1 text-3xl font-bold">{loading ? "--" : students.length}</p>
                    </div>
                    <div className="border border-[var(--line)] bg-white p-5">
                        <Users className="text-[#2d8269]" size={22} />
                        <p className="mt-6 text-sm text-[var(--muted)]">Active students</p>
                        <p className="mt-1 text-3xl font-bold text-[var(--ink)]">
                            {loading ? "--" : activeStudents}
                        </p>
                    </div>
                </div>

                <section className="mt-8">
                    <h2 className="font-display text-2xl text-[var(--ink)]">Recent students</h2>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                        The latest records from your directory.
                    </p>
                    <div className="mt-4">
                        {loading ? (
                            <Loader label="Loading students" />
                        ) : students.length === 0 ? (
                            <p className="border border-dashed border-[var(--line)] bg-white p-8 text-sm text-[var(--muted)]">
                                No students have been added yet.
                            </p>
                        ) : (
                            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                {students.slice(0, 6).map((student) => (
                                    <StudentCard key={student.id} student={student} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </AppShell>
    );
};

export default DashboardPage;
