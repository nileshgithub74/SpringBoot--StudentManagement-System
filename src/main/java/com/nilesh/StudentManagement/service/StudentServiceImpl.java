
package com.nilesh.StudentManagement.service;

import com.nilesh.StudentManagement.dto.StudentRequestDTO;
import com.nilesh.StudentManagement.dto.StudentResponseDTO;
import com.nilesh.StudentManagement.entity.Student;
import com.nilesh.StudentManagement.mapper.StudentMapper;
import com.nilesh.StudentManagement.repository.StudentRepository;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;
    private final StudentMapper studentMapper;

    public StudentServiceImpl(StudentRepository studentRepository, StudentMapper studentMapper) {
        this.studentRepository = studentRepository;
        this.studentMapper = studentMapper;
    }


    @Override
    public StudentResponseDTO createStudent(StudentRequestDTO studentRequestDTO) {


        Student student = studentMapper.RequestTOEntity(studentRequestDTO);

        Student savedstudent = studentRepository.save(student);


        StudentResponseDTO studentResponse = studentMapper.EntityToResponse(savedstudent);
        studentResponse.setMessage("Student Created SuccessFully");
        return studentResponse;


    }

    @Override
    public StudentResponseDTO getStudent(Long id) {
        Student student = studentRepository.findById(id).orElse(null);

        StudentResponseDTO fetchedStudent = studentMapper.EntityToResponse(student);
        fetchedStudent.setMessage("User Fetch successfully");
        return fetchedStudent;
    }


    @Override


    public List<StudentResponseDTO> getAllStudent() {
        List<Student> student = studentRepository.findAll();
        List<StudentResponseDTO> allstudent = student
                .stream().map((x) -> studentMapper.EntityToResponse(x)).toList();


        return allstudent;

    }

    @Override
    public StudentResponseDTO updateStudent(StudentRequestDTO studentRequestDTO, Long id) {

        // fetch the student from databse using id
        Student existingstudent = studentRepository.findById(id).orElseThrow(() -> new RuntimeException("Student with this id not found"));


        Student updateStudent = studentMapper.RequestTOEntity(studentRequestDTO);
        updateStudent.setId(existingstudent.getId());

        //now save the student;

        Student savedStudent = studentRepository.save(updateStudent);
        // convert to response

        StudentResponseDTO studentres = studentMapper.EntityToResponse(savedStudent);
        studentres.setMessage("Student Upated succesfully");
        return studentres;


    }

    @Override
    public String deleteStudent(Long id) {
        // check if id exist

        Student existingstudent = studentRepository.findById(id).orElseThrow(() -> new RuntimeException("Student with this id not Found"));

        studentRepository.deleteById(id);
        return "Student Deleted Successfully";


    }

    @Override
    public List<StudentResponseDTO> serchStudent(String name) {

        List<Student> searchStudent =
                studentRepository.
                        findByNameContainingIgnoreCase(name);

        if (searchStudent.isEmpty()) {
            throw new RuntimeException("Studnet not found" + name);
        }

        List<StudentResponseDTO> studentRes = searchStudent.stream().map(
                studentMapper::EntityToResponse
        ).toList();


        return studentRes;


    }

    @Override
    public List<StudentResponseDTO> findStudentByAge(Integer age) {

        List<Student> studentgetByage = studentRepository.findByAgeGreaterThanEqual(age);

        if (studentgetByage.isEmpty()) {
            throw new RuntimeException("Student Not found in this age " + age);
        }

        return studentgetByage.stream().map(
                studentMapper::EntityToResponse
        ).toList();
    }
}
