"use client"

import { FocusEvent, FormEvent, useState } from "react"
import { usePlacesWidget } from "react-google-autocomplete"
import { Input } from "./Input"
import { NextButton } from "./NextButton"
import Title from "./Title"
import { ErrorMessage } from "../types/ErrorMessage"

export default function GetPlace() {
  const [place, setPlace] = useState("")
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>("")

  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyDEcwhXPX4gPbP-6FINDoWrA0YxeDEJwYc",
    onPlaceSelected: place => {
      setPlace(place.formatted_address)
      setErrorMessage("")
    },
    options: {
      types: ["(regions)"],
      componentRestrictions: { country: "us" },
    },
  })

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!place) {
      setErrorMessage("Please get a location")
      return
    }

    setErrorMessage(null)
    setPlace(place)
  }

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    setPlace(event.target.value)
  }

  return (
    <>
      <Title>Where are you moving from?</Title>

      <form className="flex flex-col w-full" onSubmit={onSubmit}>
        <Input ref={ref} onBlur={onBlur} errorMessage={errorMessage} />

        <NextButton />
      </form>
    </>
  )
}
