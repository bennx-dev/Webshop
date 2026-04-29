import {Link} from "react-router-dom";
import {Logo} from "./Logo.jsx";
import {IconHamburger} from "../components/icons/IconHamburger.jsx";
import {IconAccount} from "../components/icons/IconAccount.jsx";
import {IconArrow} from "../components/icons/IconArrow.jsx";
import {IconWishlist} from "../components/icons/IconWishlist.jsx";
import {IconCart} from "../components/icons/IconCart.jsx";

export default function Header({onOpenCategories}) {
    return (
        <header className="container-fluid px-2 mb-1 d-flex align-items-center justify-content-between">

            {/* Menu Links */}
            <div className="d-flex align-items-center">

                {/* Hamburger alleen mobiel */}
                <button
                    className="btn d-md-none px-1 pe-3 navButton"
                    type="button"
                    onClick={onOpenCategories}
                    aria-controls="offcanvasCategorieen"
                >
                    <IconHamburger/>
                </button>

                {/* Logo */}
                <Link to="/">
                    <Logo/>
                </Link>
            </div>

            {/* Menu rechts */}
            <nav className="d-flex align-items-center navButton">

                <button className="d-flex align-items-center px-1 navButton"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#loginOffcanvas"
                        aria-controls="loginOffcanvas">
                    <IconAccount/>
                    <span className="px-1 d-none d-md-inline">Inloggen / Registreren
                        <IconArrow/>
                    </span>
                </button>

                <button className="navButton px-1">
                    <IconWishlist/>
                </button>

                <button className="navButton px-1">
                    <IconCart/>
                </button>
            </nav>
        </header>
    );
}