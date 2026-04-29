import ProductImage from "./ProductImage.jsx";
import ProductInfo from "./ProductInfo.jsx";

export default function ProductDetail({ product }) {
    return (
        <div className="product-detail-container py-4">
            <h2 className="text-center mb-4">Product Details</h2>

            <div className="row g-4 align-items-start product-detail">
                <div className="col-12 col-md-6">
                    <ProductImage product={product} />
                </div>

                <div className="col-12 col-md-6">
                    <ProductInfo product={product} />
                </div>
            </div>
        </div>
    );
}