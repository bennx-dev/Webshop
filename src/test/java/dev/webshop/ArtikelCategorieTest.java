package dev.webshop;

import dev.webshop.artikelen.ArtikelCategorie;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertThrows;

public class ArtikelCategorieTest {

    /*
    ================ EDGE TESTS =================
    */

    @Test
    @DisplayName("Een lege id is niet geldig en werpt een exception")
    void eenLegeIdIsNietGeldig () {

        assertThrows(IllegalArgumentException.class, () ->
                new ArtikelCategorie(-1L, 1L));
    }
}
