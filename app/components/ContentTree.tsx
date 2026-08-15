import { useLocation } from "react-router";
import { Link } from "react-router";
import type { Directory } from "~/utils/types";

const ContentTree = ({ dir, indentLevel = 0 }: { dir: Directory, indentLevel?: number, }) => {
    let location = useLocation()
    const sectionNum = (dir.fsPath.match(/\d+(?=-)/g) ?? []).join(".")
    const parsedName = dir.name.split("-").slice(1).join(" ")

    const jsx = <>
    {indentLevel ? <li className="pt-1 capitalize text-(--hard-text-dark)">
            {dir.index ? <Link style={{paddingLeft: `${indentLevel - 1}em`}} className={dir.index.route === location.pathname ? "font-semibold" : ""} to={dir.index.route}>{`${sectionNum} ${parsedName}`}</Link> : `${sectionNum} ${parsedName}`}
        </li> : null}
        {dir.children.map(node => {
            switch (node.type){
                case "File":
                    const sectionNum = (node.route.match(/\d+(?=-)/g) ?? []).join(".")
                    const parsedName = node.name.split("-").slice(1).join(" ")
                    return <li key={node.fsPath}  className="pt-1 capitalize text-(--hard-text-dark)">
                        <Link style={{paddingLeft: `${indentLevel}em`}} className={node.route === location.pathname ? "font-semibold" : ""} to={node.route}>{`${sectionNum} ${parsedName}`}</Link>
                    </li>
                case "Directory":
                    return <ContentTree key={node.fsPath} dir={node} indentLevel={indentLevel + 1} />
            }
        })}
    </>

    return indentLevel ? jsx : <ul>{jsx}</ul>
}

export default ContentTree;
