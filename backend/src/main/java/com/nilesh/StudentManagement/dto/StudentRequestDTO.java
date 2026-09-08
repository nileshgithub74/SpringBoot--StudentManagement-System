package com.nilesh.StudentManagement.dto;



import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
@NoArgsConstructor

public class StudentRequestDTO {

    @NotBlank(message ="Name is required")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid one")
    private String email;

    @NotBlank(message = "Address is required")
    private String address;

    @NotNull(message =  "DateOfBirth is required")
    @Past(message= "Dob must be in the past")
    private LocalDate dateOfBirth;

    @NotBlank(message ="course is required")
    private String course;
    @NotNull(message = "Age is required")
    private Integer age;

}
