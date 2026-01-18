import { Link } from "react-router";

interface SidebarProps {
  categories: Category;
  prefix?: string;
}

const Sidebar = ({ categories, prefix }: SidebarProps) => {
  return (
    <ul>
      {Object.entries(categories).map(([section, { path, subcategory }], i) => {
        return (
          <li className={`pl-3`}>
            <Link to={path}>
              {`${prefix ? prefix + "." : ""}${i + 1}. ${section}`}
            </Link>
            <Sidebar categories={subcategory} prefix={`${i + 1}`} />
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
