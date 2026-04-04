package dev.webshop.categorieen;

import org.springframework.data.jpa.repository.JpaRepository;

interface CategorieRepository extends JpaRepository<Categorie, Long> {
}