package com.in28minutes.springboot.jpa.spring.data.rest.example.Racun;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RacunRepository extends JpaRepository<Racun, Long> {
}
