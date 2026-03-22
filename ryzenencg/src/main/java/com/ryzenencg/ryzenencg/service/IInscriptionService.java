package com.ryzenencg.ryzenencg.service;

import com.ryzenencg.ryzenencg.dto.request.InscriptionRequest;
import com.ryzenencg.ryzenencg.dto.response.InscriptionResponse;
import com.ryzenencg.ryzenencg.dto.response.EquipeResponse; // Import jdid
import java.util.List; // Import jdid

public interface IInscriptionService {
    InscriptionResponse inscrireEquipe(InscriptionRequest request);

    // 🔥 L-Methode jdida bach n-jebdo ga3 l-fira9i
    List<EquipeResponse> getAllEquipes();
}