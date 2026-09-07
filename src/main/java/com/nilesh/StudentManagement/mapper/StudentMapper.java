package com.nilesh.StudentManagement.mapper;

import com.nilesh.StudentManagement.dto.StudentRequestDTO;
import com.nilesh.StudentManagement.dto.StudentResponseDTO;
import com.nilesh.StudentManagement.entity.Student;
import org.springframework.stereotype.Component;

import java.time.LocalDate;


@Component
public class StudentMapper {

    public Student RequestTOEntity(StudentRequestDTO studentRequestDTO) {
        Student student = new Student();

        student.setName(studentRequestDTO.getName());
        student.setEmail(studentRequestDTO.getEmail());
        student.setAddress(studentRequestDTO.getAddress());
        student.setCourse(studentRequestDTO.getCourse());
        student.setDateOfBirth(studentRequestDTO.getDateOfBirth());
        student.setAge(studentRequestDTO.getAge());
        return student;

    }

    public StudentResponseDTO EntityToResponse(Student student) {
        StudentResponseDTO responseDTO = new StudentResponseDTO();

        responseDTO.setId(student.getId());
        responseDTO.setName(student.getName());
        responseDTO.setEmail(student.getEmail());
        responseDTO.setAddress(student.getAddress());
        responseDTO.setDateOfBirth(student.getDateOfBirth());
        responseDTO.setCourse(student.getCourse());
        responseDTO.setAge(student.getAge());

        return responseDTO;
    }
}
