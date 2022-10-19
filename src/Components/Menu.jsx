export const Menu = ({ menuItems }) => {
  return (
    <ul className="flex gap-10">
      {menuItems.map((menuItem) => (
        <li>
          <a href={menuItem.href}>{menuItem.label}</a>
        </li>
      ))}
    </ul>
  );
};
