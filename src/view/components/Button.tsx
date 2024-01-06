import {ComponentProps} from "react";

interface ButtonProps extends ComponentProps<'button'>{}

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={`w-full px-6 h-12 flex justify-center items-center bg-teal-900 rounded-2xl text-white hover:bg-teal-800 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all ${props.className}`}
    >{props.children}</button>
  );
}
