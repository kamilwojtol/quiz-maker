import React, { HTMLProps } from "react";

type Props = {
  children?: React.ReactNode;
  className?: HTMLProps<HTMLButtonElement>["className"];
  disabled?: boolean;
  onClick?: () => void;
  type?: "primary" | "success";
};

export default function Button({
  children,
  className,
  disabled,
  onClick,
  type = "primary",
}: Props) {
  return (
    <button
      className={
        type === "success"
          ? "border-2 p-2 rounded-lg disabled:opacity-30 border-green-400 bg-green-200 " +
            className
          : "border-2 p-2 rounded-lg disabled:opacity-30 border-slate-400 bg-slate-200 " +
            className
      }
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
