/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Jan 31 2023 17:43:02 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2023 and beyond
*/

import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  message?: string;
};

const ErrorMessage: FC<Props> = ({ children, message }) => {
  if (children) {
    <>{children}</>;
  }

  return <div className="font-mono text-red-400">{message}</div>;
};

export default ErrorMessage;
