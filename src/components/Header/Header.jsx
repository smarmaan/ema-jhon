import React from "react";

import logo from "../../images/Logo.svg";
const Header = () => {
  return (
    <div
      id="header"
      className="flex justify-between bg-slate-900 items-center text-xl p-2"
    >
      <div className="mx-14 p-3">
        <img src={logo} alt="" />
      </div>

      <div className="text-white flex gap-12 mr-32">
        <a href="/order">Order</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;
