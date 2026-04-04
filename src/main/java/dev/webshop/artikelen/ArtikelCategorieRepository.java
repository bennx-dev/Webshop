package dev.webshop.artikelen;

import org.springframework.data.jpa.repository.JpaRepository;

interface ArtikelCategorieRepository extends JpaRepository<ArtikelCategorie, Long> {
}