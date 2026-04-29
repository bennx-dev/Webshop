import {Routes, Route} from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="categorie/:categoryId" element={<HomePage/>}/>
                <Route path="product/:productId" element={<ProductDetailPage/>}/>
            </Route>
        </Routes>
    );
}