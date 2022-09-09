/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Sep 09 2022 12:39:38 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Image from "next/image";
import React, { useState } from "react";

const Avatar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative h-full">
      <div
        className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Image
          src="https://picsum.photos/200"
          layout="fill"
          className="object-fill"
          alt="Avatar"
        />
      </div>
      {isMenuOpen && (
        <div
          className="z-50 absolute w-64 p-4 mt-1 right-0 rounded-lg shadow-lg
        bg-white dark:bg-gray-800 border dark:border-gray-700"
        >
          <div className="mb-4">
            <p className="font-medium">Name</p>
            <p className="text-gray-400">username/email</p>
          </div>
          <button
            className="w-full p-2 capitalize text-white bg-red-600 hover:bg-red-700 rounded-lg"
            onClick={() => console.log("signout")}
          >
            sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Avatar;
