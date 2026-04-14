import {Routes, Route} from "react-router-dom";
import Layout from "./layouts/layout.jsx";
import HomePage from "./pages/homePage.jsx";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="categorie/:categoryId" element={<HomePage/>}/>
            </Route>
        </Routes>
    );
}