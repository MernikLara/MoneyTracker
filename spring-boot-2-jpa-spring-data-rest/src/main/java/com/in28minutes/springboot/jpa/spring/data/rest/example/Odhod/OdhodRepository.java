package com.in28minutes.springboot.jpa.spring.data.rest.example.Odhod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface OdhodRepository extends JpaRepository<Odhod, Long> {
 List<Odhod> findOdhodsByUserId(Long userId);
}

