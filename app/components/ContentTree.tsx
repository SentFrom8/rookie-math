import { Link } from "react-router";
import { type Categories, type Directory } from "~/utils/types";

//const ContentTree = ({ categories, prefix }: ContentTreeProps) => {
//    let tree = RouteTree.directories["pages"]
//    let currentDir = tree
//
//
//
//  return <ul> 
//      {Object.entries(categories)
//             .sort(([key1], [key2]) => key1.localeCompare(key2))
//             .map(([section, { path, subcategories }]) => {
//        const combinedPrefix = `${prefix ? prefix + "." : ""}${section[0]}`;
//        return <li className={`pt-1 pl-(--inline-padding-mobile) ${prefix ? "font-normal" : "font-semibold"} whitespace-pre-wrap`} key={path}>
//            <Link className="capitalize"
//              to={ path }>{`${combinedPrefix}   ${section.substring(2).replace('-', ' ')}`}</Link>
//            <ContentTree categories={subcategories} prefix={combinedPrefix} />
//          </li>
//      })}
//    </ul>
//};

const ContentTree = ({ dir, emphasize }: { dir: Directory, emphasize?: boolean }) => {
    return <ul>
        {dir.files.map(file => {
            if (!file.name.includes("index.tsx")) 
                return <li className="pl-(--inline-padding-mobile) pt-1 capitalize" key={file.path}><Link to={file.path.slice(0, -4)}>{file.name.slice(0, -4).replaceAll("-", " ")}</Link></li>
        })}
        {Object.entries(dir.directories).map(([key, value]) => {
            key = key.replace("-", " ")
            let index = value.files.find(file => file.name.includes("index.tsx"))
        return <li key={key} className="pl-(--inline-padding-mobile) pt-1 capitalize">
            {index ? <Link className={emphasize ? `font-semibold` : ""} to={index.path.replace("index.tsx", "")}>{key}</Link> : <p>{key}</p>}
                <ContentTree dir={value} />
            </li>
        })}
    </ul>
}

export default ContentTree;
