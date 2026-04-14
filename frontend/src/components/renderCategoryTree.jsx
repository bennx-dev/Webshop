import {buildCategoryTree} from "./buildCategoryTree.jsx";
import CategoryNode from "./categoryNode.jsx";

export default function RenderCategoryTree({categories}) {
    const tree = buildCategoryTree(categories);

    return (
        <>

        <div className="p-0 m-0 categorieen">
            <h5 className="p-0 m-0 m-1 mb-3">Categorieën</h5>
            <ul className="p-0 m-0">
                {
                    tree.map(node => (
                        <CategoryNode key={node.categorieId} node={node}/>
                    ))
                }
            </ul>
        </div>
        </>

    );
}