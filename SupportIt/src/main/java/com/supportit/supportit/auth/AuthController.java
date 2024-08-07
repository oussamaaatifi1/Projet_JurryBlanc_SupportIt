package com.banksystem.projeteventbackend.Auth;


import com.banksystem.projeteventbackend.Auth.AuthRequest;
import com.banksystem.projeteventbackend.Auth.AuthResponse;
import com.banksystem.projeteventbackend.config.RegisterRequest;
import com.banksystem.projeteventbackend.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth/")
@CrossOrigin(origins = "http://localhost:4200/")
public class AuthController {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(userDetailsService.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthResponse> authenticate(@RequestBody AuthRequest request) {
        return ResponseEntity.ok(userDetailsService.authenticate(request));
    }

    @PostMapping("/register-admin")
    public ResponseEntity<AuthResponse> registerAdmin(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(userDetailsService.registerAdmin(request));
    }

    @PostMapping("/authenticate-admin")
    public ResponseEntity<AuthResponse> authenticateAdmin(@RequestBody AuthRequest request) {
        return ResponseEntity.ok(userDetailsService.authenticateAdmin(request));
    }
}
