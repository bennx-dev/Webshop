import {Outlet} from "react-router-dom";
import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";
import LoginOffcanvas from "../components/auth/LoginOffcanvas.jsx";
import useCategories from "../hooks/useCategories.jsx";
import {useState} from "react";
import MobileCategorySidebar from "../components/categories/MobileCategorySidebar.jsx";

export default function Layout() {
    const categories = useCategories();
    const [categoriesOpen, setCategoriesOpen] = useState(false);

    return (
        <>
            <Header onOpenCategories={() => setCategoriesOpen(true)}/>

            <MobileCategorySidebar
                categories={categories}
                open={categoriesOpen}
                onClose={() => setCategoriesOpen(false)}
            />

            <Outlet/>

            <LoginOffcanvas />

            <Footer/>
        </>
    );
}