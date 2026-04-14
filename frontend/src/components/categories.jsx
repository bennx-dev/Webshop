import {useEffect, useState} from "react";
import RenderCategoryTree from "./renderCategoryTree.jsx";

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch("/webshop/api/categorieen");
                if (response.ok) {
                    const data = await response.json();
                    setCategories(data);
                }
            } catch (error) {
                console.error("Fout bij ophalen categorieën:", error);
            }
        }

        fetchCategories();
    }, []);

    return <RenderCategoryTree categories={categories}/>;
}