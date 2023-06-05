package com.in28minutes.springboot.jpa.spring.data.rest.example.Kategorija;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface KategorijaRepository extends JpaRepository<Kategorija, Long> {


}
