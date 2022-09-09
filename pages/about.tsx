/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Sep 09 2022 12:44:58 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { ReactElement } from "react";
import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return <div>About</div>;
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Home">{page}</Layout>;
};

export default About;
