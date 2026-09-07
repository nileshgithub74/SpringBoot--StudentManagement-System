package com.nilesh.StudentManagement.exception;

import org.springframework.stereotype.Component;


public class StudentNotFoundException extends  RuntimeException{

    public  StudentNotFoundExcetion(String message){
        super(message);
    }


}
