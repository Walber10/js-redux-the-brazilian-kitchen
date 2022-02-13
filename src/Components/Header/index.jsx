import React from "react";
import Logo from "../Logo";
import { useLocation } from "react-router-dom";
import "../Header/header.css";

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <div className="container">{pathname === "/" && <Logo />}</div>
      {pathname === "/recipe" && (
        <nav>
          <div className="container">
            <Logo />
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
