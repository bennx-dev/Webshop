//root > child > subchild > subsubchild > ...
import {useEffect, useState} from "react";

export default function Categorieen() {
    const [categorieen, setCategorieen] = useState([]);

    useEffect(() => {
        async function fetchCategorieen() {
            try {
                const response = await fetch("api/categorieen");
                if (response.ok) {
                    const data = await response.json();
                    setCategorieen(data);
                }
            } catch (error) {
                console.error("Fout bij ophalen categorieën:", error);
            }
        }

        fetchCategorieen();
    }, []);

    //filter root-categorieen naar een aparte array
    const rootCategorieen = categorieen.filter(categorie => categorie.hoofdCategorieId === null);

    //recursieve functie
    function renderSubCategorieen(currentCategorie) {

        //filter sub-categorieen naar een aparte array
        const subCategorieen = categorieen.filter(categorie => categorie.hoofdCategorieId === currentCategorie);

        //'null' geeft aan dat er voor 'currentCategorie' geen sub-categorie is.
        if (subCategorieen.length === 0) return null;

        return (
            <ul className="pt-2 pb-3 px-3 m-0">
                {subCategorieen.map(categorie => {

                    //Een sub-categorie kan op zichzelf een hoofdcategorie zijn voor andere sub-categorie(en).
                    //subsub-categorieen en dieper verzamelen we in de variabele 'childs'
                    const childs = renderSubCategorieen(categorie.categorieId);

                    return (
                        <li key={categorie.categorieId} className="my-1 py-1 px-3">
                            {childs ? (

                                //teken nieuwe sub-categorie met 'childs' indien 'childs' inhoud bevat
                                <details className="mb-3">
                                    <summary className="py-3 px-3">{categorie.naam}</summary>
                                    {childs}
                                </details>

                            ) : (
                                //anders teken naam van de sub-categorie
                                categorie.naam
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    }

    return (
        <>
            {/* Mobile offcanvas */}
            <div
                className="offcanvas offcanvas-start categorieen"
                tabIndex="-1"
                id="offcanvasCategorieen"
                aria-labelledby="offcanvasCategorieenLabel"
            >
                <div className="offcanvas-header">
                    <h5 id="offcanvasCategorieenLabel">Categorieën</h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    {rootCategorieen.map(rootCategorie => (
                        <details key={rootCategorie.categorieId} className="mb-3">
                            <summary className="py-3 px-3">{rootCategorie.naam}</summary>
                            {renderSubCategorieen(rootCategorie.categorieId)}
                        </details>
                    ))}
                </div>
            </div>

            {/* Desktop sidebar */}
            <aside className="d-none d-md-block p-3 categorieen">
                <h2 className="mb-3">Categorieën</h2>
                {rootCategorieen.map(rootCategorie => (
                    <details key={rootCategorie.categorieId} className="mb-3">
                        <summary className="py-3 px-3">{rootCategorie.naam}</summary>
                        {renderSubCategorieen(rootCategorie.categorieId)}
                    </details>
                ))}
            </aside>
        </>
    );
}