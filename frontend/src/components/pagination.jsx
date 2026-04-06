"use strict";

function savePage(page, setPage) {
    //if exists in url, overwrite, otherwise add.
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);

    //set in history stack
    window.history.pushState({}, "", "?" + params.toString());

    //pagination, load page from history stack (Back-forward button in browser)
    window.onpopstate = () => {
        setPage(getPageFromURL());
    };
}

export function getPageFromURL () {
    const page = parseInt(new URLSearchParams(window.location.search).get("page"));
    return isNaN(page) || page < 0 ? 0 : page;
}

function loadPage(page, setPage) {
    window.scroll({ top:0, left:0, behavior: "instant",});
    setPage(page);
    savePage(page, setPage);
}

export function createPagination(totalPages, setPage) {
    const buttons = [];

    for (let page = 0; page < totalPages; page++) {
        buttons.push(
            <button
                key={page}
                onClick={() => loadPage(page+1, setPage)}
                className="paginationButtons m-1"
            >
                {page + 1}
            </button>
        );
    }
    return buttons;
}