package dev.webshop.artikelen;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Validated
@RestController
@RequestMapping("api/artikelcategorieen")
public class ArtikelCategorieController {
    private final ArtikelCategorieService artikelCategorieService;

    public ArtikelCategorieController(ArtikelCategorieService artikelCategorieService) {
        this.artikelCategorieService = artikelCategorieService;
    }

    @GetMapping("aantal")
    long findAantal() {
        return artikelCategorieService.findAantal();
    }
}