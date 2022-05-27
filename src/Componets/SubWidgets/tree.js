import { useState } from "react";

const Tree = ({ data = [] }) => {

    return (
        <>


           
                {data.map((tree) => (
                    <TreeNode node={tree} />
                ))}

            

        </>

    );
}

const TreeNode = ({ node }) => {
    const [childVisible, setChildVisiblity] = useState(false);

    const hasChild = node.children ? true : false;

    return (
        <li>
            <div className="reletive-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
                {hasChild && (
                    <div
                        className={`align_pm ${childVisible ? "fa fa-minus" : "fa fa-plus"
                            }`}
                    >
                    </div>
                )}

                <div className="elements">
                    <i className="folder_icon">📁</i>
                    <div className="folder_names">
                        <h6>{node.title}</h6>
                        <span>{node.date}</span>
                    </div>
                    <small class="badge">{node.badge}</small>
                </div>
            </div>

            {hasChild && childVisible && (
                <ul className="child_element">
                    <Tree data={node.children} />
                </ul>
            )}
        </li>
    );
};
export default Tree;