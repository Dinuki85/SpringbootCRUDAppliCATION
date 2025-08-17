package com.example.CRUDApplication.controller;

import com.example.CRUDApplication.model.User;
import com.example.CRUDApplication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("http://localhost:3000/")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    //Adding a new User
    @PostMapping("/adduser")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    //Get All users from the database
    @GetMapping("/getusers")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

}
