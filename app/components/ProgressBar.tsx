import clsx from "clsx"
import { useAppSelector } from "../store/hooks"

const ProgressBar = () => {
  const step = useAppSelector(state => state.moving.step)

  return (
    <div className="flex justify-between w-full">
      <div className="w-full rounded-full h-2.5 bg-gray-200">
        <div
          className={clsx(
            "bg-blue-600 h-2.5 rounded-full w-0 duration-500 ease-in-out delay-300",
            {
              "w-1/2": step === 2,
              "w-full bg-green-600": step === 3,
            }
          )}
        />
      </div>
    </div>
  )
}

export default ProgressBar
