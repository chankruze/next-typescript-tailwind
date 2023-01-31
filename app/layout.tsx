/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Jan 31 2023 16:52:15 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2023 and beyond
*/

import { FC, ReactNode } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-full flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-white overflow-hidden select-none">
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
