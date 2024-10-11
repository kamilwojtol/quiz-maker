import React, { HTMLProps } from "react";

type Props = {
  children?: React.ReactNode;
  className?: HTMLProps<HTMLButtonElement>["className"];
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  className,
  disabled,
  onClick,
}: Props) {
  return (
    <button
      className={"border-2 p-2 rounded-lg disabled:opacity-30 " + className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
