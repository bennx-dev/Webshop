package dev.webshop;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import dev.webshop.artikelen.ArtikelNietGevondenException;
import dev.webshop.artikelen.ArtikelRepository;
import dev.webshop.artikelen.ArtikelService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.Optional;

public class ArtikelServiceTest {

    private ArtikelRepository artikelRepository;
    private ArtikelService artikelService;

    @BeforeEach
    void beforeEach() {
        artikelRepository = mock(ArtikelRepository.class);
        artikelService = new ArtikelService(artikelRepository);
    }

    /*
    ================ EDGE TESTS =================
    */

    //JPA geeft standaard een Optional terug dus hier doe ik dat ook
    @Test
    @DisplayName("Een onbestaand artikelId werpt een exception")
    void artikelIdNietBekendWerptEenException () {
        when(artikelRepository.findById(1L)).thenReturn(Optional.empty());
        assertThrows(ArtikelNietGevondenException.class, () ->  artikelService.findById(1L));
    }
}