import clsx from "clsx"
import { InputHTMLAttributes, Ref, RefObject } from "react"
import { ErrorMessage } from "../types/ErrorMessage"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage: ErrorMessage
  ref?: any
}

export const Input = (props: Props) => {
  const { errorMessage, ...rest } = props

  const className = clsx("border border-gray-300 rounded-md p-4 w-full", {
    "border-red-500": errorMessage,
    "mb-10": !errorMessage,
  })

  return (
    <div>
      <input className={className} {...rest} />
      {errorMessage && <p className="text-red-500 pb-4">{errorMessage}</p>}
    </div>
  )
}
