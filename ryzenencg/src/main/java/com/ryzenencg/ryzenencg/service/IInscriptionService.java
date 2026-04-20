package com.ryzenencg.ryzenencg.service;

import com.ryzenencg.ryzenencg.dto.request.InscriptionIndividuelleRequest;
import com.ryzenencg.ryzenencg.dto.request.InscriptionRequest;
import com.ryzenencg.ryzenencg.dto.response.InscriptionResponse;
import com.ryzenencg.ryzenencg.dto.response.EquipeResponse;
import java.util.List;

public interface IInscriptionService {
    InscriptionResponse inscrireEquipe(InscriptionRequest request);

    List<EquipeResponse> getAllEquipes();
    List<com.ryzenencg.ryzenencg.model.InscriptionIndividuelle> getAllIndividus();

    // 🔥 L-Methode jdida d l-inscription individuelle
    String inscrireIndividu(InscriptionIndividuelleRequest request);
}