import styles from "./Heading.module.scss"
import type { ReactNode } from "react"

interface Props {
	children?: ReactNode
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export default function Heading({ children, as: Tag = "h1", ...props }: Props) {
	return (
		<Tag className={styles.heading} {...props}>
			{children}
		</Tag>
	)
}
