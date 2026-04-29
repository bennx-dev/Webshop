import {buildCategoryTree} from "../../utils/buildCategoryTree.js";
import CategoryNode from "./CategoryNode.jsx";

export default function CategoryTree({categories, onClose}) {
    const tree = buildCategoryTree(categories);

    return (
        <>

            <div className="p-0 m-0 categorieen">
                <h5 className="p-0 m-0 m-1 mb-3">Categorieën</h5>
                <ul className="p-0 m-0">
                    {
                        tree.map(node => (
                            <CategoryNode key={node.categorieId} node={node} onClose={onClose}/>
                        ))
                    }
                </ul>
            </div>
        </>

    );
}