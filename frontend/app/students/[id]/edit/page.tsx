"use client";

import ErrorMessage from "@/components/common/ErrorMessage";
import Loader from "@/components/common/Loader";
import AppShell from "@/components/layout/AppShell";
import StudentForm from "@/components/students/StudentForm";
import { getStudentById } from "@/services/studentService";
import type { Student } from "@/types/student";
import { getErrorMessage } from "@/utils/helpers";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface EditStudentPageProps {
    params: Promise<{ id: string }>;
}

const EditStudentPage = ({ params }: EditStudentPageProps) => {
    const [student, setStudent] = useState<Student>();
    const [error, setError] = useState("");

    useEffect(() => {
        const loadStudent = async () => {
            try {
                const { id } = await params;
                setStudent(await getStudentById(id));
            } catch (requestError) {
                setError(getErrorMessage(requestError, "Unable to load this student."));
            }
        };

        void loadStudent();
    }, [params]);

    return (
        <AppShell>
            <div className="mx-auto max-w-7xl">
                <Link
                    href={student ? `/students/${student.id}` : "/students"}
                    className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#2d8269]"
                >
                    <ArrowLeft size={16} />
                    Back
                </Link>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#2d8269]">
                    Directory
                </p>
                <h1 className="mt-2 font-display text-4xl text-[var(--ink)]">
                    Edit student
                </h1>
                <p className="mb-8 mt-2 text-sm text-[var(--muted)]">
                    Update the same fields accepted by StudentRequestDTO.
                </p>
                {error && <ErrorMessage message={error} />}
                {!error && !student && <Loader label="Loading student" />}
                {student && (
                    <div className="border border-[var(--line)] bg-white p-5 sm:p-8">
                        <StudentForm student={student} />
                    </div>
                )}
            </div>
        </AppShell>
    );
};

export default EditStudentPage;
