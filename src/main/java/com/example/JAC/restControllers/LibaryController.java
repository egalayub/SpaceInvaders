package com.example.JAC.restControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

@RestController
public class LibaryController {
    final String bookLink = "https://www.googleapis.com/books/v1/volumes?q=isbn:{bookId}";
    @Autowired
    private WebClient.Builder webClientBuilder;

    @GetMapping( value = "/book/{bookId}", produces="application/json")
    public String getPlanet(@PathVariable("bookId") String bookId){
        return webClientBuilder.build()
                .get()
                .uri(bookLink,bookId)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
