"use client"

import { FocusEvent, FormEvent, useState } from "react"
import { usePlacesWidget } from "react-google-autocomplete"
import { Input } from "./Input"
import { NextButton } from "./NextButton"
import { Title } from "./Title"
import { ErrorMessage } from "../types/ErrorMessage"
import { useMovingDispatcher } from "../store/useMovingDispatcher"
import { Form } from "./Form"

export default function GetPlace() {
  const [address, setAddress] = useState("")
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>("")
  const { setPlace } = useMovingDispatcher()

  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyDEcwhXPX4gPbP-6FINDoWrA0YxeDEJwYc",
    onPlaceSelected: place => {
      setAddress(place.formatted_address)
      setErrorMessage("")
    },
    options: {
      types: ["(regions)"],
      componentRestrictions: { country: "us" },
    },
  })

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!address) {
      setErrorMessage("Please get a location")
      return
    }

    setErrorMessage(null)
    setPlace(address)
  }

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    setAddress(event.target.value)
  }

  return (
    <>
      <Title>Where are you moving from?</Title>

      <Form onSubmit={onSubmit}>
        <Input ref={ref} onBlur={onBlur} errorMessage={errorMessage} />

        <NextButton />
      </Form>
    </>
  )
}
