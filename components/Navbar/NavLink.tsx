/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Sep 09 2022 10:37:08 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { FC } from "react";
import Link from "next/link";
import { NavLinkType } from "../../types/navlink";
import classNames from "classnames";

interface NavLinkProps {
  navLink: NavLinkType;
  isActive?: boolean;
  showIcon?: boolean;
  showText?: boolean;
  closeNavbar: () => void;
}

const NavLink: FC<NavLinkProps> = ({
  navLink,
  isActive,
  showIcon,
  showText,
  closeNavbar,
}) => {
  return (
    <Link
      href={navLink.href}
      className={classNames(
        `p-3 flex items-center border-0 lg:justify-center`,
        `gap-2 font-poppins font-medium hover:text-blue-500  border-gray-200 dark:border-gray-700`,
        {
          "text-blue-500 dark:text-blue-400": isActive,
          "text-gray-800 dark:text-gray-400": !isActive,
        },
      )}
      onClick={() => closeNavbar()}
    >
      {showIcon && <navLink.icon size={24} />}
      {showText && (
        <span className="uppercase font-poppins text-sm">{navLink.label}</span>
      )}
    </Link>
  );
};

export default NavLink;
