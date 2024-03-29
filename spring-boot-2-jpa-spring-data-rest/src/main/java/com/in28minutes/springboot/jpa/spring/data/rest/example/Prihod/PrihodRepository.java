package com.in28minutes.springboot.jpa.spring.data.rest.example.Prihod;

import com.in28minutes.springboot.jpa.spring.data.rest.example.Odhod.Odhod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrihodRepository extends JpaRepository<Prihod, Long> {

    List<Prihod> findPrihodsByUseridprihod(Long useridprihod);
}
