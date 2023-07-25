package com.in28minutes.springboot.jpa.spring.data.rest.example.Kategorija;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="api/v1/kategorija")
@CrossOrigin(origins = "*")
public class KategorijaContoller {

    private final KategorijaService kategorijaService;

    @Autowired
    public KategorijaContoller(KategorijaService kategorijaService){
        this.kategorijaService = kategorijaService;
    }

    @GetMapping
    public List<Kategorija> getall(){
        return kategorijaService.getVsi();
    }

    @GetMapping(path={"{kategorijaId}"})
    public Optional<Kategorija> getbyId(@PathVariable("kategorijaId") Long kategorijaId) {return this.kategorijaService.getIdKategorija(kategorijaId);}

    @PostMapping
    public void addKategorija(@RequestBody Kategorija kategorija){
        this.kategorijaService.addKategorija(kategorija);
    }

    @DeleteMapping(path={"kategorijaId"})
    public void deleteKategorija(@PathVariable("kategorijaId") Long kategorijaId){
        this.kategorijaService.deleteKategorija(kategorijaId);
    }

    @PutMapping(path="{kategorijaId}")
    public void updateKategorija(@PathVariable("kategorijaId") Long kategorijaId, @RequestParam(required = false) String name){
        this.kategorijaService.updateKategorija(kategorijaId, name);
    }

    @PutMapping(path="/limit/{kategorijaId}")
    public void updateKategorija(@PathVariable("kategorijaId") Long kategorijaId, @RequestParam(required = false) Long limita){
        this.kategorijaService.updateKategorijalimit(kategorijaId, limita);
    }

    @PostMapping(path = "/addprihod/{kategorijaId}/{prihodId}")
    public void addPrihod(@PathVariable("kategorijaId") Long kategorijaId,@PathVariable("prihodId") Long prihodId){
        kategorijaService.addPrihod(kategorijaId,prihodId);
    }

    @PostMapping(path = "/addodhod/{kategorijaId}/{odhodId}")
    public void addOdhod(@PathVariable("kategorijaId") Long kategorijaId,@PathVariable("odhodId") Long odhodId) {
        kategorijaService.addOdhod(kategorijaId, odhodId);

    }

    @GetMapping(path="/getbyuserid/{userId}")
    public void getUserId(@PathVariable("userId") Long UserId){
        this.kategorijaService.getIdUser(UserId);
    }

}
