package dev.webshop.spa;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class spaController {

    @RequestMapping({
            // "/" start vanaf root, "{path: ... }" variabele path, "[^\\.]*" match alles behalve een punt (.) zoals /main.js -> bv /categorie
            "/{path:^(?!api$).*$}",
            // "**/" match ook nested routes / meerdere levels diep -> bv: /categorie/5
            "/**/{path:^(?!api$).*$}"
    })
    public String forward() {
        return "forward:/index.html";
    }
}