export type StudentStatus = "ACTIVE" | "INACTIVE" | "GRADUATED";

export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    name: string;
    age: number;
    email: string;
    address?: string;
    phone?: string;
    course: string;
    dateOfBirth?: string;
    enrollmentDate: string;
    status: StudentStatus;
    avatarUrl?: string;
}

export interface StudentRequest {
    name: string;
    age: number;
    email: string;
    address: string;
    course: string;
    dateOfBirth: string;
}
