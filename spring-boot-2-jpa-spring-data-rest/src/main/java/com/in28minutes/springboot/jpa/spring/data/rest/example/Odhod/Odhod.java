package com.in28minutes.springboot.jpa.spring.data.rest.example.Odhod;

import com.in28minutes.springboot.jpa.spring.data.rest.example.User.User;
import jakarta.persistence.*;

@Entity
@Table
public class Odhod {
    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO
    )
    private long Id;
    private String name;
    private int value;
    private int Useridodhod;
    private int Kategorijaidodhod;

    @ManyToOne
    @JoinColumn(name = "Userid")
    private User user;


    public Odhod(long id, String name, int value) {
        Id = id;
        this.name = name;
        this.value = value;
    }

    public Odhod(String name, int value) {
        this.name = name;
        this.value = value;
    }

    public Odhod() {
    }

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "Odhod{" +
                "Id=" + Id +
                ", name='" + name + '\'' +
                ", value=" + value +
                '}';
    }
}

