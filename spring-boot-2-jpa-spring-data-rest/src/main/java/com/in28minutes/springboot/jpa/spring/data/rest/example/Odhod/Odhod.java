package com.in28minutes.springboot.jpa.spring.data.rest.example.Odhod;

import com.in28minutes.springboot.jpa.spring.data.rest.example.User.User;
import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Date;

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
    private Long useridodhod;
    private Long kategorijaidodhod;
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    private LocalDate date;



    public Odhod(long id, String name, int value, LocalDate date) {
        Id = id;
        this.name = name;
        this.value = value;
        this.date= date;
    }

        public Odhod(String name, int value, LocalDate date,Long useridodhod, Long kategorijaidodhod) {
        this.name = name;
        this.value = value;
        this.date = date;
        this.kategorijaidodhod=kategorijaidodhod;
        this.useridodhod=useridodhod;


    }

    public Odhod() {
    }

    public Long getUseridodhod() {
        return useridodhod;
    }

    public void setUseridodhod(Long useridodhod) {
        useridodhod = useridodhod;
    }

    public Long getKategorijaidodhod() {
        return kategorijaidodhod;
    }

    public void setKategorijaidodhod(Long kategorijaidodhod) {
        kategorijaidodhod = kategorijaidodhod;
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
                ", Useridodhod=" + useridodhod +
                ", Kategorijaidodhod=" + kategorijaidodhod +
                ", date=" + date +
                '}';
    }
}

