package com.in28minutes.springboot.jpa.spring.data.rest.example.Racun;

import com.in28minutes.springboot.jpa.spring.data.rest.example.Prihod.Prihod;
import com.in28minutes.springboot.jpa.spring.data.rest.example.User.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="api/v1/racun")
@CrossOrigin(origins = "*")
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


    @PutMapping(path={"/balance/{racunId}"})
    public void updateRacunstanje(@PathVariable("racunId") Long racunId, @RequestParam(required = false) int balance){
        this.racunService.updateRacunstanje(racunId,balance);
    }


    @GetMapping( path = {"/userid/{userId}"})
    public Optional<Racun> getbyId(@PathVariable("userId") Long Userid) {
        return this.racunService.getidUser(Userid);
    }

    @GetMapping(path={"/max/{racunId}"})
    public void getBalance(@PathVariable("racunId") Long racunId){
        this.racunService.getmax(racunId);
    }



}
