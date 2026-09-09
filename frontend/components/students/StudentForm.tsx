"use client";

import ErrorMessage from "@/components/common/ErrorMessage";
import {createStudent, updateStudent} from "@/services/studentService";
import type {Student, StudentRequest} from "@/types/student";
import {COURSES} from "@/utils/constants";
import {getErrorMessage} from "@/utils/helpers";
import {type FormErrors, validateStudent} from "@/utils/validation";
import {useRouter} from "next/navigation";
import {useState} from "react";

const emptyForm: StudentRequest = {
    name: "",
    age: 0,
    email: "",
    address: "",
    course: "",
    dateOfBirth: "",
};

export default function StudentForm({ student }: { student?: Student }) {
    const router = useRouter();
    const [values, setValues] = useState<StudentRequest>(
        student
            ? {
                name: student.name,
                age: student.age,
                email: student.email,
                address: student.address ?? "",
                course: student.course,
                dateOfBirth: student.dateOfBirth ?? "",
            }
            : emptyForm,
    );
    const [errors, setErrors] = useState<FormErrors>({});
    const [serverError, setServerError] = useState("");
    const [saving, setSaving] = useState(false);
    const update = (key: keyof StudentRequest, value: string | number) =>
        setValues((current) => ({ ...current, [key]: value }));
    const submit = async (event: React.FormEvent) => {
        event.preventDefault();
        const nextErrors = validateStudent(values);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length) return;
        setSaving(true);
        setServerError("");
        try {
            if (student) await updateStudent(student.id, values);
            else await createStudent(values);
            router.push("/students");
        } catch (error) {
            setServerError(getErrorMessage(error));
        } finally {
            setSaving(false);
        }
    };
    const field = (key: keyof StudentRequest, label: string, type = "text") => (
        <label className="field">
            <span>{label}</span>
            <input
                type={type}
                value={values[key]}
                onChange={(event) => update(key, event.target.value)}
                className={errors[key] ? "input-error" : ""}
            />
            {errors[key] && <small>{errors[key]}</small>}
        </label>
    );
    return (
        <form onSubmit={submit} className="max-w-3xl space-y-7">
            {serverError && <ErrorMessage message={serverError} />}
            <div className="grid gap-5 sm:grid-cols-2">
                {field("name", "Full name")}
                {field("age", "Age", "number")}
                {field("email", "Email address", "email")}
                {field("address", "Address")}
                {field("dateOfBirth", "Date of birth", "date")}
                <label className="field">
                    <span>Course</span>
                    <select
                        value={values.course}
                        onChange={(event) => update("course", event.target.value)}
                        className={errors.course ? "input-error" : ""}
                    >
                        <option value="">Select a course</option>
                        {COURSES.map((course) => (
                            <option key={course}>{course}</option>
                        ))}
                    </select>
                    {errors.course && <small>{errors.course}</small>}
                </label>
            </div>
            <div className="flex gap-3 border-t border-[var(--line)] pt-6">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="btn-secondary"
                >
                    Cancel
                </button>
                <button disabled={saving} className="btn-primary">
                    {saving ? "Saving..." : student ? "Save changes" : "Add student"}
                </button>
            </div>
        </form>
    );
}
