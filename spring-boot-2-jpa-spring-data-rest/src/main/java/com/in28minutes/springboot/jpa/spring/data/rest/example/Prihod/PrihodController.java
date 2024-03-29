package com.in28minutes.springboot.jpa.spring.data.rest.example.Prihod;

import com.in28minutes.springboot.jpa.spring.data.rest.example.Odhod.Odhod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="api/v1/prihod")
@CrossOrigin(origins = "*")
public class PrihodController {


private final PrihodService prihodService;


    @Autowired
    public PrihodController(PrihodService prihodService) {
        this.prihodService = prihodService;

    }

    @GetMapping
    public List<Prihod> getall(){

        return prihodService.getVsi();
    }

    @GetMapping( path = {"{prihodId}"})
    public Optional<Prihod> getbyId(@PathVariable("prihodId") Long prihodId) {
        return this.prihodService.getidPrihod(prihodId);
    }

    @PostMapping
    public long addPrihod(@RequestBody Prihod prihod) {
        System.out.println(prihod);
        Prihod Sprihod = this.prihodService.addPrihod(prihod);
        return Sprihod.getId();
    }

    @DeleteMapping(
            path = {"{prihodId}"}
    )
    public void deletePrihod(@PathVariable("prihodId") Long prihodId) {
        this.prihodService.deletePrihod(prihodId);
    }

    @PutMapping(
            path = {"{prihodId}"}
    )
    public void updatePrihod(@PathVariable("prihodId") Long prihodId, @RequestParam(required = false) String name, @RequestParam(required = false) int value, @RequestParam(required = false) LocalDate date) {
        this.prihodService.updatePrihod(prihodId, name, value, date);
    }


    @GetMapping( path = {"userid/{userId}"})
    public List<Prihod> getbyuserId(@PathVariable("userId") Long useridprihod) {
        return this.prihodService.getidUser(useridprihod);
    }


}
