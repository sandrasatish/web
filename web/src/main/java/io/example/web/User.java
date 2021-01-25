package io.example.web;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor

public class User {

    @Id
    private String id;
    private String name;
    private String dob;
    private String class1;
    private String division;
    private String gender;

}
