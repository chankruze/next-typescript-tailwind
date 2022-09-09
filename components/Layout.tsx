/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Sep 09 2022 10:29:46 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Head from "next/head";
import NavBar from "./nav/NavBar";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import {
  APP_AUTHOR,
  APP_AUTHOR_EMAIL,
  APP_AUTHOR_GITHUB,
  APP_AUTHOR_INSTAGRAM,
  APP_AUTHOR_LINKEDIN,
  APP_AUTHOR_TWITTER,
  APP_AUTHOR_YOUTUBE,
  APP_DESCRIPTION,
  APP_NAME,
} from "../config";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
  // hydration tip: https://github.com/vercel/next.js/discussions/38256#discussioncomment-3070196
  return (
    <div className="min-h-screen w-full flex flex-col select-none bg-gray-100 dark:bg-gray-800 overflow-hidden">
      {/* meta tags */}
      <Head>
        {title ? (
          <title>{`${title} | ${APP_NAME}`}</title>
        ) : (
          <title>{APP_NAME}</title>
        )}
        {/* TODO: update favicon.ico */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="author:name" content={APP_AUTHOR} />
        <meta name="author:email" content={APP_AUTHOR_EMAIL} />
        <meta name="author:github" content={APP_AUTHOR_GITHUB} />
        <meta name="author:instagram" content={APP_AUTHOR_INSTAGRAM} />
        <meta name="author:linkedin" content={APP_AUTHOR_LINKEDIN} />
        <meta name="author:twitter" content={APP_AUTHOR_TWITTER} />
        <meta name="author:youtube" content={APP_AUTHOR_YOUTUBE} />
      </Head>
      {/* navbar */}
      <NavBar />
      {/* toast container */}
      {/* <ToastContainer theme="colored" /> */}
      {/* page */}
      {children}
    </div>
  );
};

export default Layout;
