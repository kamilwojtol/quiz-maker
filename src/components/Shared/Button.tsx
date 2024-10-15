import React, { HTMLProps } from "react";

type Props = {
  children?: React.ReactNode;
  className?: HTMLProps<HTMLButtonElement>["className"];
  disabled?: boolean;
  onClick?: () => void;
  type?: "primary" | "success" | "danger" | "warning";
};

export default function Button({
  children,
  className,
  disabled,
  onClick,
  type = "primary",
}: Props) {
  function buttonClassName() {
    switch (type) {
      case "primary":
        return "border-slate-400 bg-slate-200";
      case "success":
        return "border-green-400 bg-green-200 ";
      case "danger":
        return "border-red-400 bg-red-200";
      case "warning":
        return "border-yellow-400 bg-yellow-200";
      default:
        return "border-slate-400 bg-slate-200";
    }
  }

  return (
    <button
      className={`border-2 p-2 rounded-lg disabled:opacity-30 ${buttonClassName()} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
