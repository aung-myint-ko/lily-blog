import { twMerge } from "tailwind-merge";

export const cn = (classname: string, restProps: string) => {
  return twMerge(classname, restProps);
};
