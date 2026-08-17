import { useLocation } from "react-router";
import { Link } from "react-router";
import type { Directory } from "~/utils/types";

const ContentTree = ({ dir, indentLevel = 0 }: { dir: Directory, indentLevel?: number, }) => {
    let location = useLocation()
    const sectionNum = (dir.fsPath.match(/\d+(?=-)/g) ?? []).join(".")
    const parsedName = dir.name.split("-").slice(1).join(" ")

    const jsx = <>
    {indentLevel ? <li className={`capitalize text-(--hard-text-dark) ${indentLevel === 1 ? "font-semibold border-t-1 border-(--soft-lines)" : ""}`}>
            {dir.index ? <Link style={{paddingLeft: `${indentLevel}em`}} className={`${dir.index.route === location.pathname ? "bg-(--menu-color-medium) border-l-4 border-(--accent)" : ""} w-full inline-block py-1 hover:text-(--soft-lines)`} to={dir.index.route}>{`${sectionNum} ${parsedName}`}</Link> : <div style={{ paddingLeft: `${indentLevel}em` }} className="py-1" >{sectionNum} {parsedName}</div>}
        </li> : null}
        {dir.children.map(node => {
            switch (node.type){
                case "File":
                    const sectionNum = (node.route.match(/\d+(?=-)/g) ?? []).join(".")
                    const parsedName = node.name.split("-").slice(1).join(" ")
                    return <li key={node.fsPath}  className={`capitalize text-(--hard-text-dark) ${indentLevel === 1 ? "font-semibold border-t-1 border-(--soft-lines)" : ""} `}>
                        <Link style={{paddingLeft: `${indentLevel + 1}em`}} className={`${node.route === location.pathname ? "bg-(--menu-color-medium) border-l-4 border-(--accent)" : ""} w-full inline-block py-1 hover:text-(--soft-lines)`} to={node.route}>{`${sectionNum} ${parsedName}`}</Link>
                    </li>
                case "Directory":
                    return <ContentTree key={node.fsPath} dir={node} indentLevel={indentLevel + 1} />
            }
        })}
    </>

    return indentLevel ? jsx : <ul>{jsx}</ul>
}

export default ContentTree;
