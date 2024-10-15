import { XMarkIcon } from "@heroicons/react/16/solid";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  isVisible: boolean;
  changeVisibility?: () => void;
};

export default function Modal({
  children,
  className,
  changeVisibility,
  isVisible,
}: Props) {
  return (
    <div
      className={`${className} ${isVisible ? "" : "hidden"} absolute flex items-center top-0 right-0 border-2 rounded-lg bg-gray-200 p-4 m-4 w-1/2`}
    >
      {children}
      <XMarkIcon
        className="size-5 ml-auto cursor-pointer"
        onClick={changeVisibility}
      />
    </div>
  );
}
