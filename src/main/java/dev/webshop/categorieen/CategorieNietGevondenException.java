package dev.webshop.categorieen;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class CategorieNietGevondenException extends RuntimeException {
    public CategorieNietGevondenException() {
        super("Categorie niet gevonden");
    }
}