package fr.alinedubois.mymeds.pharmacie.infrastructure.rest;

import fr.alinedubois.mymeds.pharmacie.application.RecuperationDeLaPharmacie;
import fr.alinedubois.mymeds.pharmacie.domaine.modele.Pharmacie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PharmaciesRest {
    private RecuperationDeLaPharmacie recuperationDeLaPharmacie;

    public PharmaciesRest(RecuperationDeLaPharmacie recuperationDeLaPharmacie) {
        this.recuperationDeLaPharmacie = recuperationDeLaPharmacie;
    }

    @GetMapping("/api/pharmacies/{emailUtilisateur}")
    public ResponseEntity<Pharmacie> recupererPourUtilisateur(String emailUtilisateur) {
        return ResponseEntity.ok(this.recuperationDeLaPharmacie.recupererPourUtilisateur(emailUtilisateur));
    }
}
