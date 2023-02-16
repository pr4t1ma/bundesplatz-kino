import { Link } from "react-router-dom";

export const Menu = ({ menuItems }) => {
  return (
    <ul className="flex gap-10">
      {menuItems.map((menuItem) => (
        <li>
          <Link
            className=" border-b-2 pb-1 border-transparent hover:border-brand-primary"
            to={menuItem.href}
          >
            {menuItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
