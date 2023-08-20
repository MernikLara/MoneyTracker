package com.in28minutes.springboot.jpa.spring.data.rest.example.Odhod;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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


    public int Useridodhod;
    private int Kategorijaidodhod;

    @Column(name = "userid")
    private long userId;

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public Odhod(long id, String name, int value) {
        Id = id;
        this.name = name;
        this.value = value;
    }

    public Odhod(long id, String name, int value, int useridodhod, int kategorijaidodhod, long userId) {
        Id = id;
        this.name = name;
        this.value = value;
        Useridodhod = useridodhod;
        Kategorijaidodhod = kategorijaidodhod;
        this.userId = userId;
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

    public int getUseridodhod() {
        return Useridodhod;
    }

    public void setUseridodhod(int useridodhod) {
        this.Useridodhod = useridodhod;
    }

    public int getKategorijaidodhod() {
        return Kategorijaidodhod;
    }

    public void setKategorijaidodhod(int kategorijaidodhod) {
        Kategorijaidodhod = kategorijaidodhod;
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

