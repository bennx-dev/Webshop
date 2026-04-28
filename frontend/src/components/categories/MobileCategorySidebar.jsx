import Categories from "./Categories.jsx";

export default function MobileCategorySidebar({categories}) {
    return (
        <div
            className="offcanvas offcanvas-start categorieen"
            tabIndex="-1"
            id="offcanvasCategorieen"
            aria-labelledby="offcanvasCategorieenLabel"
        >
            <div className="offcanvas-header">
                <h5 id="offcanvasCategorieenLabel">Menu</h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div className="offcanvas-body">
                <Categories categories={categories}/>
            </div>
        </div>
    );
}