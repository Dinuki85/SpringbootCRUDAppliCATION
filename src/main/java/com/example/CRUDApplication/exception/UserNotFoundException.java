package com.example.CRUDApplication.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could not Found the user with id "+id);

    }
}
