package com.in28minutes.springboot.jpa.spring.data.rest.example.Racun;

import com.in28minutes.springboot.jpa.spring.data.rest.example.User.User;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RacunRepository extends JpaRepository<Racun, Long> {

    Optional<Racun> findRacunsByUserid(Long Userid); // :)
}
