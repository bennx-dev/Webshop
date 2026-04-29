export default function ProductInfo({ product }) {
    console.log(product);
    return (
        <div className="p-3 product-info">
            <h1 className="mb-2">{product.naam}</h1>
            <p className="text-muted mb-3">{product.beschrijving}</p>

            <div className="mb-2">
                <strong>Categorie:</strong> {product.categorieen && product.categorieen.length > 0
                ? product.categorieen.map(cat => cat.naam).join(", ")
                : "Geen categorieën beschikbaar"}
            </div>

            <div className="mb-3 stock-label">
                {product.stockLabel}
            </div>

            <h3 className="mb-3">€ {product.prijs}</h3>

            <button
                className="btn btn-primary w-100 btn-glow"
                disabled={product.stockLabel === "Uitverkocht"}
            >
                In winkelmand
            </button>
        </div>
    );
}