import {Outlet} from "react-router-dom";
import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";
import FooterBottom from "../layout/FooterBottom.jsx";
import LoginOffcanvas from "../components/auth/LoginOffcanvas.jsx";

export default function Layout() {
    return (
        <>
            <Header/>

            <Outlet/>

            <LoginOffcanvas />

            <Footer/>
            <FooterBottom/>
        </>
    );
}