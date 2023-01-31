/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Jan 31 2023 16:52:20 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2023 and beyond
*/

import { RiHome2Line } from "react-icons/ri";

export default function Page() {
  return (
    <div className="p-4 text-4xl">
      <div className="flex items-center justify-center gap-2">
        <RiHome2Line />
        <h1 className="font-mono">Home</h1>
      </div>
    </div>
  );
}
