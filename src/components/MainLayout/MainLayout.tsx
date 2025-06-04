import styles from "./MainLayout.module.scss"

import type { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export default function MainLayout({ children }: Props) {
	return <main className={styles.mainLayout}>{children}</main>
}
