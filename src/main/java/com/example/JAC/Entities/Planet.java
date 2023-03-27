package com.example.JAC.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Planet {
    String name;
    String description;
    @Id
    String id;

    public Planet(String name, String description, String id) {
        this.name = name;
        this.description = description;
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }
}
