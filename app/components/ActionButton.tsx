import clsx from "clsx"
import { ButtonHTMLAttributes, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "nextStep" | "startOver"
  children: ReactNode
}

export const ActionButton = ({
  variant,
  children,
  className,
  ...rest
}: Props) => {
  const classNames = clsx(
    "text-white rounded-md p-4 font-bold text-lg",
    className,
    {
      "bg-blue-500 hover:bg-blue-700": variant === "nextStep",
      "bg-red-500 hover:bg-red-700": variant === "startOver",
    }
  )

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  )
}
