import CategoryTree from "./CategoryTree.jsx";

export default function Categories({categories, onClose}) {
    return <CategoryTree categories={categories} onClose={onClose}/>;
}