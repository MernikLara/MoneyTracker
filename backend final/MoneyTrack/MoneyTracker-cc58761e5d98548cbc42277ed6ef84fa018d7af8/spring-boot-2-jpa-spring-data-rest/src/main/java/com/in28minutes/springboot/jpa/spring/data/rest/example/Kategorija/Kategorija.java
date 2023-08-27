package com.in28minutes.springboot.jpa.spring.data.rest.example.Kategorija;

import com.in28minutes.springboot.jpa.spring.data.rest.example.Odhod.Odhod;
import com.in28minutes.springboot.jpa.spring.data.rest.example.Prihod.Prihod;
import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;

import java.util.ArrayList;
import java.util.List;

@Table
@Entity
public class Kategorija {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;

    private String name;

    private Long userid;

    private Long limita;

    //true = prihod :)
    //false = odhod :(
    private boolean tip;

     @ElementCollection
    private  List<Long> prihodList;

    @ElementCollection
    private List<Long> odhodList;

    public Kategorija(Long id, String name, Long userid, Long limita, boolean tip , List<Long> prihodList, List<Long> odhodList) {
        this.id = id;
        this.name = name;
        this.limita = limita;
        this.tip = tip;
        this.prihodList = prihodList;
        this.odhodList = odhodList;
        this.userid = userid;
    }




    public Kategorija(String name,Long userid, Long limita, boolean tip, List<Long> prihodList, List<Long> odhodList) {
          this.name = name;
          this.limita = limita;
          this.tip = tip;
          this.prihodList=prihodList;
          this.odhodList = odhodList;
          this.userid = userid;
      }

      public Kategorija(Long id, String name, Long limita, boolean tip ,Long userid) {
          this.id = id;
          this.name = name;
          this.limita = limita;
          this.tip = tip;
          this.userid = userid;
      }

      public Kategorija(String name,Long limita, boolean tip,Long userid) {
          this.name = name;
          this.limita = limita;
          this.tip = tip;
          this.userid = userid;
      }

      public Kategorija() {
      }

    public void dodajPrihod(Long prihodid){
        prihodList.add(prihodid);
    }

    public void dodajOdhod(Long odhodid){
        odhodList.add(odhodid);
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

    public List<Long> getPrihodList() {
        return prihodList;
    }

    public List<Long> getOdhodList() {
        return odhodList;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
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
                ", userid=" + userid +
                ", limita=" + limita +
                ", tip=" + tip +
                ", prihodList=" + prihodList +
                ", odhodList=" + odhodList +
                '}';
    }
}
