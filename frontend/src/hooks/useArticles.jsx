import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getPageFromURL} from "../utils/pagination.js";

export default function useArticles() {
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(getPageFromURL());
    const {categoryId} = useParams();

    //pagination, load page from history stack (Back-forward button in browser)
    useEffect(() => {
        window.onpopstate = () => setPage(getPageFromURL());

        return () => {
            window.onpopstate = null;
        };
    }, []);

    useEffect(() => {
        // old fetch may finish after newer fetch
        let ignore = false;

        async function fetchArticles() {
            const url = categoryId
                ? `/webshop/api/artikelen/categorie/${categoryId}?page=${page - 1}&size=`
                : `/webshop/api/artikelen?page=${page - 1}&size=`;

            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();

                    if (!ignore) {
                        setProducts(data.content);
                        setTotalPages(data.totalPages);
                    }
                }
            } catch (error) {
                console.error("Fout bij ophalen artikelen:", error);
            }
        }

        fetchArticles();

        // React runs cleanup before next effect:
        // old request keeps running, but only its paused async code resumes later.
        // ignore prevents old data overwriting newer data.
        return () => ignore = true;
    }, [page, categoryId]);

    return {
        products,
        totalPages,
        page,
        setPage
    };
}