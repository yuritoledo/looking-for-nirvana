"use client"

import { useAppSelector } from "./store/hooks"
import GetPlace from "./components/GetPlace"
import GetPhone from "./components/GetPhone"
import Summary from "./components/Summary"
import ProgressBar from "./components/ProgressBar"

export default function Home() {
  const step = useAppSelector(state => state.moving.step)

  return (
    <main className="flex flex-col items-center justify-between my-2 px-5 w-full md:w-7/12 lg:w-5/12 xl:w-4/12 2xl:w-4/12">
      <ProgressBar />

      {step === 1 && <GetPlace />}
      {step === 2 && <GetPhone />}
      {step === 3 && <Summary />}
    </main>
  )
}
