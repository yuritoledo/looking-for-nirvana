import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function Title({ children }: Props) {
  return <p className="text-2xl font-bold">{children}</p>
}
