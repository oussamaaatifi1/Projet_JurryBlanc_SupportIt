package com.supportit.supportit.controller;

import com.supportit.supportit.auth.AuthenticationRequest;
import com.supportit.supportit.auth.AuthenticationResponse;
import com.supportit.supportit.auth.RegisterRequest;
import com.supportit.supportit.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:4200/")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authService;

    @PostMapping("/register/user")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/register/registerAdmin")
    public ResponseEntity<AuthenticationResponse> registerAdmin(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(authService.registerAdmin(request));
    }

    @PostMapping("/register/registerTechnicien")
    public ResponseEntity<AuthenticationResponse> registerTechnicien(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(authService.registerTechnicien(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(authService.authenticate(request));

    }
}