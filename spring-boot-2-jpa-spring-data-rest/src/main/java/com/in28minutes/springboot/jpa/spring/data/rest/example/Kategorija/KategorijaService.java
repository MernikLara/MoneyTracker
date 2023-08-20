package com.in28minutes.springboot.jpa.spring.data.rest.example.Kategorija;

import com.in28minutes.springboot.jpa.spring.data.rest.example.Odhod.OdhodRepository;
import com.in28minutes.springboot.jpa.spring.data.rest.example.Prihod.PrihodRepository;
import com.in28minutes.springboot.jpa.spring.data.rest.example.User.User;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class KategorijaService {
    private final KategorijaRepository kategorijaRepository;
    private final PrihodRepository prihodRepository;
    private final OdhodRepository odhodRepository;

    @Autowired
    public KategorijaService(KategorijaRepository kategorijaRepository, PrihodRepository prihodRepository, OdhodRepository odhodRepository) {
        this.kategorijaRepository = kategorijaRepository;
        this.prihodRepository = prihodRepository;
        this.odhodRepository = odhodRepository;
    }

    public List<Kategorija> getVsi() {
        return kategorijaRepository.findAll();
    }



    public Optional<Kategorija> getIdKategorija(Long kategorijaId) {
        boolean obstaja = kategorijaRepository.existsById(kategorijaId);
        if (!obstaja) {
            throw new IllegalStateException("Kategorija s id: " + kategorijaId + " ne obstaja.");
        }
        return kategorijaRepository.findById(kategorijaId);
    }


    public void addKategorija(Kategorija kategorija) {

        this.kategorijaRepository.save(kategorija);
    }

    public void deleteKategorija(Long kategorijaId){
        Boolean obstaja = this.kategorijaRepository.existsById(kategorijaId);
        if(!obstaja){
            throw new IllegalStateException("Kategorija s id: " + kategorijaId + " ne obstaja.");
        }else{
            this.kategorijaRepository.deleteById(kategorijaId);
        }
    }

    @Transactional
    public void updateKategorija(Long kategorijaId, String name){
        Kategorija kategorija = kategorijaRepository.findById(kategorijaId).orElseThrow(() -> new IllegalStateException("Kategorija s id: " + kategorijaId + " ne obstaja.") );

        if(name != null && name.length() > 0 && !Objects.equals(kategorija.getName(), name)){
            kategorija.setName(name);
        }else{
            throw new IllegalStateException("Neveljaven vnos idk");
        }
    }

    @Transactional
    public void updateKategorijalimit(Long kategorijaId, Long limita){
        Kategorija kategorija = kategorijaRepository.findById(kategorijaId).orElseThrow(() -> new IllegalStateException("Kategorija s id: " + kategorijaId + " ne obstaja.") );

        if( !Objects.equals(kategorija.getLimita(), limita)){
            kategorija.setLimita(limita);
        }else{
            throw new IllegalStateException("Neveljaven vnos idk");
        }
    }


    public void addPrihod(Long kategorijaId, Long prihodId) {
       Kategorija kategorija = kategorijaRepository.findById(kategorijaId).orElseThrow(() -> new IllegalStateException("User s id: " +kategorijaId + " ne obstaja.") );

        kategorija.dodajPrihod(prihodRepository.findById(prihodId).orElseThrow(() -> new IllegalStateException("Prihod s id: " + prihodId + " ne obstaja.") ));

    }

    public void addOdhod(Long kategorijaId, Long odhodId) {

        Kategorija kategorija = kategorijaRepository.findById(kategorijaId).orElseThrow(() -> new IllegalStateException("User s id: " +kategorijaId + " ne obstaja.") );

        kategorija.dodajOdhod(odhodRepository.findById(odhodId).orElseThrow(() -> new IllegalStateException("Prihod s id: " + odhodId + " ne obstaja.") ));

    }

    public List<Kategorija> getIdUser(Long UserId) {
        boolean obstaja = kategorijaRepository.existsById(UserId);
        if (!obstaja) {
            throw new IllegalStateException("Kategorija s id: " + UserId + " ne obstaja.");
        }
        return kategorijaRepository.findKategorijasByUserId(UserId);
    }
}
