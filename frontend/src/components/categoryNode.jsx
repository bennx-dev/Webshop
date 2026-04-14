import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryNode({node, depth = 0}) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <li className="p-0 m-0 m-1" >
            <span className={`p-0 m-0 px-2 category-title depth-${depth}`}
                  onClick={() => {
                      if (node.children.length > 0) {
                          setOpen(!open);
                      } else {
                          navigate(`/categorie/${node.categorieId}`);
                      }
                  }}
            >
                {node.naam}
            </span>
            {node.children.length > 0 && (
                <ul className="p-0 m-0 px-2"
                    style={{ display: open ? "block" : "none" }}>
                    {
                        node.children.map(child => (
                            <CategoryNode key={child.categorieId} node={child} depth={depth + 1}/>
                        ))
                    }
                </ul>
            )}
        </li>
    );
}