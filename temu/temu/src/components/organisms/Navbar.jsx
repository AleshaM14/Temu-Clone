import React from "react";
import Logo from "../atoms/Logo";
import SearchBar from "../atoms/SearchBar";
import MenuLinksGroup from "../molecules/MenuLinksGroup";
import ActionsLinksGroup from "../molecules/ActionsLinksGroup.jsx";
import "./Navbar.css";

const Navbar = () => (
  <header className="navbar">
    <Logo />
    <MenuLinksGroup />
    <SearchBar />
    <ActionsLinksGroup />
  </header>
);

export default Navbar;
