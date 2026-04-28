"use strict";

export function getPageFromURL() {
    const page = parseInt(new URLSearchParams(window.location.search).get("page"));
    return isNaN(page) || page < 1 ? 1 : page;
}

export function savePage(page) {
    //if exists in url, overwrite, otherwise add.
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);

    //set in history stack
    window.history.pushState({}, "", "?" + params.toString());
}