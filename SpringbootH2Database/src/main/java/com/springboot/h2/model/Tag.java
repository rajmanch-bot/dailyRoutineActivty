package com.springboot.h2.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
public class Tag implements Serializable {

    @Id
    @GeneratedValue
    private int id;
    private String name;
    private LocalDateTime dated;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDateTime getDated() {
        return dated;
    }

    public void setDated(LocalDateTime dated) {
        this.dated = dated;
    }
}