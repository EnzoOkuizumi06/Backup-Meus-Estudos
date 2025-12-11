// src/main/java/com/example/jwtaula/auth/AuthResponse.java
package com.example.jwtaula.auth;

public class AuthResponse {
    private String token;

    public AuthResponse(String token) {
        this.token = token;
    }

    // Getter
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}