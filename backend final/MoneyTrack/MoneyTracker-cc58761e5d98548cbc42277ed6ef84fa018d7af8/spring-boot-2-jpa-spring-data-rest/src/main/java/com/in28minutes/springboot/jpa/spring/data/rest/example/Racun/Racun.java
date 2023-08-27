package com.in28minutes.springboot.jpa.spring.data.rest.example.Racun;


import com.in28minutes.springboot.jpa.spring.data.rest.example.User.User;
import jakarta.persistence.*;

@Entity
@Table
public class Racun {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    private int balance;

    private Long userid;

    private int max;


    public Racun(Long id, int balance, int max) {
        this.id = id;
        this.balance = balance;
        this.max = max;
    }

    public Racun(int balance, int max) {
        this.balance = balance;
        this.max = max;
    }

    public Racun() {
    }

    public Long getUserId() {
        return userid;
    }

    public void setUserId(Long userId) {
        this.userid = userId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getMax() {
        return max;
    }

    public void setMax(int max) {
        this.max = max;
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
                ", balance=" + balance +
                ", userid=" + userid +
                ", max=" + max +
                '}';
    }
}
