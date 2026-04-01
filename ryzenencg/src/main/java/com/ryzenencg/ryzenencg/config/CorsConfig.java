package com.ryzenencg.ryzenencg.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();

        // 🚨 THE MASTER KEY: K-t-7ell l-biban l-kolchi (Vercel, Localhost, etc.)
        config.setAllowCredentials(false);
        config.addAllowedOriginPattern("*"); // K-y-9bel ay domaine
        config.addAllowedHeader("*");        // K-y-9bel ay header
        config.addAllowedMethod("*");        // K-y-9bel POST, GET, OPTIONS, etc.

        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}