import {savePage} from "../../utils/pagination.js";

export default function Pagination({totalPages, setPage}) {

    function loadPage(page) {
        window.scroll({top: 0, left: 0, behavior: "instant",});
        setPage(page);
        savePage(page, setPage);
    }

    const buttons = [];

    for (let page = 0; page < totalPages; page++) {
        buttons.push(
            <button
                key={page}
                onClick={() => loadPage(page + 1)}
                className="paginationButtons m-1"
            >
                {page + 1}
            </button>
        );
    }
    return <div className="my-4">{buttons}</div>;
}