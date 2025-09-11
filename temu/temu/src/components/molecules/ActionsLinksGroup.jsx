import React from "react";
import NavLink from "../atoms/NavLink";
import LangSwitch from "../atoms/LangSwitch";
import { FaHeadset, FaShoppingCart } from "react-icons/fa"; // Add icons
import HeaderBtn from "../atoms/HeaderBtn";
import { useNavigate } from "react-router-dom";

const ActionLinksGroup = () => {
  const navigate = useNavigate();
  return (
    <div className="action-links circle-hover ">
      <NavLink
        text={
          <>
            <FaHeadset /> Support
          </>
        }
        href="#"
      />
      <LangSwitch />
      <NavLink
        text={
          <>
            <FaShoppingCart /> Cart
          </>
        }
        href="#"
      />

      {/* Add Sign In / Register buttons */}
      <HeaderBtn text="Sign In" onClick={() => navigate("/login")} />
      <HeaderBtn text="Register" onClick={() => navigate("/signup")} />
    </div>
  );
};

export default ActionLinksGroup;
