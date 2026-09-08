import api from "@/services/api";
import type { Student, StudentRequest } from "@/types/student";

interface StudentResponseDTO {
    id: number;
    name: string;
    age: number;
    email: string;
    address?: string;
    course: string;
    dateOfBirth?: string;
    phone?: string;
    status?: Student["status"];
}

const normalizeStudent = (student: StudentResponseDTO): Student => {
    const nameParts = student.name.trim().split(/\s+/);

    return {
        ...student,
        name: student.name,
        firstName: nameParts[0] ?? "",
        lastName: nameParts.slice(1).join(" "),
        age: student.age,
        enrollmentDate: student.dateOfBirth ?? "",
        status: student.status ?? "ACTIVE",
    };
};

export const getStudents = async (): Promise<Student[]> => {
    const { data } = await api.get<StudentResponseDTO[] | { content: StudentResponseDTO[] }>(
        "/students",
    );
    const students = Array.isArray(data) ? data : data.content;
    return students.map(normalizeStudent);
};

export const getStudentById = async (id: number | string): Promise<Student> => {
    const { data } = await api.get<StudentResponseDTO>(`/students/${id}`);
    return normalizeStudent(data);
};

export const createStudent = async (student: StudentRequest): Promise<Student> => {
    const { data } = await api.post<StudentResponseDTO>("/students", student);
    return normalizeStudent(data);
};

export const updateStudent = async (
    id: number | string,
    student: StudentRequest,
): Promise<Student> => {
    const { data } = await api.put<StudentResponseDTO>(`/students/${id}`, student);
    return normalizeStudent(data);
};

export const deleteStudent = async (id: number | string): Promise<void> => {
    await api.delete(`/students/${id}`);
};

export const searchStudents = async (name: string): Promise<Student[]> => {
    const { data } = await api.get<StudentResponseDTO[]>("/students/search", {
        params: { name },
    });
    return data.map(normalizeStudent);
};

export const filterStudentsByAge = async (age: number): Promise<Student[]> => {
    const { data } = await api.get<StudentResponseDTO[]>("/students/filter", {
        params: { age },
    });
    return data.map(normalizeStudent);
};

export const filterStudentsByCourse = async (
    course: string,
): Promise<Student[]> => {
    const { data } = await api.get<StudentResponseDTO[]>("/students/filter/course", {
        params: { course },
    });
    return data.map(normalizeStudent);
};

export const filterStudentsByAgeAndCourse = async (
    age: number,
    course: string,
): Promise<Student[]> => {
    const { data } = await api.get<StudentResponseDTO[]>("/students/filter/course/age", {
        params: { age, course },
    });
    return data.map(normalizeStudent);
};
