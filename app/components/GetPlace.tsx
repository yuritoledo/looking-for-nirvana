"use client"
import { ChangeEvent, FocusEvent, FormEvent, useEffect, useState } from "react"
import { usePlacesWidget } from "react-google-autocomplete"
import { Input } from "./Input"
import { ActionButton } from "./ActionButton"
import { Title } from "./Title"
import { ErrorMessage } from "../types/ErrorMessage"
import { Form } from "./Form"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { setPlace } from "../store/movingSlicer"
import StepsContainer from "./StepsContainer"

const GetPlace = () => {
  const [address, setAddress] = useState("")
  const [isDirty, setIsDirty] = useState(false)
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(null)
  const dispatch = useAppDispatch()
  const place = useAppSelector(state => state.moving.place)

  useEffect(() => {
    if (place) {
      setAddress(place)
      setIsDirty(false)
    }
  }, [place, dispatch])

  const { ref } = usePlacesWidget({
    apiKey: "",
    onPlaceSelected: place => {
      setAddress(place.formatted_address)
      setIsDirty(false)
      setErrorMessage(null)
    },
    options: {
      types: ["(regions)"],
      componentRestrictions: { country: "us" },
    },
  })

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value)
    setIsDirty(true)
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!address) {
      setErrorMessage("Please get a location")
      return
    }

    if (isDirty) {
      setErrorMessage("Please get valid a location")
      return
    }

    setErrorMessage(null)
    dispatch(setPlace(address))
  }

  return (
    <StepsContainer>
      <Title>Where are you moving from?</Title>

      <Form onSubmit={onSubmit}>
        <Input
          ref={ref}
          errorMessage={errorMessage}
          value={address}
          onChange={onChange}
        />
        <ActionButton variant="nextStep">Next</ActionButton>
      </Form>
    </StepsContainer>
  )
}

export default GetPlace
