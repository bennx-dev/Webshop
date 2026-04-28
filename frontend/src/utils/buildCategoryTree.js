"use strict";

export function buildCategoryTree(categories) {
    const categorieMap = new Map();
    const categoryTree = [];

    categories.forEach(category => {
        categorieMap.set(category.categorieId, {
            ...category, children: []
        });
    })

    categories.forEach(category => {
        const node = categorieMap.get(category.categorieId);

        if (category.hoofdCategorieId === null) {
            categoryTree.push(node);
        } else {
            const parent = categorieMap.get(category.hoofdCategorieId);
            if (parent) {
                parent.children.push(node);
            }
        }
    })
    return categoryTree;
}