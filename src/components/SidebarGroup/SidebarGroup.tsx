import styles from "./SidebarGroup.module.scss"

import type { ReactNode } from "react"

interface Props {
	children: ReactNode
	title: string
}

export default function SidebarGroup({ children, title }: Props) {
	return (
		<div className={styles.sidebarGroup}>
			<div className={styles.title}>{title}</div>
			<nav className={styles.navigation}>{children}</nav>
		</div>
	)
}
