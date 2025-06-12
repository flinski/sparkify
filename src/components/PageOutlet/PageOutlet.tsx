import type { ReactNode } from "react"
import styles from "./PageOutlet.module.scss"

interface Props {
	children: ReactNode
}

export default function PageOutlet({ children }: Props) {
	return (
		<div className={styles.pageOutlet}>
			<div className={styles.pageContent}>{children}</div>
		</div>
	)
}
