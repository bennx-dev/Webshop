import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {getPageFromURL} from "./pagination.jsx";
import ProductsGrid from "./products.jsx";

export default function FetchArticles() {
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(getPageFromURL());

    const { categoryId } = useParams();
    const url = categoryId
    ? `/webshop/api/artikelen/categorie/${categoryId}?page=${page - 1}&size=`
        : `/webshop/api/artikelen?page=${page - 1}&size=`;

    useEffect(() => {
        setPage(1);
    }, [categoryId]);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data.content);
                    setTotalPages(data.totalPages);
                }
            } catch (error) {
                console.error("Fout bij ophalen artikelen:", error);
            }
        }

        fetchArticles();
    }, [page, categoryId]);

    return <ProductsGrid
        products={products}
        totalPages={totalPages}
        setPage={setPage}
    />;
}