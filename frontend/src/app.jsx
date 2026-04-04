import {Routes, Route} from "react-router-dom";

// layouts
import Layout from "./layouts/layout.jsx";

// pages
import Home from "./pages/home.jsx";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    );
}