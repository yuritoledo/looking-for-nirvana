import { useAppDispatch, useAppSelector } from "../store/hooks"
import { startOver } from "../store/movingSlicer"
import { ActionButton } from "./ActionButton"

const Summary = () => {
  const place = useAppSelector(state => state.moving.place)
  const phone = useAppSelector(state => state.moving.phone)
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(startOver())
  }

  return (
    <div className="flex flex-col justify-between w-full h-full my-10">
      <div className="flex flex-col items-center justify-between mb-4">
        <h1 className="text-3xl font-bold mb-8 font">Summary</h1>
        <p className="text-xl mb-2">
          <span className="font-bold">Place:</span> {place}
        </p>
        <p className="text-xl mb-4">
          <span className="font-bold">Phone:</span> {phone}
        </p>
      </div>
      <ActionButton variant="startOver" onClick={onClick}>
        Start over
      </ActionButton>
    </div>
  )
}

export default Summary
