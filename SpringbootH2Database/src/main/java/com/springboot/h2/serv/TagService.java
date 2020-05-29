package com.springboot.h2.serv;

import com.springboot.h2.model.Routine;
import com.springboot.h2.model.Tag;
import com.springboot.h2.repo.RoutineRepository;
import com.springboot.h2.repo.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TagService {

    @Autowired
    private TagRepository repository;

    public void save(final Tag tag) {
        tag.setDated(LocalDateTime.now());
        repository.save(tag);
    }

    public Tag findById(Integer id) {
        Optional<Tag> byId = repository.findById(id);
        if (byId.isPresent()) {
            return byId.get();
        }
        return new Tag();
    }
       public List<Tag> getAll() {
        final List<Tag> tags = new ArrayList<>();
        repository.findAll().forEach(s -> tags.add(s));
        return tags;
    }
}