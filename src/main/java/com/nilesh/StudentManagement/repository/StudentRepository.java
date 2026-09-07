package com.nilesh.StudentManagement.repository;

import com.nilesh.StudentManagement.dto.StudentResponseDTO;
import com.nilesh.StudentManagement.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    List<Student> findByNameContainingIgnoreCase(String name);

    List<Student> findByAgeGreaterThanEqual(int age);

    List<Student> findByCourse(String course);


    @Query(
            """
                      select s from Student  s
                      where s.age >= :age and LOWER( s.course)  = LOWER(:course)
                    
                    """
    )
    List<Student> findByAgeAndCourseIgnoreCase(
            @Param("age") Integer age,
            @Param("course") String course);
}
