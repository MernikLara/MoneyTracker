package com.in28minutes.springboot.jpa.spring.data.rest.example.Prihod;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.Optional;


@Service
public class PrihodService {
    private final PrihodRepository prihodRepository;


    @Autowired
    public PrihodService(PrihodRepository prihodRepository) {
        this.prihodRepository = prihodRepository;
    }

    public List<Prihod> getVsi(){
        return prihodRepository.findAll();
    }

    public Optional<Prihod> getidPrihod(Long prihodId) {
        boolean obstaja = prihodRepository.existsById(prihodId);
        if(!obstaja){
            throw new IllegalStateException("Prihod s id: " + prihodId + " ne obstaja." );
        }
        return prihodRepository.findById(prihodId);
    }


    public void addPrihod(Prihod prihod) {

            this.prihodRepository.save(prihod);

    }
    public void deletePrihod(Long prihodId) {
        boolean obstaja = this.prihodRepository.existsById(prihodId);
        if (!obstaja) {
            throw new IllegalStateException("Prihod s id: " + prihodId + " ne obstaja.");
        } else {
            this.prihodRepository.deleteById(prihodId);
        }
    }

    @Transactional
    public void updatePrihod(Long prihodId, String name, int value, LocalDate date) {

        Prihod prihod = prihodRepository.findById(prihodId).orElseThrow(() -> new IllegalStateException("Prihod s id: " + prihodId + " ne obstaja."));


        if (name != null && name.length() > 0 && !Objects.equals(prihod.getName(), name)){
            prihod.setName(name);
            prihod.setValue(value);
            prihod.setDate(date);
        }
        else{
            throw new IllegalStateException("Neveljaven vnos idk");
        }

    }

    public List<Prihod> getIdUser(Long userId) {

        return prihodRepository.findPrihodsByUserId(userId);
    }



}
