import {twMerge} from "tailwind-merge";
import clsx, {ClassValue} from "clsx";

export default function className(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
