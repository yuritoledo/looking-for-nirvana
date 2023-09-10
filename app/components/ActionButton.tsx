import clsx from "clsx"
import { ButtonHTMLAttributes, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "nextStep" | "startOver"
  children: ReactNode
}

export const ActionButton = ({ variant, children, ...rest }: Props) => {
  const className = clsx("text-white rounded-md p-4 font-bold", {
    "bg-blue-500 hover:bg-blue-700": variant === "nextStep",
    "bg-red-500 hover:bg-red-700": variant === "startOver",
  })

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  )
}
