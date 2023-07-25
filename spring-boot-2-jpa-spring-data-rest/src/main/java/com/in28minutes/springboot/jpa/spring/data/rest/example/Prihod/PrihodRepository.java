package com.in28minutes.springboot.jpa.spring.data.rest.example.Prihod;

import com.in28minutes.springboot.jpa.spring.data.rest.example.Odhod.Odhod;
import com.in28minutes.springboot.jpa.spring.data.rest.example.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PrihodRepository extends JpaRepository<Prihod, Long> {

  Optional<Prihod> findPrihodsByUser (Long userId);
}
