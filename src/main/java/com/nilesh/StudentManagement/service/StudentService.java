package com.nilesh.StudentManagement.service;

import com.nilesh.StudentManagement.dto.StudentRequestDTO;
import com.nilesh.StudentManagement.dto.StudentResponseDTO;

import java.util.List;

public interface StudentService {

    StudentResponseDTO createStudent(StudentRequestDTO studentRequestDTO);
    StudentResponseDTO getStudent(Long id);
    List<StudentResponseDTO> getAllStudent();

    StudentResponseDTO updateStudent(StudentRequestDTO studentRequestDTO, Long id);

    String deleteStudent(Long id);

    List<StudentResponseDTO> serchStudent(String name);

    List<StudentResponseDTO> findStudentByAge(Integer age);
    List<StudentResponseDTO> findStudentByAgeAndCourse(Integer age, String course);
    List<StudentResponseDTO> findByCourse( String course);
}
