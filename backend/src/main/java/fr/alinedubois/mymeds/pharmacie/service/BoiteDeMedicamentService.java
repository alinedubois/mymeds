package fr.alinedubois.mymeds.pharmacie.service;

import fr.alinedubois.mymeds.pharmacie.repository.BoiteDeMedicamentRepository;
import fr.alinedubois.mymeds.referentiel.domaine.modele.Referentiel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoiteDeMedicamentService {
    private Referentiel referentielDesMedicaments;
    private BoiteDeMedicamentRepository boiteDeMedicamentRepository;

    public BoiteDeMedicamentService(Referentiel referentielDesMedicaments, BoiteDeMedicamentRepository boiteDeMedicamentRepository) {
        this.referentielDesMedicaments = referentielDesMedicaments;
        this.boiteDeMedicamentRepository = boiteDeMedicamentRepository;
    }

    public List<BoiteDeMedicamentDTO> rechercherLesBoitesDeMedicamentsDeLUtilisateur(String utilisteurId) {
        return null;
    }

}
