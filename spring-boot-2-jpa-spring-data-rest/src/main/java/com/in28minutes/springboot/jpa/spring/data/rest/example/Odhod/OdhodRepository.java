package com.in28minutes.springboot.jpa.spring.data.rest.example.Odhod;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OdhodRepository extends JpaRepository<Odhod, Long> {


}
