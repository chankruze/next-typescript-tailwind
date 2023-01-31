/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Jan 31 2023 17:15:12 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2023 and beyond
*/

"use client";

import { FC, useEffect } from "react";
import { RiToolsLine } from "react-icons/ri";

type Props = {
  error: Error;
  reset: () => void;
};

const Error: FC<Props> = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="p-4 space-y-2 bg-red-800/20 overflow-x-auto">
      <p className="font-mono text-red-400 text-lg">Error loading dashboard;</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-black text-white rounded flex items-center justify-center gap-1"
      >
        <RiToolsLine className="h-6 w-6" />
        <p>Try again</p>
      </button>
      {/* {error.stack ? <pre>{error.stack}</pre> : null} */}
    </div>
  );
};

export default Error;
