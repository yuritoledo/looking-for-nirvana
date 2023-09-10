export const phoneLength = 14

export const phoneMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{1,3})(\d{1,3})?(\d{1,4})?/, (_, p1, p2, p3) => {
      let number = ""
      if (p1) number += `(${p1}`
      if (p2) number += `) ${p2}`
      if (p3) number += `-${p3}`
      return number
    })
}
