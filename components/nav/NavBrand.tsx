/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Sep 09 2022 12:35:37 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Link from "next/link";
import { APP_NAME } from "../../config";

const NavBrand = () => {
  return (
    <Link href="/">
      <a className="self-center whitespace-nowrap text-2xl sm:text-3xl dark:text-white font-montserrat font-bold uppercase">
        {APP_NAME}
      </a>
    </Link>
  );
};

export default NavBrand;
