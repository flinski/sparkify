import type { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export default function ContentArea({ children }: Props) {
	return <div>{children}</div>
}
