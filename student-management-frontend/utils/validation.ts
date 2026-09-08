import type { StudentRequest } from "@/types/student";

export type FormErrors = Partial<Record<keyof StudentRequest, string>>;

export const validateStudent = (values: StudentRequest): FormErrors => {
    const errors: FormErrors = {};
    if (!values.name.trim()) errors.name = "Name is required.";
    if (!values.age || values.age < 1) errors.age = "Enter a valid age.";
    if (!/^\S+@\S+\.\S+$/.test(values.email))
        errors.email = "Enter a valid email address.";
    if (!values.address.trim()) errors.address = "Address is required.";
    if (!values.course) errors.course = "Choose a course.";
    if (!values.dateOfBirth) errors.dateOfBirth = "Date of birth is required.";
    return errors;
};
