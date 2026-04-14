package dev.webshop.artikelen;

import dev.webshop.categorieen.CategorieRepository;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.domain.Pageable;

@Service
@Transactional(readOnly = true)
public class ArtikelService {
    private final ArtikelRepository artikelRepository;
    private final CategorieRepository categorieRepository;

    public ArtikelService(ArtikelRepository artikelRepository, CategorieRepository categorieRepository) {
        this.artikelRepository = artikelRepository;
        this.categorieRepository = categorieRepository;
    }

    long findAantal() {
        return artikelRepository.count();
    }

    Page<Artikel> findAllPaged(Pageable pageable) throws ArtikelNietGevondenException {
        return artikelRepository.findAll(pageable);
    }

    public Artikel findById(Long id) {
        return artikelRepository.findById(id)
                .orElseThrow(ArtikelNietGevondenException::new);
    }

    Page<Artikel> findByCategorieIdPaged(long categorieId, Pageable pageable) {
        boolean isHoofdCategorie = categorieRepository.existsByHoofdCategorieId(categorieId);
        boolean isValidCategorie = categorieRepository.existsByCategorieId(categorieId);

        if (isHoofdCategorie) {
            return Page.empty(pageable);
        }

        if (!isValidCategorie) {
            return Page.empty(pageable);
        }

        return artikelRepository.findByCategorieenCategorieId(categorieId, pageable);
    }
}