package com.in28minutes.springboot.jpa.spring.data.rest.example.User;

import com.in28minutes.springboot.jpa.spring.data.rest.example.Prihod.Prihod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="api/v1/user")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping
    public List<User> getall(){

        return userService.getVsi();
    }

    @GetMapping( path = {"{userId}"})
    public Optional<User> getbyId(@PathVariable("userId") Long userId) {
        return this.userService.getidUser(userId);
    }

    @PostMapping
    public void addUser(@RequestBody User user){
        this.userService.addUser(user);
    }

    @DeleteMapping(path="{userId}")
    public void deleteUser(@PathVariable("userId") Long userId){
        this.userService.deleteUser(userId);
    }

    @PutMapping(path="{userId}")
    public void updateUser(@PathVariable("userId") Long userId,@RequestParam(required = false) String email, @RequestParam(required = false) String password, @RequestParam(required = false) String name, @RequestParam(required = false) String surname){
        this.userService.updateUser(userId,email,password,name, surname);
    }

    @PostMapping(path= "/login")
    public ResponseEntity<User> Login(@RequestBody User user){
        try {
            User authenticatedUser = userService.LoginUser(user);
            return ResponseEntity.ok(authenticatedUser);
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null); // or another appropriate status code
        }
    }
    @PostMapping(path = "/register")
    public void Register(@RequestBody User user){
        userService.RegisterUser(user);
    }





}
