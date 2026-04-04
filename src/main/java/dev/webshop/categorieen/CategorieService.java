package dev.webshop.categorieen;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
class CategorieService {
    private final CategorieRepository categorieRepository;

    CategorieService(CategorieRepository categorieRepository) {
        this.categorieRepository = categorieRepository;
    }

    List<Categorie> findAll() {
        return categorieRepository.findAll();
    }
}