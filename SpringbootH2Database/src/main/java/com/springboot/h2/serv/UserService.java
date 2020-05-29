package com.springboot.h2.serv;

import com.springboot.h2.model.User;
import com.springboot.h2.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    // @Autowired annotation provides the automatic dependency injection.
    @Autowired
    private UserRepository repository;

    // Save student entity in the h2 database.
    public void save(final User user) {
        user.setDated(LocalDateTime.now());
        repository.save(user);
    }

    // Get all students from the h2 database.
    public User findById(Integer id) {
        Optional<User> byId = repository.findById(id);
        if (byId.isPresent()) {
            return byId.get();
        }
        return new User();
    }

    // Get all students from the h2 database.
    public List<User> getAll() {
        final List<User> users = new ArrayList<>();
//        User user = new User();
//        user.setFirstName("Narendra");
//        user.setLastName("Chouhan");
//        user.setEmail("test@text.com");
//        user.setPassword("test@123");
//        user.setPhoneNumber("12345670");
//        user.setStartTime(LocalTime.now());
//        user.setEndTime(LocalTime.now().plusHours(9));
//        user.setDated(LocalDateTime.now());
//        repository.save(user);

        repository.findAll().forEach(u -> users.add(u));
        return users;
    }
}
