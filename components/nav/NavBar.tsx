/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Sep 09 2022 10:32:01 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useState } from "react";
import { useRouter } from "next/router";
import { navLinks } from "../../config";
import { isActiveRoute } from "../../utils";
// components
import NavLink from "./NavLink";
import NavBrand from "./NavBrand";
import Avatar from "./Avatar";
// icons
import { MdClose, MdMenu } from "react-icons/md";

const NavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="p-2 sm:px-4 flex justify-between items-center 
      flex-wrap border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
    >
      {/* Brand Section 
        1. Brand image will be visible all the time
        2. Brand text will be hidden on mobile device */}
      <div>
        {/* 1. barnd image */}
        <NavBrand />
        {/* 2. brand text */}
      </div>
      {/* Toggle button 
        
        1. Always visible 
        2. Other elements are also always visible */}
      <div className="flex flex-row items-center gap-2 lg:order-2">
        <Avatar />
        {isMenuOpen ? (
          <MdClose
            size={32}
            className="block lg:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <MdMenu
            size={32}
            className="block lg:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>
      {/* Links Section
        
        1. This section should be collapsable which means on a mobile/tablet device 
        this section will be hidden.
        2. This should be opened with a toggle button. */}
      <div
        className={`lg:flex lg:flex-row items-center gap-2
        ${
          isMenuOpen
            ? "border-t mt-2 border-gray-200 dark:border-gray-700 w-full lg:w-fit flex-col"
            : "hidden"
        }`}
      >
        {/* links to render (must be next/link) */}
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.label}
            navLink={navLink}
            isActive={isActiveRoute(router.pathname, navLink.href)}
            showIcon
            showText
            closeNavbar={() => setIsMenuOpen(false)}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
