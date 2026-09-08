"use client";

import ErrorMessage from "@/components/common/ErrorMessage";
import Loader from "@/components/common/Loader";
import AppShell from "@/components/layout/AppShell";
import { getStudentById } from "@/services/studentService";
import type { Student } from "@/types/student";
import { formatDate } from "@/utils/helpers";
import { ArrowLeft, Pencil } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface StudentDetailsPageProps {
    params: Promise<{ id: string }>;
}

const StudentDetailsPage = ({ params }: StudentDetailsPageProps) => {
    const [student, setStudent] = useState<Student>();
    const [error, setError] = useState("");

    useEffect(() => {
        const loadStudent = async () => {
            try {
                const { id } = await params;
                setStudent(await getStudentById(id));
            } catch (requestError) {
                setError(
                    requestError instanceof Error
                        ? requestError.message
                        : "Unable to load this student.",
                );
            }
        };

        void loadStudent();
    }, [params]);

    return (
        <AppShell>
            <div className="mx-auto max-w-4xl">
                <Link
                    href="/students"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#2d8269]"
                >
                    <ArrowLeft size={16} />
                    Back to students
                </Link>

                {error && <ErrorMessage message={error} />}
                {!error && !student && <Loader label="Loading student details" />}

                {student && (
                    <section className="border border-[var(--line)] bg-white p-6 sm:p-8">
                        <div className="flex flex-col justify-between gap-4 border-b border-[var(--line)] pb-6 sm:flex-row sm:items-start">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#2d8269]">
                                    Student #{student.id}
                                </p>
                                <h1 className="mt-2 font-display text-4xl text-[var(--ink)]">
                                    {student.name}
                                </h1>
                                <p className="mt-2 text-sm text-[var(--muted)]">{student.email}</p>
                            </div>
                            <Link href={`/students/${student.id}/edit`} className="btn-secondary gap-2">
                                <Pencil size={16} />
                                Edit student
                            </Link>
                        </div>

                        <div className="mt-6 grid gap-5 sm:grid-cols-2">
                            <Detail label="Age" value={String(student.age)} />
                            <Detail label="Course" value={student.course} />
                            <Detail label="Address" value={student.address ?? "-"} />
                            <Detail
                                label="Date of birth"
                                value={student.dateOfBirth ? formatDate(student.dateOfBirth) : "-"}
                            />
                        </div>
                    </section>
                )}
            </div>
        </AppShell>
    );
};

const Detail = ({ label, value }: { label: string; value: string }) => (
    <div className="border border-[var(--line)] bg-[#f7f8f5] p-4">
        <p className="text-xs font-bold uppercase tracking-[.12em] text-[var(--muted)]">
            {label}
        </p>
        <p className="mt-2 text-sm font-semibold text-[var(--ink)]">{value}</p>
    </div>
);

export default StudentDetailsPage;
