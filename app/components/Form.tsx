import { FormHTMLAttributes, ReactNode } from "react"

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}

export const Form = ({ children, ...rest }: Props) => {
  return (
    <form className="w-full flex flex-col justify-between my-5" {...rest}>
      {children}
    </form>
  )
}
