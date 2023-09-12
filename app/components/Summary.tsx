import { useAppDispatch, useAppSelector } from "../store/hooks"
import { startOver } from "../store/movingSlicer"
import { ActionButton } from "./ActionButton"
import { Title } from "./Title"

const Summary = () => {
  const place = useAppSelector(state => state.moving.place)
  const phone = useAppSelector(state => state.moving.phone)
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(startOver())
  }

  return (
    <div className="flex flex-col justify-between w-full h-full animate-toLeft">
      <div className="flex flex-col items-center justify-between mb-4">
        <Title>Summary</Title>
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
