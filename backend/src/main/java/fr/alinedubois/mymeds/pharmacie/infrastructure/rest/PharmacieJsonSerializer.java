package fr.alinedubois.mymeds.pharmacie.infrastructure.rest;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import fr.alinedubois.mymeds.pharmacie.domaine.modele.BoiteDeMedicament;
import fr.alinedubois.mymeds.pharmacie.domaine.modele.Pharmacie;
import org.springframework.boot.jackson.JsonComponent;

import java.io.IOException;

@JsonComponent
public class PharmacieJsonSerializer extends JsonSerializer<Pharmacie> {
    @Override
    public void serialize(Pharmacie pharmacie, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeStartObject();
        jsonGenerator.writeArrayFieldStart("boitesDeMedicaments");
        for (BoiteDeMedicament boiteDeMedicament : pharmacie.boitesDeMedicaments()) {
            jsonGenerator.writeStartObject();
            jsonGenerator.writeStringField("nom", boiteDeMedicament.nom());
            jsonGenerator.writeStringField("dateDePeremption", boiteDeMedicament.dateDePeremption().toString());
            jsonGenerator.writeEndObject();
        }
        jsonGenerator.writeEndArray();
        jsonGenerator.writeEndObject();
    }
}
