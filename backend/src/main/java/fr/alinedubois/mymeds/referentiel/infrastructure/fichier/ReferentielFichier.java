package fr.alinedubois.mymeds.referentiel.infrastructure.fichier;

import fr.alinedubois.mymeds.referentiel.domaine.modele.Medicament;
import fr.alinedubois.mymeds.referentiel.domaine.modele.Referentiel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Repository;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URISyntaxException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Repository
public class ReferentielFichier implements Referentiel {

    private Resource fichierDesMedicaments;

    public ReferentielFichier(@Value("classpath:referentiel/medicaments.txt") Resource fichierDesMedicaments) {
        this.fichierDesMedicaments = fichierDesMedicaments;
    }

    @Override
    public List<Medicament> medicamentsDontLeNomContient(String nom) {
        try {
            InputStream fichierDesMedicamentsInputStream = fichierDesMedicaments.getInputStream();
            BufferedReader lecteurDuFichier = new BufferedReader(
                new InputStreamReader(fichierDesMedicamentsInputStream, StandardCharsets.ISO_8859_1));
            Stream<String> lignesDuFichier = lecteurDuFichier.lines();
            List<Medicament> medicaments = lignesDuFichier
                    .filter(line -> line.split("\t")[1].toLowerCase().contains(nom))
                    .map(line -> {
                        String[] colonnes = line.split("\t");
                        return new Medicament(colonnes[0], colonnes[1], colonnes[2], colonnes[3], colonnes[11]);
                    })
                    .collect(Collectors.toList());
            lignesDuFichier.close();
            lecteurDuFichier.close();
            fichierDesMedicamentsInputStream.close();
            return medicaments;
        } catch (IOException exception) {
            return Collections.emptyList();
        }
    }
}
