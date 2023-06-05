package com.in28minutes.springboot.jpa.spring.data.rest.example.Racun;

import com.in28minutes.springboot.jpa.spring.data.rest.example.Prihod.Prihod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="api/v1/racun")
public class RacunController {

    private final RacunService racunService;

    @Autowired
    public RacunController(RacunService racunService){
        this.racunService = racunService;
    }

    @GetMapping
    public List<Racun> getall(){
        return racunService.getVsi();
    }

    @PostMapping
    public void addRacun(@RequestBody Racun racun) {

        this.racunService.addRacun(racun);
    }

    @DeleteMapping ( path = {"{prihodId}"})
    public void deleteRacun(@PathVariable("racunId") Long racunId){
        this.racunService.deleteRacun(racunId);
    }

    @PutMapping(path={"/name/{racunId}"})
    public void updateRacunime(@PathVariable("racunId") Long racunId, @RequestParam(required = false) String name){
        this.racunService.updateRacunime(racunId,name);
    }


    @PutMapping(path={"/balance/{racunId}"})
    public void updateRacunstanje(@PathVariable("racunId") Long racunId, @RequestParam(required = false) int balance){
        this.racunService.updateRacunstanje(racunId,balance);
    }
}
