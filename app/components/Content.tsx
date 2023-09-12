"use client"

import { useAppSelector } from "../store/hooks"
import GetPhone from "./GetPhone"
import GetPlace from "./GetPlace"
import Summary from "./Summary"

const Content = () => {
  const step = useAppSelector(state => state.moving.step)

  return (
    <>
      {step === 1 && <GetPlace />}
      {step === 2 && <GetPhone />}
      {step === 3 && <Summary />}
    </>
  )
}

export default Content
