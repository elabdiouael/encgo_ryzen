package com.ryzenencg.ryzenencg.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InscriptionResponse {
    private String message;
    private Long equipeId;
    private LocalDateTime dateInscription;
}