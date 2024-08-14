package com.supportit.supportit.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;

    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authorize -> authorize
//                                .requestMatchers("/api/v1/auth/**").permitAll()
                                .requestMatchers("/api/v1/auth/authenticate","/api/v1/auth/register/user").permitAll()
                                .requestMatchers("/api/v1/auth/tickets/all","/api/v1/auth/tickets/add").hasAuthority("USER")
                                .requestMatchers("/api/v1/auth/Admin/equipements/add/**","/api/v1/auth/Admin/equipements/edit/**","/api/v1/auth/Admin/equipements/delete/**","/api/v1/auth/Admin/equipements/delete/**","/api/v1/auth/Admin/equipements/statut/**","/api/v1/auth/assigner/**",
                                        "/api/v1/auth/register/**","/api/techniciens",
                                        "/api/v1/auth/Admin/panne/add/**","/api/v1/auth/Admin/panne/edit/**","/api/v1/auth/Admin/panne/delete/**","/api/v1/auth/tickets/all").hasAuthority("ADMIN")
                                .requestMatchers("/api/v1/auth/tickets/all","/api/v1/auth/tickets/mytickets/**").hasAuthority("TECHNICIEN")
                                .anyRequest()
                                .authenticated()
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

}