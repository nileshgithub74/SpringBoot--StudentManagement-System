package com.nilesh.StudentManagement.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;


@Setter
@Getter
@NoArgsConstructor

public class StudentResponseDTO {

    private Long id;
    private String name;
    private String email;
    private String address;
    private LocalDate dateOfBirth;
    private String course;
    private String message;
    private Integer age;

}
