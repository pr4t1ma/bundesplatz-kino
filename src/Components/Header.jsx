import { Menu } from "./Menu";
import { Logo } from "./Logo";

import { useState } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faMultiply } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const menuItems = [
    { label: "Programme", href: "/programme" },
    { label: "Events", href: "/event" },
    { label: "Aboutus", href: "/aboutUs" },
    { label: "Contact", href: "/contact" },
  ];
  const [isMenuOpen] = useState(true);
  return (
    <header className="App-header container mx-auto grid items-center grid-cols-12  my-10">
      <div className="col-span-5">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      {/* {!isMenuOpen && (
        <button onClick={() => setMenuOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
      {isMenuOpen && (
        <button onClick={() => setMenuOpen(false)}>
          <FontAwesomeIcon icon={faMultiply} />
        </button>
      )} */}
      <div className="col-span-5 justify-center">
        {isMenuOpen && <Menu menuItems={menuItems} />}
      </div>

      <div className="col-span-2">
        <a href="#/booking">
          <button className="button--secondary-dark">Buchung</button>
        </a>
      </div>
    </header>
  );
};
