/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Jan 31 2023 20:50:10 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2023 and beyond
*/

import { FC } from "react";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
// import { StaffRoles } from "../../../enums";
import { isActiveRoute } from "../../utils";
import { SideNavbarContext } from "./SideNavbarContext";
import { SideNavItem, SideNavLinkType } from "./SideNavItem";

export type SideNavBarProps = {
  navLinks: Array<SideNavLinkType>;
  isFolded: boolean;
  // eslint-disable-next-line no-unused-vars
  toggleFold: (val: boolean) => void;
};

export const SideNavBar: FC<SideNavBarProps> = ({
  navLinks,
  isFolded,
  toggleFold,
}) => {
  const path = usePathname() as string;
  // const { data: session } = useSession();

  // useEffect(() => {
  //   if (!session) router.replace("/auth/signin");
  // }, [router, session]);

  return (
    <aside className="hidden sm:flex h-full flex-col gap-4 border-r border-gray-200 dark:border-gray-800">
      {/* links */}
      <SideNavbarContext.Provider
        value={{
          showLabel: !isFolded,
          showIcon: true,
        }}
      >
        <nav className={`p-2 flex-1 space-y-2 overflow-y-auto`}>
          {/* links to render (must be next/link) */}
          {navLinks
            // .filter((link) =>
            //   link.roles.includes(session?.user?.role as StaffRoles),
            // )
            .map((navLink: SideNavLinkType) => (
              <SideNavItem
                key={navLink.label}
                navLink={navLink}
                isActive={isActiveRoute(path, navLink.href)}
              />
            ))}
        </nav>
        <div className="p-2 flex flex-col justify-center">
          <div
            className="p-3 w-fit cursor-pointer bg-gray-100 hover:bg-gray-200
             dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white rounded"
            onClick={() => toggleFold(!isFolded)}
          >
            {isFolded ? (
              <RiMenuUnfoldLine className="w-4 h-4 sm:w-6 sm:h-6" />
            ) : (
              <RiMenuFoldLine className="w-4 h-4 sm:w-6 sm:h-6" />
            )}
          </div>
        </div>
      </SideNavbarContext.Provider>
    </aside>
  );
};
