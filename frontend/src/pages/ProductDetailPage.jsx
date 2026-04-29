import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct.jsx";
import ProductDetail from "../components/product/ProductDetail.jsx";

export default function ProductDetailPage() {
    const { productId } = useParams();
    const { product, loading } = useProduct(productId);

    return (
        <main className="container-fluid py-4">
            {loading ? (
                <div className="text-center py-5 text-muted">Laden...</div>
            ) : (
                <ProductDetail product={product} />
            )}
        </main>
    );
}