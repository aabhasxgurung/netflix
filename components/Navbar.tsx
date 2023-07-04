import React, { useCallback, useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 `}
      >
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
