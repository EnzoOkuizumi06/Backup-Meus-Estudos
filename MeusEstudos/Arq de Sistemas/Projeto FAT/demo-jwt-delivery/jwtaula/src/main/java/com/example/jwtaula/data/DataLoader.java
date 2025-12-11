// src/main/java/com/example/jwtaula/data/DataLoader.java
package com.example.jwtaula.data;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.example.jwtaula.user.User;
import com.example.jwtaula.user.UserRepository;

@Component
public class DataLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DataLoader(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.findByUsername("user").isEmpty()) {
            User user = new User("user", passwordEncoder.encode("password"), "USER");
            userRepository.save(user);
        }
        if (userRepository.findByUsername("admin").isEmpty()) {
            User admin = new User("admin", passwordEncoder.encode("adminpass"), "ADMIN");
            userRepository.save(admin);
        }
        System.out.println("Usuários iniciais criados (user/password, admin/adminpass)");
    }
}