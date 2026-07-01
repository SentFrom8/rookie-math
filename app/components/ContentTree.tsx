import { Link } from "react-router";
import { type Categories } from "~/utils/types";

interface ContentTreeProps {
  categories: Categories
  prefix?: string
}

const ContentTree = ({ categories, prefix }: ContentTreeProps) => {
  return <ul> 
      {Object.entries(categories)
             .sort(([key1], [key2]) => key1.localeCompare(key2))
             .map(([section, { path, subcategories }]) => {
        const combinedPrefix = `${prefix ? prefix + "." : ""}${section[0]}`;
        return <li className={`pt-1 pl-(--inline-padding-mobile) ${prefix ? "font-normal" : "font-semibold"} whitespace-pre-wrap`} key={path}>
            <Link className="capitalize"
              to={ path }>{`${combinedPrefix}   ${section.substring(2).replace('-', ' ')}`}</Link>
            <ContentTree categories={subcategories} prefix={combinedPrefix} />
          </li>
      })}
    </ul>
};

export default ContentTree;
