"use client"

import clsx from "clsx"
import { useState } from "react"
import { usePlacesWidget } from "react-google-autocomplete"

export default function Home() {
  const [place, setPlace] = useState("")
  const [hasError, setHasError] = useState(false)

  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyDEcwhXPX4gPbP-6FINDoWrA0YxeDEJwYc",
    onPlaceSelected: place => {
      setPlace(place.formatted_address)
      setHasError(false)
    },
    inputAutocompleteValue: place,
    options: {
      types: ["(regions)"],
      componentRestrictions: { country: "us" },
    },
  })

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!place) {
      setHasError(true)
      return
    }

    setHasError(false)
  }

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setPlace(event.target.value)
  }

  const inputClass = clsx("border border-gray-300 rounded-md p-4 w-full", {
    "border-red-500": hasError,
    "mb-10": !hasError,
  })

  return (
    <main className="flex flex-col items-center justify-between py-24 px-5">
      <p className="text-2xl font-bold">Where are you moving from?</p>

      <form className="flex sm:flex-col w-full" onSubmit={onSubmit}>
        <input ref={ref} className={inputClass} onBlur={onBlur} />
        {hasError && <p className="text-red-500 pb-4">Please get a location</p>}

        <button className="sm:bg-blue-500 text-white rounded-md p-4">
          Next
        </button>
      </form>
    </main>
  )
}
