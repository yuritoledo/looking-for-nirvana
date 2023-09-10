import { FormHTMLAttributes, ReactNode } from "react"

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}

export const Form = ({ children, ...rest }: Props) => {
  return (
    <form className="flex flex-col w-full" {...rest}>
      {children}
    </form>
  )
}
