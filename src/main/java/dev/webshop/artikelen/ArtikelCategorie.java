package dev.webshop.artikelen;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import static dev.webshop.utils.Check.checkNonNegative;

@Entity
@Table(name = "ArtikelCategorieen")
public class ArtikelCategorie {
    @Id
    private Long categorieId;
    private Long artikelId;

    protected ArtikelCategorie() {
    }

    public ArtikelCategorie(Long categorieId, Long artikelid) {
        checkNonNegative(categorieId, "categorieId");
        checkNonNegative(artikelId, "artikelId");

        this.categorieId = categorieId;
        this.artikelId = artikelid;
    }

    public Long getCategorieId() {
        return categorieId;
    }

    public Long getArtikelid() {
        return artikelId;
    }
}