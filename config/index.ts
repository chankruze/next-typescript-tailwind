/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Sep 09 2022 10:35:35 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { NavLinkType } from "../types/navlink";
// icons
import { MdHome, MdInfo } from "react-icons/md";

export const navLinks: NavLinkType[] = [
  {
    label: "Home",
    href: "/",
    icon: MdHome,
    roles: [],
  },
  {
    label: "about",
    href: "/about",
    icon: MdInfo,
    roles: [],
  },
];

export const APP_NAME = "NTT";
export const APP_VERSION = "0.0.0";
export const APP_DESCRIPTION = "";
export const APP_AUTHOR = "chankruze";
export const APP_AUTHOR_EMAIL = "chankruze@gmail.com";
export const APP_AUTHOR_TWITTER = "https://twitter.com/chankruze";
export const APP_AUTHOR_LINKEDIN = "https://www.linkedin.com/in/chankruze/";
export const APP_AUTHOR_GITHUB = "https://github.com/chankruze";
export const APP_AUTHOR_INSTAGRAM = "https://www.instagram.com/chankruze/";
export const APP_AUTHOR_YOUTUBE = "https://www.youtube.com/c/geekofia";
