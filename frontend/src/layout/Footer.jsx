import {Link} from "react-router-dom";
import FooterBottom from "../layout/FooterBottom.jsx";

export default function Footer() {
    return (
        <footer
            className="container-fluid mt-1 d-flex justify-content-center align-items-center gap-1 flex-wrap text-center">
            <Link to="/algemenevoorwaarden">Algemene voorwaarden</Link> |{" "}
            <Link to="/privacy">Privacybeleid</Link> |{" "}
            <Link to="/cookie">Cookiebeleid</Link> |{" "}
            <Link to="/over-ons">Over ons</Link> |{" "}
            <Link to="/contact">Contact</Link> <span id="footercopyright"> | © 2026 eduShop </span>
            <FooterBottom/>
        </footer>
    );
}