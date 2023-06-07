package com.in28minutes.springboot.jpa.spring.data.rest.example;

import com.in28minutes.springboot.jpa.spring.data.rest.example.Mailing.MailingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;


@SpringBootApplication

public class SpringBoot2JPAWithSpringDataRestApplication {
    @Autowired
    private MailingService senderService;


    public static void main(String[] args) {
        SpringApplication.run(SpringBoot2JPAWithSpringDataRestApplication.class, args);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void sendEmail(){
        senderService.sendEmail("lara.mernik@gmail.com",
                "test",
                "Pune body");
    }

}
