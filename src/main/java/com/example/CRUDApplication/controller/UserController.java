package com.example.CRUDApplication.controller;

import com.example.CRUDApplication.exception.UserNotFoundException;
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


    @GetMapping("/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow( ()->new UserNotFoundException(id) );

    }

    @PutMapping("/{id}")
    User updateUser(@RequestBody User newUser,@PathVariable Long id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseThrow(()->new UserNotFoundException(id));
    }

    @DeleteMapping("/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User deleted successfully with the id  "+id;
    }


}
