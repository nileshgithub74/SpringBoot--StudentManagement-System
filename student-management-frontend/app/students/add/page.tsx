import AppShell from "@/components/layout/AppShell";
import StudentForm from "@/components/students/StudentForm";

const AddStudentPage = () => (
    <AppShell>
        <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#2d8269]">
                Directory
            </p>
            <h1 className="mt-2 font-display text-4xl text-[var(--ink)]">
                Add student
            </h1>
            <p className="mb-8 mt-2 text-sm text-[var(--muted)]">
                Create a student using the same fields as StudentRequestDTO.
            </p>
            <div className="border border-[var(--line)] bg-white p-5 sm:p-8">
                <StudentForm />
            </div>
        </div>
    </AppShell>
);

export default AddStudentPage;
