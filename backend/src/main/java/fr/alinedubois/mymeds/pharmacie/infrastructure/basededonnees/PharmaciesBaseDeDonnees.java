package fr.alinedubois.mymeds.pharmacie.infrastructure.basededonnees;

import fr.alinedubois.mymeds.pharmacie.domaine.modele.BoiteDeMedicament;
import fr.alinedubois.mymeds.pharmacie.domaine.modele.Pharmacie;
import fr.alinedubois.mymeds.pharmacie.domaine.modele.Pharmacies;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public class PharmaciesBaseDeDonnees implements Pharmacies {
    private JdbcTemplate jdbcTemplate;

    public PharmaciesBaseDeDonnees(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Pharmacie rechercherParEmail(String email) {
        List<BoiteDeMedicament> boitesDeMedicaments = jdbcTemplate.query(
                "select * from pharmacie",
                (resultSet, index) -> new BoiteDeMedicament("doliprane", LocalDate.now()));
        Pharmacie pharmacie = new Pharmacie();
        boitesDeMedicaments.forEach(boiteDeMedicament -> pharmacie.ajouter(boiteDeMedicament));
        return pharmacie;
    }
}

