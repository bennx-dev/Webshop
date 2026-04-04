import {Link} from "react-router-dom";

import {Logo} from "./logo.jsx";
import {IconHamburger} from "./iconHamburger.jsx";
import {IconAccount} from "./iconAccount.jsx";
import {IconArrow} from "./iconArrow.jsx";
import {IconWishlist} from "./iconWishlist.jsx";
import {IconCart} from "./iconCart.jsx";

export default function Header() {
    return (
        <header className="container-fluid px-2 mb-1 d-flex align-items-center justify-content-between">

            {/* Menu Links */}
            <div className="d-flex align-items-center">

                {/* Hamburger alleen mobiel */}
                <button
                    className="btn d-md-none px-1 pe-3"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasCategorieen"
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

                <button className="d-flex align-items-center px-1 navButton">
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