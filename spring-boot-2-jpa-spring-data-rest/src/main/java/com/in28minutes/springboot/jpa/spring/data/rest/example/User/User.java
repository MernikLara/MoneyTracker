package com.in28minutes.springboot.jpa.spring.data.rest.example.User;

import com.in28minutes.springboot.jpa.spring.data.rest.example.Odhod.Odhod;
import com.in28minutes.springboot.jpa.spring.data.rest.example.Prihod.Prihod;
import com.in28minutes.springboot.jpa.spring.data.rest.example.Racun.Racun;
import jakarta.persistence.*;
import net.minidev.json.annotate.JsonIgnore;

import java.util.List;

@Entity
@Table
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;

    private String email;

    private String password;

    private String name;

    private String surname;

    @OneToMany(mappedBy = "Useridprihod")

    private List<Prihod> prihodList;
    @JsonIgnore
    @OneToMany(mappedBy = "Useridodhod")
    private List<Odhod> odhodList;

    @OneToMany(mappedBy = "Useridracun")
    private List<Racun> racunList;


    public User(Long id, String email, String password, String name, String surname, List<Prihod> prihodList, List<Odhod> odhodList, List<Racun> racunList) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.prihodList = prihodList;
        this.odhodList = odhodList;
        this.racunList = racunList;
    }

    public User(String email, String password, String name, String surname, List<Prihod> prihodList, List<Odhod> odhodList, List<Racun> racunList) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.prihodList = prihodList;
        this.odhodList = odhodList;
        this.racunList = racunList;
    }

    public User(Long id, String email, String password, String name, String surname) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
    }

    public User(String email, String password, String name, String surname) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
    }

    public User() {
    }

    public void dodajPrihod(Prihod prihod){
        prihodList.add(prihod);
    }

    public void dodajOdhod(Odhod odhod){
        odhodList.add(odhod);
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public List<Prihod> getPrihodList() {
        return prihodList;
    }

    public void setPrihodList(List<Prihod> prihodList) {
        this.prihodList = prihodList;
    }

    public List<Odhod> getOdhodList() {
        return odhodList;
    }

    public void setOdhodList(List<Odhod> odhodList) {
        this.odhodList = odhodList;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", prihodList=" + prihodList +
                ", odhodList=" + odhodList +
                '}';
    }
}
