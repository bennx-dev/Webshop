import Pagination from "./Pagination.jsx";

export default function ProductsGrid({products, totalPages, setPage}) {

    // render articles
    return (
        <div className="d-grid">
            <div className="row gy-3 gx-3 row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                {products.map(product => {
                    return (
                        <div key={product.artikelId} className="col">
                            <div className="btn p-0 text-center d-flex flex-column artikel h-100 ">
                                {/*<Link to="" className="d-flex flex-column h-100">*/}
                                <div className="d-flex flex-column h-100">
                                    <img className="img-fluid w-100"
                                         src={`/webshop/assets/products/${product.artikelId}.jpg`}
                                         alt={`${product.naam}`}>
                                    </img>
                                    <h3 className="beschrijving flex-grow-1 flex-wrap">{product.beschrijving}</h3>
                                    <div className="mt-auto">
                                        <p className="categorie mb-1">Categorie...</p>
                                        <p className="stock mb-1">Voorraadlabel...CTA</p>
                                        <p className="price mb-0">{`€ ${product.prijs} (incl. btw)`}</p>
                                    </div>
                                    {/*</Link>*/}</div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/*render pagination buttons*/}
            <Pagination
                totalPages={totalPages}
                setPage={setPage}
            />
        </div>
    );
}