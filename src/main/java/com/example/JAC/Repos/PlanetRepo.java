package com.example.JAC.Repos;

import com.example.JAC.Entities.Planet;
import org.springframework.data.repository.CrudRepository;

public interface PlanetRepo extends CrudRepository<Planet, String> {
}
