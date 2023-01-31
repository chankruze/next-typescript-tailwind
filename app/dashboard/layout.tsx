/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Jan 31 2023 20:23:45 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2023 and beyond
*/

"use client";

import { FC, PropsWithChildren, useState } from "react";
import { MdApps } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";
import { SideNavBar } from "../../components/SideNavBar";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  const [isSideNavFolded, setIsSideNavFolded] = useState(false);
  const [isSideNavCollapsed] = useState(false);

  return (
    <section className="flex flex-1 overflow-hidden">
      {!isSideNavCollapsed && (
        <SideNavBar
          navLinks={[
            {
              icon: MdApps,
              href: "/dashboard/apps",
              label: "Apps",
            },
            {
              icon: RiNotification3Line,
              href: "/dashboard/notifications",
              label: "Notifications",
            },
          ]}
          isFolded={isSideNavFolded}
          toggleFold={setIsSideNavFolded}
        />
      )}
      <div className="flex-1">{children}</div>
    </section>
  );
};

export default DashboardLayout;
