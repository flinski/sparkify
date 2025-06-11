import styles from "./Message.module.scss"
import type { ReactNode } from "react"

interface Props {
	children?: ReactNode
	options?: {
		isCentered?: boolean
	}
}

export default function Message({ children, options: { isCentered = false } = {} }: Props) {
	const message = <span className={styles.message}>{children}</span>

	if (isCentered) {
		return <div className={styles.messageWrapper}>{message}</div>
	}

	return message
}
