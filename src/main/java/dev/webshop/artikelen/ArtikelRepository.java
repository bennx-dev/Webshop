package dev.webshop.artikelen;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtikelRepository extends JpaRepository<Artikel, Long> {
    Page<Artikel> findByCategorieenCategorieId(long categorieId, Pageable pageable);
}