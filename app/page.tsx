"use client"

import ProgressBar from "./components/ProgressBar"
import { Providers } from "./store/provider"
import { PersistGate } from "redux-persist/integration/react"
import { persistor } from "./store/store"
import Content from "./components/Content"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between my-2 px-5 w-full md:w-7/12 lg:w-5/12 xl:w-4/12 2xl:w-4/12">
      <Providers>
        <PersistGate loading={null} persistor={persistor}>
          <ProgressBar />
          <Content />
        </PersistGate>
      </Providers>
    </main>
  )
}
