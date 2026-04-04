import {Outlet} from "react-router-dom";

import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import FooterBottom from "../components/footerBottom.jsx";

export default function Layout() {
    return (
        <>
            <Header/>

            <Outlet/>

            <Footer/>
            <FooterBottom/>
        </>
    );
}