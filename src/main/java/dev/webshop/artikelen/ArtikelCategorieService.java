package dev.webshop.artikelen;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class ArtikelCategorieService {
    private final ArtikelCategorieRepository artikelCategorieRepository;

    ArtikelCategorieService(ArtikelCategorieRepository artikelCategorieRepository) {
        this.artikelCategorieRepository = artikelCategorieRepository;
    }

    long findAantal() {
        return artikelCategorieRepository.count();
    }
}