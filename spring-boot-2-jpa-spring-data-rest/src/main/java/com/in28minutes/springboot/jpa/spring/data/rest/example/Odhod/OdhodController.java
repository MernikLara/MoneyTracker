package com.in28minutes.springboot.jpa.spring.data.rest.example.Odhod;


import com.in28minutes.springboot.jpa.spring.data.rest.example.Prihod.Prihod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="api/v1/odhod")
@CrossOrigin(origins = "*")
public class OdhodController {
    private final OdhodService odhodService;

    @Autowired
    public OdhodController(OdhodService odhodService){
        this.odhodService = odhodService;
    }
    @GetMapping
    public List<Odhod> getall(){

        return odhodService.getVsi();
    }

    @GetMapping( path = {"{odhodId}"})
    public Optional<Odhod> getbyId(@PathVariable("odhodId") Long odhodId) {
        return this.odhodService.getidOdhod(odhodId);
    }

    @PostMapping
    public void addOdhod(@RequestBody Odhod Odhod) {

        this.odhodService.addOdhod(Odhod);
    }

    @DeleteMapping(
            path = {"{odhodId}"}
    )
    public void deleteOdhod(@PathVariable("OdhodId") Long odhodId) {
        this.odhodService.deleteOdhod(odhodId);
    }

    @PutMapping(
            path = {"{odhodId}"}
    )
    public void updateOdhod(@PathVariable("odhodId") Long odhodId, @RequestParam(required = false) String name, @RequestParam(required = false) int value) {
        this.odhodService.updateOdhod(odhodId, name, value);
    }


    @GetMapping(path="/getbyuserid/{userId}")
    public List<Odhod> getUserId(@PathVariable("userId") Long UserId){
      return this.odhodService.getIdUser(UserId);
    }


}
