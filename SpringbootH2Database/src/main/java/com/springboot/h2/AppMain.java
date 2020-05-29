package com.springboot.h2;

import com.springboot.h2.model.Routine;
import com.springboot.h2.model.Tag;
import com.springboot.h2.model.User;
import com.springboot.h2.serv.RoutineService;
import com.springboot.h2.serv.TagService;
import com.springboot.h2.serv.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@SpringBootApplication
public class AppMain {

    public static void main(String[] args) {
        SpringApplication.run(AppMain.class, args);
    }

    @Bean
    public CommandLineRunner loadUser(UserService userService) {
        return (args) -> {
            System.out.println("Loading Users...................");
            User user = new User();
            user.setFirstName("Kapil");
            user.setLastName("Reja");
            user.setPhoneNumber("1234567890");
            user.setEmail("kapil.reja@gmail.com");
            user.setStartTime(LocalTime.parse("09:00"));
            user.setEndTime(LocalTime.parse("06:00"));
            user.setPassword("********");
            user.setDated(LocalDateTime.now());
            userService.save(user);

            user = new User();
            user.setFirstName("Akanksha");
            user.setLastName("Nirhale");
            user.setPhoneNumber("2345678901");
            user.setEmail("kapil.reja@gmail.com");
            user.setStartTime(LocalTime.parse("09:00"));
            user.setEndTime(LocalTime.parse("06:00"));
            user.setDated(LocalDateTime.now());
            user.setPassword("********");
            userService.save(user);
        };
    }

    @Bean
    public CommandLineRunner loadRoutine(RoutineService routineService) {
        return (args) -> {
            System.out.println("Loading Routines...................");
            Routine routine = new Routine();
            routine.setUserId(1);
            routine.setDated(LocalDateTime.now());
            routine.setName("Have Water");
            routine.setStartDate(LocalDate.parse("2020-05-29"));
            routine.setStartTime(LocalTime.parse("09:30"));
            routine.setEndDate(LocalDate.parse("2021-05-29"));
            routine.setRepeat("Hourly");
            routine.setComments("");
            routine.setNotification(Boolean.TRUE);
            routineService.save(routine);

            routine = new Routine();
            routine.setUserId(1);
            routine.setDated(LocalDateTime.now());
            routine.setName("Break For Lunch");
            routine.setStartDate(LocalDate.parse("2020-05-29"));
            routine.setStartTime(LocalTime.parse("12:45"));
            routine.setEndDate(LocalDate.parse("2021-05-29"));
            routine.setRepeat("Daily");
            routine.setComments("");
            routine.setNotification(Boolean.TRUE);
            routineService.save(routine);
        };
    }

    @Bean
    public CommandLineRunner loadTag(TagService tagService) {
        return (args) -> {
            System.out.println("Loading Tags...................");
            Tag tag = new Tag();
            tag.setName("Do The Laundry");
            tag.setDated(LocalDateTime.now());
            tagService.save(tag);

            tag = new Tag();
            tag.setName("Have Water");
            tag.setDated(LocalDateTime.now());
            tagService.save(tag);

            tag = new Tag();
            tag.setName("Break For Lunch");
            tag.setDated(LocalDateTime.now());
            tagService.save(tag);

            tag = new Tag();
            tag.setName("Go To Bed");
            tag.setDated(LocalDateTime.now());
            tagService.save(tag);

            tag = new Tag();
            tag.setName("Exercise");
            tag.setDated(LocalDateTime.now());
            tagService.save(tag);

            tag = new Tag();
            tag.setName("Have Breakfast");
            tag.setDated(LocalDateTime.now());
            tagService.save(tag);

            tag = new Tag();
            tag.setName("Have Lunch");
            tag.setDated(LocalDateTime.now());
            tagService.save(tag);

            tag = new Tag();
            tag.setName("Read The News");
            tag.setDated(LocalDateTime.now());
            tagService.save(tag);

            tag = new Tag();
            tag.setName("Start Your Work");
            tag.setDated(LocalDateTime.now());
            tagService.save(tag);

            tag = new Tag();
            tag.setName("Have Water");
            tag.setDated(LocalDateTime.now());
            tagService.save(tag);

            tag = new Tag();
            tag.setName("Take Medicine");
            tag.setDated(LocalDateTime.now());
            tagService.save(tag);
        };
    }
}
