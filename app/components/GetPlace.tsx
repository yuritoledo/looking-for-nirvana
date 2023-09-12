"use client"
import { FocusEvent, FormEvent, useState } from "react"
import { usePlacesWidget } from "react-google-autocomplete"
import { Input } from "./Input"
import { ActionButton } from "./ActionButton"
import { Title } from "./Title"
import { ErrorMessage } from "../types/ErrorMessage"
import { Form } from "./Form"
import { useAppDispatch } from "../store/hooks"
import { setPlace } from "../store/movingSlicer"
import StepsContainer from "./StepsContainer"

const GetPlace = () => {
  const [address, setAddress] = useState("")
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>("")
  const dispatch = useAppDispatch()

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
    dispatch(setPlace(address))
  }

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    setAddress(event.target.value)
  }

  return (
    <StepsContainer>
      <Title>Where are you moving from?</Title>

      <Form onSubmit={onSubmit}>
        <Input ref={ref} onBlur={onBlur} errorMessage={errorMessage} />
        <ActionButton variant="nextStep">Next</ActionButton>
      </Form>
    </StepsContainer>
  )
}

export default GetPlace
