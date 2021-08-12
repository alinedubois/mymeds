package fr.alinedubois.mymeds.pharmacie.infrastructure;

import fr.alinedubois.mymeds.pharmacie.domaine.modele.Pharmacie;
import fr.alinedubois.mymeds.pharmacie.domaine.modele.Pharmacies;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class PharmaciesBaseDeDonnees implements Pharmacies {
    private JdbcTemplate jdbcTemplate;

    public PharmaciesBaseDeDonnees(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Pharmacie rechercherParEmail(String email) {
        return null;
    }
}
