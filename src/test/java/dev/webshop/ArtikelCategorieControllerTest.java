package dev.webshop;

import static org.assertj.core.api.Assertions.*;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.test.jdbc.JdbcTestUtils;
import org.springframework.test.web.servlet.assertj.MockMvcTester;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
@AutoConfigureMockMvc
public class ArtikelCategorieControllerTest {

    private final MockMvcTester mockMvcTester;
    private final JdbcClient jdbcClient;
    private final static String ARTIKELCATEGORIEEN = "ArtikelCategorieen";

    public ArtikelCategorieControllerTest(MockMvcTester mockMvcTester, JdbcClient jdbcClient) {
        this.mockMvcTester = mockMvcTester;
        this.jdbcClient = jdbcClient;
    }

    /*
    ================ EXPECTED BEHAVIOR TESTS =================
    */

    @Test
    @DisplayName("/api/artikelcategorieen/aantal geeft juiste aantal")
    void aantalArtikelCategorieenGeeftJuisteAantalTerug () {
        var response = mockMvcTester
                .get()
                .uri("/api/artikelcategorieen/aantal");

        assertThat(response)
                .hasStatusOk()
                .bodyJson()
                .extractingPath("$")
                .isEqualTo(JdbcTestUtils.countRowsInTable(jdbcClient, ARTIKELCATEGORIEEN));
    }
}