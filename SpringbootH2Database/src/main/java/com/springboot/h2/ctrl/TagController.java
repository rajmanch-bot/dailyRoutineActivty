package com.springboot.h2.ctrl;

import com.springboot.h2.model.Tag;
import com.springboot.h2.serv.TagService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class TagController {

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private TagService service;

    @PostMapping(value = "/tag/save")
    public int save(final @RequestBody @Valid Tag tag) {
        log.info("Saving Tag details in the database.");
        service.save(tag);
        return tag.getId();
    }

    @GetMapping(value = "/tag/getall", produces = "application/vnd.jcg.api.v1+json")
    public List<Tag> getAll() {
        log.info("Getting student details from the database.");
        return service.getAll();
    }
}