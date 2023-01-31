/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Jan 31 2023 20:52:47 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2023 and beyond
*/

import { FC } from "react";
import Link from "next/link";
import classNames from "classnames";
import { IconType } from "react-icons";
// import { StaffRoles } from "../../../enums";
import { useSideNavbarContext } from "./SideNavbarContext";

export interface SideNavLinkType {
  href: string;
  label: string;
  icon: IconType;
  //   roles: Array<StaffRoles>;
}

interface SideNavLinkProps {
  navLink: SideNavLinkType;
  isActive?: boolean;
  showIcon?: boolean;
  showLabel?: boolean;
}

export const SideNavItem: FC<SideNavLinkProps> = ({ navLink, isActive }) => {
  const { showIcon, showLabel } = useSideNavbarContext();

  return (
    <Link
      href={navLink.href}
      className={classNames(
        "p-3 flex items-center border-0 space-x-2 rounded duration-200 font-medium",
        {
          "text-white bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-600":
            isActive,
          "text-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800":
            !isActive,
        },
      )}
    >
      {showIcon && <navLink.icon className="w-4 h-4 sm:w-6 sm:h-6" />}
      {showLabel && (
        <span className="uppercase font-poppins text-sm">{navLink.label}</span>
      )}
    </Link>
  );
};
