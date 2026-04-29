import Pagination from "./Pagination.jsx";
import {Link} from "react-router-dom";

export default function ProductsGrid({products, totalPages, setPage}) {

    return (
        <div className="d-grid">

            <div className="row gy-3 gx-3 row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 mb-4">

                {products.map(product => (
                    <div key={product.artikelId} className="col">

                        <Link
                            to={`/product/${product.artikelId}`}
                            className="d-flex flex-column artikel h-100 text-decoration-none text-dark"
                        >

                            <div className="d-flex flex-column h-100 p-2">

                                <img
                                    className="img-fluid w-100"
                                    src={`/webshop/assets/products/${product.artikelId}.jpg`}
                                    alt={product.naam}
                                />

                                <h3 className="beschrijving flex-grow-1 flex-wrap">
                                    {product.beschrijving}
                                </h3>

                                <div className="mt-auto">

                                    <p className="categorie mb-1">
                                        {product.categorieNamen?.length
                                            ? product.categorieNamen.join(", ")
                                            : "Geen categorie"}
                                    </p>

                                    <p className="stock mb-1">
                                        {product.stockLabel}
                                    </p>

                                    <p className="price mb-0">
                                        € {product.prijs} (incl. btw)
                                    </p>

                                </div>

                            </div>

                        </Link>

                    </div>
                ))}

            </div>

            <Pagination
                totalPages={totalPages}
                setPage={setPage}
            />

        </div>
    );
}