/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Jan 31 2023 16:52:07 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2023 and beyond
*/

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

export default function Head() {
  return (
    <>
      <title>{APP_NAME}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={APP_DESCRIPTION} />
      <meta name="author:name" content={APP_AUTHOR} />
      <meta name="author:email" content={APP_AUTHOR_EMAIL} />
      <meta name="author:github" content={APP_AUTHOR_GITHUB} />
      <meta name="author:instagram" content={APP_AUTHOR_INSTAGRAM} />
      <meta name="author:linkedin" content={APP_AUTHOR_LINKEDIN} />
      <meta name="author:twitter" content={APP_AUTHOR_TWITTER} />
      <meta name="author:youtube" content={APP_AUTHOR_YOUTUBE} />
    </>
  );
}
