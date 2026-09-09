package com.nilesh.StudentManagement.controller;


import com.nilesh.StudentManagement.dto.RegisterDTO;
import com.nilesh.StudentManagement.dto.UserResponseDTO;
import com.nilesh.StudentManagement.service.AuthServices;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthServices authServices;

    public AuthController(AuthServices authServices){
        this.authServices = authServices;
    }


    @PostMapping("/register")
    public ResponseEntity<UserResponseDTO> register(@RequestBody RegisterDTO registerDTO){

      UserResponseDTO registerduser =   authServices.register(registerDTO);
      return ResponseEntity.status(HttpStatus.CREATED).body(registerduser);



    }




    
}
