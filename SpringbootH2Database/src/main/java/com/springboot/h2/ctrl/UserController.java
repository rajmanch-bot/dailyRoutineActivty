package com.springboot.h2.ctrl;

import com.springboot.h2.model.User;
import com.springboot.h2.serv.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class UserController {

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    UserService service;

    @PostMapping(value= "/user/save")
    public int save(final @RequestBody @Valid User user) {
        log.info("Saving student details in the database.");
        service.save(user);
        return user.getId();
    }

    @GetMapping(value= "/user/{id}", produces= "application/vnd.jcg.api.v1+json")
    public User getUser(@PathVariable(name="id") Integer id) {
        log.info("Getting student detail from the database for {0}.",id);
        return service.findById(id);
    }


    @GetMapping(value= "/user/getAll", produces= "application/vnd.jcg.api.v1+json")
    public List<User> getAll() {
        log.info("Getting student details from the database.");
        return service.getAll();
    }
}