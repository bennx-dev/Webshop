export default function ProductImage({ product }) {
    return (
        <div className="product-image-wrapper shadow-sm rounded overflow-hidden">
            <img
                src={`/webshop/assets/products/${product.artikelId}.jpg`}
                alt={product.naam}
                className="img-fluid product-image"
            />
        </div>
    );
}