package com.supportit.supportit.service;


import com.supportit.supportit.auth.AuthRequest;
import com.supportit.supportit.auth.AuthResponse;
import com.supportit.supportit.config.JwtService;
import com.supportit.supportit.config.RegisterRequest;
import com.supportit.supportit.entity.Personne;
import com.supportit.supportit.entity.Role;
import com.supportit.supportit.repository.PersonneRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl {

    private final PersonneRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest request, Role role) {

        // Check if user already exists
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new IllegalArgumentException("User already exists with this email");
        }

        var user = Personne.builder()
                .nom(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(role)
                .build();
        userRepository.save(user);

        var jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder()
                .accessToken(jwtToken)
                .build();
    }

    public AuthResponse registerUser(RegisterRequest request) {
        return register(request, Role.USER);
    }

    public AuthResponse registerAdmin(RegisterRequest request) {
        return register(request, Role.ADMIN);
    }

    public AuthResponse registerTechnicien(RegisterRequest request) {
        return register(request, Role.TECHNICIEN);
    }

    public AuthResponse authenticate(AuthRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );

        var user = userRepository.findByEmail(request.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + request.getUsername()));

        var jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder()
                .accessToken(jwtToken)
                .build();
    }
}
