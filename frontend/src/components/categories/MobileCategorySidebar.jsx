import Categories from "./Categories.jsx";

export default function MobileCategorySidebar({categories, open, onClose}) {
    return (
        <div
            className={`offcanvas offcanvas-start ${open ? "show d-block" : ""}`}
            style={{visibility: open ? "visible" : "hidden"}}
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
                    onClick={onClose}
                ></button>
            </div>
            <div className="offcanvas-body">
                <Categories categories={categories} onClose={onClose}/>
            </div>
        </div>
    );
}