/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Sep 09 2022 12:38:32 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { IconType } from "react-icons";
import { StaffRoles } from "../enums";

export interface NavLinkType {
  href: string;
  label: string;
  icon: IconType;
  roles: Array<StaffRoles>;
}
