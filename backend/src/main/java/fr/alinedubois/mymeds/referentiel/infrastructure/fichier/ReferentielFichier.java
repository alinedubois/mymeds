package fr.alinedubois.mymeds.referentiel.infrastructure.fichier;

import fr.alinedubois.mymeds.referentiel.domaine.modele.Medicament;
import fr.alinedubois.mymeds.referentiel.domaine.modele.Referentiel;
import org.springframework.stereotype.Repository;

import java.io.IOException;
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
    @Override
    public List<Medicament> medicamentsDontLeNomContient(String nom) {
        try {
            Path path = Paths.get(getClass().getClassLoader()
                    .getResource("referentiel/medicaments.txt").toURI());
            Stream<String> lines = Files.lines(path, StandardCharsets.ISO_8859_1);
            List<Medicament> medicaments = lines
                    .filter(line -> line.split("\t")[1].toLowerCase().contains(nom))
                    .map(line -> {
                String[] colonnes = line.split("\t");
                return new Medicament(colonnes[0], colonnes[1], colonnes[2], colonnes[3], colonnes[11]);
            }).collect(Collectors.toList());
            lines.close();
            return medicaments;
        } catch (URISyntaxException | IOException exception) {
            return Collections.emptyList();
        }
    }
}
