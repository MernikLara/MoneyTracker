package com.in28minutes.springboot.jpa.spring.data.rest.example.Racun;

import com.in28minutes.springboot.jpa.spring.data.rest.example.Prihod.Prihod;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class RacunService {

    private final RacunRepository racunRepository;

    @Autowired
    public RacunService(RacunRepository racunRepository){
    this.racunRepository = racunRepository;
    }

    public List<Racun> getVsi(){
        return racunRepository.findAll();
    }

    public void addRacun(Racun racun) {

        this.racunRepository.save(racun);

    }

    public void deleteRacun(Long racunId){
        boolean obstaja = this.racunRepository.existsById(racunId);
        if(!obstaja){
            throw new IllegalStateException("Racun s id: " + racunId + " ne obstaja.");
        } else {
            this.racunRepository.deleteById(racunId);
        }
    }

    @Transactional
    public void updateRacunime(Long racunId, String name){

        Racun racun = racunRepository.findById(racunId).orElseThrow(() -> new IllegalStateException("Racun s id: " + racunId + " ne obstaja."));

        if (name != null && name.length() > 0 && !Objects.equals(racun.getName(), name)){
            racun.setName(name);
        }else{
            throw new IllegalStateException("Neveljaven vnos idk");
        }

    }

    @Transactional
    public void updateRacunstanje(Long racunId, int balance){

        Racun racun = racunRepository.findById(racunId).orElseThrow(() -> new IllegalStateException("Racun s id: " + racunId + " ne obstaja."));

        if (!Objects.equals(racun.getBalance(), balance)){
            racun.setBalance(balance);
        }else{
            throw new IllegalStateException("Neveljaven vnos idk");
        }

    }

}
