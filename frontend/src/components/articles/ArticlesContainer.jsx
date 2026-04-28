import ProductsGrid from "./ProductsGrid.jsx";
import useArticles from "../../hooks/useArticles.jsx";

export default function ArticlesContainer() {
    const {
        products,
        totalPages,
        setPage
    } = useArticles();

    return (
        <ProductsGrid
            products={products}
            totalPages={totalPages}
            setPage={setPage}
        />
    );
}