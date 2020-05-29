package com.springboot.h2.repo;

import com.springboot.h2.model.Routine;
import com.springboot.h2.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoutineRepository extends CrudRepository<Routine, Integer> {

    @Query("SELECT a FROM Routine a WHERE a.userId=:userId")
    List<Routine> fetchRoutines(@Param("userId") Integer userId);
}