package dev.webshop.artikelen;

import jakarta.validation.constraints.Positive;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Validated
@RestController
@RequestMapping("api/artikelen")
public class ArtikelController {
    private final ArtikelService artikelService;

    public ArtikelController(ArtikelService artikelService) {
        this.artikelService = artikelService;
    }

    @GetMapping("aantal")
    long findAantal() {
        return artikelService.findAantal();
    }

    @GetMapping
    Page<ArtikelDto> findAllPaged(Pageable pageable) {
        return artikelService.findAllPaged(pageable);
    }

    @GetMapping("artikel/{id}")
    ArtikelDto findById(@PathVariable @Positive Long id) {
        return artikelService.findById(id);
    }

    @GetMapping("categorie/{categorieId}")
    Page<ArtikelDto> findByCategorieIdPaged (@PathVariable @Positive long categorieId, Pageable pageable) {
        return artikelService.findByCategorieIdPaged(categorieId, pageable);
    }
}