package com.example.JAC.restControllers;

import com.example.JAC.Entities.Planet;
import com.example.JAC.Repos.PlanetRepo;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

@RestController
//@RequestMapping("https://images-api.nasa.gov/asset")
public class PlanetController {
    final private PlanetRepo planetRepo;
    final String nasaApi = "https://images-api.nasa.gov/asset/{nasa_id}";
    final  String imageLink = "https://images-api.nasa.gov/metadata/{nasa_id}";
    public PlanetController(final @Autowired PlanetRepo planetRepo) {
        this.planetRepo = planetRepo;
    }
    @Autowired
    private WebClient.Builder webClientBuilder;
    @GetMapping ("/asset/{nasa_id}")
    public String getPlanet(@PathVariable("nasa_id") String nasaId) throws JsonProcessingException {
        String json = webClientBuilder.build()
                .get()
                .uri(nasaApi, nasaId)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        Asset asset = (new ObjectMapper()).readValue(json, Asset.class);
        System.out.println(asset);

        return json;
    }
    @GetMapping ("/image/{nasa_id}")
    public String getPlanetImage(@PathVariable("nasa_id") String nasaId){
        return webClientBuilder.build()
                .get()
                .uri(imageLink,nasaId)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
