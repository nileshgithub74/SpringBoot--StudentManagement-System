package com.nilesh.StudentManagement.exception;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {


    @ExceptionHandler(StudentNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleStudentNotFound(
            StudentNotFoundException ex,
            HttpServletRequest httpServletRequest) {

        ErrorResponse errorResponse = new ErrorResponse(
                LocalDateTime.now(),
                "Student Not found",
                404,
                ex.getMessage(),
                httpServletRequest.getRequestURI()
        );

        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(errorResponse);

    }


    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidationError(MethodArgumentNotValidException ex,
                                                               HttpServletRequest httpServletRequest) {


        String message = String.valueOf(ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(err -> err.getField() +":" + err.getDefaultMessage())
                .toList());

        ErrorResponse errorResponse = new ErrorResponse(
                LocalDateTime.now(),
                "Validation failed",
                HttpStatus.BAD_REQUEST.value(),
                message,
                httpServletRequest.getRequestURI()
        );

        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(errorResponse);


    }


    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGlobaleError(
            Exception ex, HttpServletRequest httpServletRequest) {

        ErrorResponse errorResponse = new ErrorResponse(
                LocalDateTime.now(),
                "Something went wrong",
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                ex.getMessage(),
                httpServletRequest.getRequestURI()
        );

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(errorResponse);


    }


}
