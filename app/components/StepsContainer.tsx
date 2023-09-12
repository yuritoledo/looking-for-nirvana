import { ReactNode } from "react"
import { useAppSelector } from "../store/hooks"
import clsx from "clsx"

interface Props {
  children: ReactNode
}

const StepsContainer = ({ children }: Props) => {
  const isBack = useAppSelector(state => state.moving.isBack)
  const step = useAppSelector(state => state.moving.step)

  return (
    <div
      className={clsx("w-full", {
        "animate-toRight": isBack,
        "animate-toLeft": step > 1,
        "animate-fade": step === 1,
      })}
    >
      {children}
    </div>
  )
}

export default StepsContainer
