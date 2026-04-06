import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {createPagination} from "./pagination.jsx";
import {getPageFromURL} from "./pagination.jsx";

export default function ProductsHome() {
    const [products, setProducts] = useState([]);

    //pagination states
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(getPageFromURL());

    //fetch articles
    useEffect(() => {
        async function fetchArtikelen() {
            try {
                const response = await fetch(`api/artikelen?page=${page-1}&size=`);
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data.content);
                    setTotalPages(data.totalPages);
                }
            } catch (error) {
                console.error("Fout bij ophalen artikelen:", error);
            }
        }

        fetchArtikelen();
    }, [page]);

    // render articles
    return (
        <div className="d-grid">

            <div className="mb-2">
                <form id="zoekForm">
                    <input type="text" id="zoekveld" name="zoektekst" placeholder="Typ hier je zoekterm..."
                           className="form-control" autoFocus/>
                </form>
            </div>

            <div className="row gy-3 gx-3 row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                {products.map(product => {
                    return (
                        <div key={product.artikelId} className="col">
                            <div className="btn p-0 text-center d-flex flex-column artikel h-100 ">
                                <Link to="/" className="d-flex flex-column h-100">
                                    <img className="img-fluid w-100" src={`assets/products/${product.artikelId}.jpg`}
                                         alt={`${product.naam}`}>
                                    </img>
                                    <h3 className="beschrijving flex-grow-1 flex-wrap">{product.beschrijving}</h3>
                                    <div className="mt-auto">
                                        <p className="categorie mb-1">Categorie...</p>
                                        <p className="stock mb-1">Voorraadlabel...CTA</p>
                                        <p className="price mb-0">{`€ ${product.prijs} (incl. btw)`}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/*render pagination buttons*/}
            <div className="my-4">
                {createPagination(totalPages, setPage)}
            </div>
        </div>
    );
}