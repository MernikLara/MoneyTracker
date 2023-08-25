package com.in28minutes.springboot.jpa.spring.data.rest.example.Odhod;

import com.in28minutes.springboot.jpa.spring.data.rest.example.Prihod.Prihod;
import com.in28minutes.springboot.jpa.spring.data.rest.example.Racun.Racun;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class OdhodService {
    private final OdhodRepository odhodRepository;

    @Autowired
    public OdhodService(OdhodRepository odhodRepository){
        this.odhodRepository = odhodRepository;
    }

    public List<Odhod> getVsi(){
        return odhodRepository.findAll();
    }

    public Optional<Odhod> getidOdhod(Long odhodId) {
        boolean obstaja = odhodRepository.existsById(odhodId);
        if(!obstaja){
            throw new IllegalStateException("Odhod s id: " + odhodId + " ne obstaja." );
        }
        return odhodRepository.findById(odhodId);
    }


    public void addOdhod(Odhod odhod) {

        this.odhodRepository.save(odhod);

    }
    public void deleteOdhod(Long odhodId) {
        boolean obstaja = this.odhodRepository.existsById(odhodId);
        if (!obstaja) {
            throw new IllegalStateException("Odihod s id: " + odhodId + " ne obstaja.");
        } else {
            this.odhodRepository.deleteById(odhodId);
        }
    }

    @Transactional
    public void updateOdhod(Long odhodId, String name, int value) {

        Odhod odhod = odhodRepository.findById(odhodId).orElseThrow(() -> new IllegalStateException("Odhod s id: " + odhodId + " ne obstaja."));


        if (name != null && name.length() > 0 && !Objects.equals(odhod.getName(), name)){
            odhod.setName(name);
            odhod.setValue(value);
        }
        else{
            throw new IllegalStateException("Neveljaven vnos idk");
        }

    }

    public List<Odhod> getidUser(Long useridodhod) {

        return odhodRepository.findOdhodsByUseridodhod(useridodhod);
    }

}
