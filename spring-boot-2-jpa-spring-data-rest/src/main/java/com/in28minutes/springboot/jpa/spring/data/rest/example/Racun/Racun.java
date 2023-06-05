package com.in28minutes.springboot.jpa.spring.data.rest.example.Racun;


import com.in28minutes.springboot.jpa.spring.data.rest.example.User.User;
import jakarta.persistence.*;

@Entity
@Table
public class Racun {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private int balance;

    private int Useridracun;
    @ManyToOne
    @JoinColumn(name = "Userid")
    private User user;

    public Racun(Long id, String name, int balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    public Racun(String name, int balance) {
        this.name = name;
        this.balance = balance;
    }

    public Racun() {
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

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }

    @Override
    public String toString() {
        return "Racun{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", balance=" + balance +
                '}';
    }
}
