"use client"
import { ChangeEvent, FormEvent, useState } from "react"
import { phoneLength, phoneMask } from "../utils/phone"
import { Input } from "./Input"
import { Title } from "./Title"
import { ErrorMessage } from "../types/ErrorMessage"
import { Form } from "./Form"
import { ActionButton } from "./ActionButton"
import { useAppDispatch } from "../store/hooks"
import { setPhone } from "../store/movingSlicer"

const GetPhone = () => {
  const [value, setValue] = useState("")
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>("")
  const dispatch = useAppDispatch()
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
    dispatch(setPhone(value))
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
      <Title hasBack>What is your phone number?</Title>

      <Form onSubmit={onSubmit}>
        <Input
          type="tel"
          value={value}
          onChange={onChange}
          errorMessage={errorMessage}
          onBlur={onBlur}
        />

        <ActionButton variant="nextStep">Next</ActionButton>
      </Form>
    </>
  )
}

export default GetPhone
