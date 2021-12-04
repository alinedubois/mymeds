package fr.alinedubois.mymeds.pharmacie.service;

import java.util.Date;

public class BoiteDeMedicamentDTO {
    private Long id;
    private String nomMedicament;
    private Date dateDePeremption;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomMedicament() {
        return nomMedicament;
    }

    public void setNomMedicament(String nomMedicament) {
        this.nomMedicament = nomMedicament;
    }

    public Date getDateDePeremption() {
        return dateDePeremption;
    }

    public void setDateDePeremption(Date dateDePeremption) {
        this.dateDePeremption = dateDePeremption;
    }
}
