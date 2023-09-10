import clsx from "clsx"
import { useAppSelector } from "../store/hooks"

const ProgressBar = () => {
  const step = useAppSelector(state => state.moving.step)

  const containerClassName = clsx(
    "flex justify-between w-full py-4 duration-500 delay-300 ease-in-out",
    {
      "opacity-0": step == 1,
      "opacity-1": step > 1,
    }
  )

  const progressBarClassName = clsx(
    "h-3 rounded-full w-0 duration-700 delay-500 ease-in-out",
    {
      "w-1/2 bg-green-500": step === 2,
      "w-full bg-green-700 animate-pulse": step === 3,
    }
  )

  return (
    <div className={containerClassName}>
      <div className="w-full rounded-full h-3 bg-gray-200">
        <div className={progressBarClassName} />
      </div>
    </div>
  )
}

export default ProgressBar
