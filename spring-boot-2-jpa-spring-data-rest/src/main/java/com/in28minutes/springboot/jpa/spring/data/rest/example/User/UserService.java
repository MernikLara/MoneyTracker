package com.in28minutes.springboot.jpa.spring.data.rest.example.User;

import com.in28minutes.springboot.jpa.spring.data.rest.example.Odhod.OdhodRepository;
import com.in28minutes.springboot.jpa.spring.data.rest.example.Prihod.PrihodRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PrihodRepository prihodRepository;
    private final OdhodRepository odhodRepository;


    @Autowired
    public UserService(UserRepository userRepository, PrihodRepository prihodRepository, OdhodRepository odhodRepository) {
        this.userRepository = userRepository;
        this.prihodRepository = prihodRepository;
        this.odhodRepository = odhodRepository;
    }

    public List<User> getVsi(){return userRepository.findAll();}

    public Optional<User> getidUser(Long userId) {
        boolean obstaja = userRepository.existsById(userId);
        if(!obstaja){
            throw new IllegalStateException("User s id: " + userId + " ne obstaja." );
        }
        return userRepository.findById(userId);
    }

    public void addUser(User user){

        this.userRepository.save(user);
    }

    public void deleteUser(Long userId){
        boolean obstaja = this.userRepository.existsById(userId);
        if(!obstaja){
            throw new IllegalStateException("User s id: " + userId + " ne obstaja.");
        }else{
            this.userRepository.deleteById(userId);
        }
    }

    @Transactional
    public void updateUser(Long userId, String email, String password, String name, String surname) {
        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalStateException("User s id: " + userId + " ne obstaja.") );

        if(name != null && name.length() > 0 && !Objects.equals(user.getName(), name)){
            user.setName(name);
        }

        if(email != null && email.length() > 0 && !Objects.equals(user.getEmail(), email)){
            Optional<User> userOptional = userRepository.findUserByEmail(email);
            if(userOptional.isPresent()){
                throw new IllegalStateException("Email je zaseden");
            }
            user.setEmail(email);
        }else{
            throw new IllegalStateException("Neveljaven vnos idk");
        }

    }


    public void RegisterUser(User user) {
        Optional<User> userOptional = userRepository.findUserByEmail(user.getEmail());


        if(userOptional.isPresent()){
            throw new IllegalStateException("Email je že uporabljen");
        }


        userRepository.save(user);
    }




    public User LoginUser(User user) {
        Optional<User> userOptional = userRepository.findUserByEmail(user.getEmail());
        if (userOptional.isPresent() && userOptional.get().getPassword().equals(user.getPassword())) {
            System.out.println("dobrodosel"+ userOptional);
            return userOptional.get();

        }
        else{
            throw new IllegalStateException("Wrong email or password");
        }


    }


}
