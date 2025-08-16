package com.example.CRUDApplication.repository;

import com.example.CRUDApplication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}
