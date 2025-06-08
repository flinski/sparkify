import type { ReactNode } from "react"
import styles from "./ContentArea.module.scss"

interface Props {
	children: ReactNode
}

export default function ContentArea({ children }: Props) {
	return <div className={styles.contentArea}>{children}</div>
}
