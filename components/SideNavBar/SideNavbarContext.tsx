/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Jan 31 2023 20:52:01 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2023 and beyond
*/

import { createContext, useContext } from "react";

export type SideNavbarContextType = {
  showIcon: boolean;
  showLabel: boolean;
};

export const SideNavbarContext = createContext<
  SideNavbarContextType | undefined
>(undefined);

export function useSideNavbarContext(): SideNavbarContextType {
  const context = useContext(SideNavbarContext);

  if (!context) {
    throw new Error(
      "useSideNavbarContext should be used within the SideNavbarContext provider!",
    );
  }

  return context;
}
