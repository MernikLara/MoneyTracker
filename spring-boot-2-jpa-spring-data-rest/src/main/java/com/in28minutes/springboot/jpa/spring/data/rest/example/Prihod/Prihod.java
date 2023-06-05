package com.in28minutes.springboot.jpa.spring.data.rest.example.Prihod;

import com.in28minutes.springboot.jpa.spring.data.rest.example.User.User;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table
public class Prihod {
    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO
    )
    private Long id;
    private String name;
    private int value;
    private LocalDate date;
    private int Useridprihod;
    private int Kategorijaidprihod;

    @ManyToOne
    @JoinColumn(name = "Userid")
    private User user;


    public Prihod(Long id, String name, int value, LocalDate date) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.date = date;
    }

    public Prihod(String name, int value, LocalDate date) {
        this.name = name;
        this.value = value;
        this.date = date;
    }

    public Prihod() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Prihod{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", value=" + value +
                ", date=" + date +
                '}';
    }
}
