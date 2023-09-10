import { useAppDispatch, useAppSelector } from "../store/hooks"
import { startOver } from "../store/movingSlicer"
import { ActionButton } from "./ActionButton"

const Summary = () => {
  const place = useAppSelector(
    state => state.moving.place || "Washington, DC 10001"
  )
  const phone = useAppSelector(state => state.moving.phone || "(202) 555-1234")
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(startOver())
  }

  return (
    <div className="flex flex-col justify-between w-full h-full my-10">
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-3xl font-bold">Summary</h1>
        <p className="text-xl">
          <span className="font-bold">Place:</span>
          {place}
        </p>
        <p className="text-xl">
          <span className="font-bold">Phone:</span>
          {phone}
        </p>
      </div>
      <ActionButton variant="startOver" onClick={onClick}>
        Start over
      </ActionButton>
    </div>
  )
}

export default Summary
