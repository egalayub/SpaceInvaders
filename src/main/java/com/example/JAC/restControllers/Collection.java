package com.example.JAC.restControllers;

import java.util.List;

public class Collection {
    @Override
    public String toString() {
        return "Collection{" +
                "version='" + version + '\'' +
                ", href='" + href + '\'' +
                ", items=" + items +
                '}';
    }

    public String version;
    public String href;
    public List<Item> items;
}
