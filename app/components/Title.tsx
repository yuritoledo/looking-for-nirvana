import { ReactNode } from "react"
import { useAppDispatch } from "../store/hooks"
import { goBack } from "../store/movingSlicer"
import clsx from "clsx"

interface Props {
  children: ReactNode
  hasBack?: boolean
}

export const Title = ({ children, hasBack }: Props) => {
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(goBack())
  }

  return (
    <div
      className={clsx("flex items-center justify-center w-full mb-4", {
        "justify-between": hasBack,
      })}
    >
      {hasBack && (
        <button
          className="h-10 w-10 flex justify-center items-center hover:bg-gray-100 transition-all duration-500 rounded-md"
          onClick={onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      <p className="text-3xl font-bold">{children}</p>
      <div />
    </div>
  )
}
