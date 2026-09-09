package com.nilesh.StudentManagement.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class LoginDTO {

    @NotBlank(message = "Username is required")
    private String username;


    @NotNull(message = "Password is required")
    private String password;
}
