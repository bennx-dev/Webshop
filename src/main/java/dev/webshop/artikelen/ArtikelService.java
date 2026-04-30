package dev.webshop.artikelen;

import dev.webshop.categorieen.Categorie;
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

    private ArtikelDto mapArtikelToDTO(Artikel artikel) {
        return new ArtikelDto(
                artikel.getArtikelId(),
                artikel.getNaam(),
                artikel.getBeschrijving(),
                artikel.getPrijs(),
                artikel.getCategorieen()
                        .stream()
                        .map(Categorie::getNaam)
                        .toList()
                ,getStockLabel(artikel.getVoorraad())
                ,isBeschikbaar(artikel.getVoorraad())
        );
    }

    long findAantal() {
        return artikelRepository.count();
    }

    Page<ArtikelDto> findAllPaged(Pageable pageable) throws ArtikelNietGevondenException {
        return artikelRepository.findAll(pageable)
                .map(this::mapArtikelToDTO);
    }

    public ArtikelDto findById(Long id) {
        var artikel = artikelRepository.findById(id)
                .orElseThrow(ArtikelNietGevondenException::new);

        return mapArtikelToDTO(artikel);
    }

    Page<ArtikelDto> findByCategorieIdPaged(long categorieId, Pageable pageable) {
        boolean isHoofdCategorie = categorieRepository.existsByHoofdCategorieId(categorieId);
        boolean isValidCategorie = categorieRepository.existsByCategorieId(categorieId);

        if (isHoofdCategorie) {
            return Page.empty(pageable);
        }

        if (!isValidCategorie) {
            return Page.empty(pageable);
        }

        return artikelRepository.findByCategorieenCategorieId(categorieId, pageable)
                .map(this::mapArtikelToDTO);
    }

    private String getStockLabel(long voorraad) {
        if (voorraad <= 0) return "Uitverkocht";
        if (voorraad <= 5) return "Bijna uitverkocht";
        return "Op voorraad";
    }

    private boolean isBeschikbaar(long voorraad) {
        return voorraad > 0;
    }
}