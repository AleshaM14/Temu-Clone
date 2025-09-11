import React, { useState } from "react";
import NavLink from "../atoms/NavLink";
import CategoriesDropdown from "../organisms/CategoriesDropdown";

const MenuLinksGroup = () => {
  const [showdrop, setshowdrop] = useState(false);
  return (
    <div className="menu-links" onMouseLeave={() => setshowdrop(false)}>
      <NavLink text="Best Selling " />
      <NavLink text="5-Star Rated" />
      <NavLink text="New In" />

      {/* Hover on this div shows dropdown */}
      <div
        className="nav-link categories-link"
        onMouseEnter={() => setshowdrop(true)}
      >
        Categories
        {/* Conditionally show the dropdown */}
        {showdrop && <CategoriesDropdown />}
      </div>
    </div>
  );
};

export default MenuLinksGroup;
