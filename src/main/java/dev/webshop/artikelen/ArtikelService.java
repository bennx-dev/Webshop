package dev.webshop.artikelen;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.domain.Pageable;

@Service
@Transactional(readOnly = true)
public class ArtikelService {
    private final ArtikelRepository artikelRepository;

    public ArtikelService(ArtikelRepository artikelRepository) {
        this.artikelRepository = artikelRepository;
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
}