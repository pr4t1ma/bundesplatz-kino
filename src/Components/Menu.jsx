import { Link } from "react-router-dom";

export const Menu = ({ menuItems }) => {
  return (
    <ul className="flex gap-10">
      {menuItems.map((menuItem) => (
        <li>
          <Link to={menuItem.href}>{menuItem.label}</Link>
        </li>
      ))}
    </ul>
  );
};
