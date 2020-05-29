package com.springboot.h2.serv;

import com.springboot.h2.model.Routine;
import com.springboot.h2.repo.RoutineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RoutineService {

    @Autowired
    private RoutineRepository repository;

    public void save(final Routine routine) {
        routine.setDated(LocalDateTime.now());
        repository.save(routine);
    }

    public Routine findById(Integer id) {
        Optional<Routine> byId = repository.findById(id);
        if (byId.isPresent()) {
            return byId.get();
        }
        return new Routine();
    }
    public List<Routine> getRoutines(Integer userId) {
        final List<Routine> routines = new ArrayList<>();
        repository.fetchRoutines(userId).forEach(student -> routines.add(student));
        return routines;
    }

    public List<Routine> getAll() {
        final List<Routine> routines = new ArrayList<>();
        repository.findAll().forEach(r -> routines.add(r));
        return routines;
    }
}
