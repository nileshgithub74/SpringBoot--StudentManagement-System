package com.nilesh.StudentManagement.service;


import com.nilesh.StudentManagement.dto.RegisterDTO;
import com.nilesh.StudentManagement.dto.UserResponseDTO;
import com.nilesh.StudentManagement.entity.User;
import com.nilesh.StudentManagement.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServices {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    public AuthServices(UserRepository userRepository, PasswordEncoder passwordEncoder) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }


    public UserResponseDTO register(RegisterDTO registerDTO) {
        // chek username is exits

        if (userRepository.existsByUsername(registerDTO.getUsername())) {
            throw new RuntimeException("User already exists by username");
        }

        // create the User;

        User user = new User();
        user.setUsername(registerDTO.getUsername());


        // hash the password;

        String hashedPassword = passwordEncoder.encode(registerDTO.getPassword());
        System.out.println(hashedPassword);
        user.setPassword(hashedPassword);

        user.setRoles("USER");

        //save to databse
        User savedUser = userRepository.save(user);


        return new UserResponseDTO(
                savedUser.getId(), savedUser.getUsername(), "user register Successfully"
        );


    }


}
