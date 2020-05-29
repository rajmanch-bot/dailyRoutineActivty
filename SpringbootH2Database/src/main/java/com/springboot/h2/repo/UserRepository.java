package com.springboot.h2.repo;

import com.springboot.h2.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    @Query("SELECT a FROM User a WHERE a.firstName=:firstName")
    List<User> fetchUsers(@Param("firstName") String firstName);
}