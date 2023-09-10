"use client"
import { ChangeEvent, FormEvent, useState } from "react"
import { phoneLength, phoneMask } from "../utils/phone"
import { Input } from "./Input"
import { NextButton } from "./NextButton"
import { Title } from "./Title"
import { useMovingDispatcher } from "../store/useMovingDispatcher"
import { ErrorMessage } from "../types/ErrorMessage"
import { Form } from "./Form"

const GetPhone = () => {
  const [value, setValue] = useState("")
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>("")
  const { setPhone } = useMovingDispatcher()

  const phoneValidator = (value: string) =>
    value.length !== phoneLength ? "Please enter a valid phone number" : ""

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const errorMessage = phoneValidator(value)
    if (errorMessage) {
      setErrorMessage(errorMessage)
      return
    }

    setErrorMessage(null)
    setPhone(value)
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (value.length > phoneLength) return

    setValue(phoneMask(event.target.value))
  }

  const onBlur = () => {
    setErrorMessage(phoneValidator(value))
  }

  return (
    <>
      <Title>What is your phone number?</Title>

      <Form onSubmit={onSubmit}>
        <Input
          type="tel"
          value={value}
          onChange={onChange}
          errorMessage={errorMessage}
          onBlur={onBlur}
        />

        <NextButton />
      </Form>
    </>
  )
}

export default GetPhone
