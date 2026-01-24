import { Link } from "react-router";

interface SidebarProps {
  categories: Category;
  prefix?: string;
}

const Sidebar = ({ categories, prefix }: SidebarProps) => {
  return (
    <ul>
      {Object.entries(categories).map(([section, { path, subcategory }], i) => {
        const combinedPrefix = `${prefix ? prefix + "." : ""}${i + 1}`;
        return (
          <li className={`pl-3`} key={path}>
            <Link
              to={
                path
              }>{`${combinedPrefix}. ${section.replace("-", " ")}`}</Link>
            <Sidebar categories={subcategory} prefix={combinedPrefix} />
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
