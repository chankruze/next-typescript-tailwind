/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Sep 09 2022 12:30:40 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

export const isActiveRoute = (pathname: string, route: string): boolean => {
  // exact pathname
  // i.e. pathname --> http://localhost/customers, route --> /customers
  if (pathname === route) return true;

  // if the pathname contains the route name
  // i.e. pathname --> http://localhost/customers/new, route --> /customers
  if (
    pathname
      .split("/")
      .filter((i) => i !== "")
      .includes(route.slice(1))
  )
    return true;

  return false;
};
