package com.in28minutes.springboot.jpa.spring.data.rest.example.Kategorija;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class KategorijaService {
    private final KategorijaRepository kategorijaRepository;

    @Autowired
    public KategorijaService(KategorijaRepository kategorijaRepository) {
        this.kategorijaRepository = kategorijaRepository;
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

}
