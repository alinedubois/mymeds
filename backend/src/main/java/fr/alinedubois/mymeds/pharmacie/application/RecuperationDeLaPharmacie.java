package fr.alinedubois.mymeds.pharmacie.application;

import fr.alinedubois.mymeds.pharmacie.domaine.modele.Pharmacie;
import fr.alinedubois.mymeds.pharmacie.domaine.modele.Pharmacies;
import org.springframework.stereotype.Component;

@Component
public class RecuperationDeLaPharmacie {
    private Pharmacies pharmacies;

    public RecuperationDeLaPharmacie(Pharmacies pharmacies) {
        this.pharmacies = pharmacies;
    }
    public Pharmacie recupererPourUtilisateur(String emailUtilisateur) {
        return pharmacies.rechercherParEmail(emailUtilisateur);
    }
}
