import Logo from "@/components/Logo/Logo"
import SearchBar from "@/components/SearchBar/SearchBar"

import styles from "./Header.module.scss"

export default function Header() {
	return (
		<header className={styles.header}>
			<Logo />
			<SearchBar />
		</header>
	)
}
