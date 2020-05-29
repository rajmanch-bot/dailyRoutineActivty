package com.springboot.h2.ctrl;

import com.springboot.h2.model.Routine;
import com.springboot.h2.serv.RoutineService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;

@RestController
public class RoutineController {
    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private RoutineService service;

    @PostMapping(value = "/routine/save")
    public int save(final @RequestBody @Valid Routine routine) {
        log.info("Saving student details in the database.");
        routine.setDated(LocalDateTime.now());
        service.save(routine);
        return routine.getId();
    }

    @GetMapping(value = "/routine/{id}", produces = "application/vnd.jcg.api.v1+json")
    public Routine getRoutine(@PathVariable(name = "id") Integer id) {
        log.info("Getting student detail from the database for {0}.", id);
        return service.findById(id);
    }

    @GetMapping(value = "/routine/routines/{userId}", produces = "application/vnd.jcg.api.v1+json")
    public List<Routine> getRoutines(@PathVariable(name = "userId") Integer userId) {
        return service.getRoutines(userId);
    }

    @GetMapping(value = "/routine/getAll", produces = "application/vnd.jcg.api.v1+json")
    public List<Routine> getAll() {
        log.info("Getting student details from the database.");
        return service.getAll();
    }
}