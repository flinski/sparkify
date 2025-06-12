import Logo from "@/components/Logo/Logo"
import SearchBar from "@/components/SearchBar/SearchBar"
import ThemeToggler from "@/components/ThemeToggler/ThemeToggler"
import styles from "./Header.module.scss"

export default function Header() {
	return (
		<header className={styles.header}>
			<Logo />
			<SearchBar />
			<ThemeToggler />
		</header>
	)
}
