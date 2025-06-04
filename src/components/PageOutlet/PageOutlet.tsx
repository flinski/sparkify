import type { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export default function PageOutlet({ children }: Props) {
	return <div>{children}</div>
}
