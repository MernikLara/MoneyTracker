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

    private Long limita;

    //true = prihod :)
    //false = odhod :(
    private boolean tip;

    @OneToMany(mappedBy = "Kategorijaidprihod")
    private List<Prihod> prihodList;

    @OneToMany(mappedBy = "Kategorijaidodhod")
    private List<Odhod> odhodList;

    public Kategorija(Long id, String name, Long userId, Long limita, boolean tip , List<Prihod> prihodList, List<Odhod> odhodList) {
        this.id = id;
        this.name = name;
        this.userId = userId;
        this.limita = limita;
        this.tip = tip;
        this.prihodList = prihodList;
        this.odhodList = odhodList;
    }


    public Kategorija(String name,Long userId, Long limita, boolean tip, List<Prihod> prihodList, List<Odhod> odhodList) {
        this.name = name;
        this.userId = userId;
        this.limita = limita;
        this.tip = tip;
        this.prihodList = prihodList;
        this.odhodList = odhodList;
    }

    public Kategorija(Long id, String name, Long limita, boolean tip ,Long userId) {
        this.id = id;
        this.name = name;
        this.limita = limita;
        this.tip = tip;
        this.userId = userId;
    }

    public Kategorija(String name,Long limita, boolean tip,Long userId) {
        this.name = name;
        this.limita = limita;
        this.tip = tip;
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

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getLimita() {
        return limita;
    }

    public void setLimita(Long limit) {
        this.limita = limit;
    }

    public boolean isTip() {
        return tip;
    }

    public void setTip(boolean tip) {
        this.tip = tip;
    }

    @Override
    public String toString() {
        return "Kategorija{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", userId=" + userId +
                ", limita=" + limita +
                ", tip=" + tip +
                ", prihodList=" + prihodList +
                ", odhodList=" + odhodList +
                '}';
    }
}
