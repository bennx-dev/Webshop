"use strict";

export function setPageInUrl(page) {
    //?page=2, exists? -> overwrite, otherwise add.
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);

    //change URL without reload
    window.history.pushState({}, "", "?" + params.toString());
}

export function createPagination(totalPages, currentPage, setPage) {
    const pages = [];

    for (let i = 0; i < totalPages; i++) {
        pages.push(i);
    }

    return pages.map((page) => (
        <button
            key={page}
            onClick={() => setPage(page)}
            style = {{ width: "40px", height: "40px" }}
            className="paginationButtons m-1"
        >
            {page + 1}
        </button>
    ));
}