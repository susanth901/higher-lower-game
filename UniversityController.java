package com.example.universityranking.controller;

import com.example.universityranking.model.University;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")  // Allow requests from the frontend
public class UniversityController {

    @GetMapping("/universities")
    public List<University> getUniversities() {
        return List.of(
            new University("Harvard University", 1, "Cambridge, MA"),
            new University("Stanford University", 2, "Stanford, CA"),
            new University("MIT", 3, "Cambridge, MA"),
            new University("Princeton University", 4, "Princeton, NJ"),
            new University("Yale University", 5, "New Haven, CT"),
            new University("Columbia University", 6, "New York, NY"),
            new University("University of Chicago", 7, "Chicago, IL"),
            new University("University of Pennsylvania", 8, "Philadelphia, PA")
        );
    }
}
