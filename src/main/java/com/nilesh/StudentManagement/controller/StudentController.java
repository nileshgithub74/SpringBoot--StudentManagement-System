package com.nilesh.StudentManagement.controller;

import com.nilesh.StudentManagement.dto.StudentRequestDTO;
import com.nilesh.StudentManagement.dto.StudentResponseDTO;
import com.nilesh.StudentManagement.service.StudentServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/students")
public class StudentController {

    private StudentServiceImpl studentService;

    public StudentController(StudentServiceImpl studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/welcome")
    public ResponseEntity<String> welcome() {
        return ResponseEntity.status(HttpStatus.OK).body("welcome to Student Management System");


    }

    @PostMapping
    public ResponseEntity<StudentResponseDTO> create(@Valid @RequestBody
                                                     StudentRequestDTO studentRequestDTO) {
        StudentResponseDTO student = studentService.createStudent(studentRequestDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(student);
    }
    @GetMapping("/{id}")
    public ResponseEntity<StudentResponseDTO> getStudent(@PathVariable Long id) {
        StudentResponseDTO student = studentService.getStudent(id);
        return ResponseEntity.status(HttpStatus.OK).body(student);

    }

    @GetMapping
    public ResponseEntity<List<StudentResponseDTO>> getAllStudent() {
        List<StudentResponseDTO> allstudent = studentService.getAllStudent();
        return ResponseEntity.status(HttpStatus.OK).body(allstudent);
    }

    @PutMapping("/{id}")
    public ResponseEntity<StudentResponseDTO> updateStudent(@PathVariable Long id,
                                                            @Valid @RequestBody
                                                            StudentRequestDTO studentRequestDTO
    ) {
         StudentResponseDTO responseData =   studentService.updateStudent(studentRequestDTO, id);

         return ResponseEntity.status(HttpStatus.OK).body(responseData);

    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable Long id){

        String  deletedStudent =     studentService.deleteStudent(id);
        return ResponseEntity.status(HttpStatus.OK).body(deletedStudent);
    }

    // search
    @GetMapping("/search")
    public ResponseEntity<List<StudentResponseDTO>> searchStudent(@RequestParam  String name){
      List<StudentResponseDTO>  searchedStudent =    studentService.serchStudent(name);
      return ResponseEntity.status(HttpStatus.OK).body(searchedStudent);

    }


    @GetMapping("/filter")
    public ResponseEntity<List<StudentResponseDTO>>  findStudentByAge(@RequestParam  Integer age){
            List<StudentResponseDTO> allstudent =   studentService.findStudentByAge(age);
            return ResponseEntity.status(HttpStatus.OK).body(allstudent);

    }

}
