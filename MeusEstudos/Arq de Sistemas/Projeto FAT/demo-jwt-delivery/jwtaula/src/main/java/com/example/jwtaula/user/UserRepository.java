// src/main/java/com/example/jwtaula/user/UserRepository.java
package com.example.jwtaula.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}