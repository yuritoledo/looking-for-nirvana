import { useAppDispatch } from "./hooks"
import * as movingActions from "./movingSlicer"

export const useMovingDispatcher = () => {
  const dispatch = useAppDispatch()

  const setPhone = (value: string) => {
    dispatch(movingActions.setPhone(value))
  }

  const setPlace = (value: string) => {
    dispatch(movingActions.setPlace(value))
  }

  return {
    setPhone,
    setPlace,
  }
}
