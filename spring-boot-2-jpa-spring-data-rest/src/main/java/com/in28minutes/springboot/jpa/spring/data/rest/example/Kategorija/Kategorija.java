package com.in28minutes.springboot.jpa.spring.data.rest.example.Kategorija;

import com.in28minutes.springboot.jpa.spring.data.rest.example.Odhod.Odhod;
import com.in28minutes.springboot.jpa.spring.data.rest.example.Prihod.Prihod;
import jakarta.persistence.*;

import java.util.List;

@Table
@Entity
public class Kategorija {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;

    private String name;

    private Long userId;

    @OneToMany(mappedBy = "Kategorijaidprihod")
    private List<Prihod> prihodList;

    @OneToMany(mappedBy = "Kategorijaidodhod")
    private List<Odhod> odhodList;

    public Kategorija(Long id, String name, Long userId, List<Prihod> prihodList, List<Odhod> odhodList) {
        this.id = id;
        this.name = name;
        this.userId = userId;
        this.prihodList = prihodList;
        this.odhodList = odhodList;
    }


    public Kategorija(String name,Long userId, List<Prihod> prihodList, List<Odhod> odhodList) {
        this.name = name;
        this.userId = userId;
        this.prihodList = prihodList;
        this.odhodList = odhodList;
    }

    public Kategorija(Long id, String name,Long userId) {
        this.id = id;
        this.name = name;
        this.userId = userId;
    }

    public Kategorija(String name,Long userId) {
        this.name = name;
        this.userId = userId;
    }

    public Kategorija() {
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
        return "Kategorija{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", prihodList=" + prihodList +
                ", odhodList=" + odhodList +
                '}';
    }
}
