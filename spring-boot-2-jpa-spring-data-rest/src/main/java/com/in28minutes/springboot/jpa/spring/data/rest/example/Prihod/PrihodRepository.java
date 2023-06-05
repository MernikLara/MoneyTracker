package com.in28minutes.springboot.jpa.spring.data.rest.example.Prihod;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrihodRepository extends JpaRepository<Prihod, Long> {


}
