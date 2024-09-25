package com.example.universityranking.model;

public class University {
    private String name;
    private int rank;
    private String location;

    public University(String name, int rank, String location) {
        this.name = name;
        this.rank = rank;
        this.location = location;
    }

    public String getName() {
        return name;
    }

    public int getRank() {
        return rank;
    }

    public String getLocation() {
        return location;
    }
}
