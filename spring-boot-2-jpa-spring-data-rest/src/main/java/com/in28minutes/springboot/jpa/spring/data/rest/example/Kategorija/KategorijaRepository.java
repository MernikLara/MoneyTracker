package com.in28minutes.springboot.jpa.spring.data.rest.example.Kategorija;


import com.in28minutes.springboot.jpa.spring.data.rest.example.Odhod.Odhod;
import com.in28minutes.springboot.jpa.spring.data.rest.example.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.util.RouteMatcher;

import java.util.List;
import java.util.Optional;

@Repository
public interface KategorijaRepository extends JpaRepository<Kategorija, Long> {


  List<Kategorija> findKategorijasByUserid(Long userid);
}
