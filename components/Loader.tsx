/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Jan 31 2023 22:21:51 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2023 and beyond
*/

import { FC, PropsWithChildren } from "react";
import Spinner from "./Spinner";

type Props = PropsWithChildren & {
  message: string;
};

const Loader: FC<Props> = ({ message }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <Spinner />
      <p>{message}</p>
    </div>
  );
};

export default Loader;
