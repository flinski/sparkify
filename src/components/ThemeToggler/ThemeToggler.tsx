import { useEffect, useState } from "react"

import DarkModeIcon from "@/components/icons/DarkModeIcon"
import LightModeIcon from "@/components/icons/LightModeIcon"

import styles from "./ThemeToggler.module.scss"

export default function ThemeToggler() {
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		const savedTheme = localStorage.getItem("sparkify-theme")
		const isDarkTheme = savedTheme === "dark"
		document.documentElement.classList.toggle("dark", isDarkTheme)
		setIsDark(isDarkTheme)
	}, [])

	const handleToggleTheme = () => {
		const newIsDark = !isDark
		setIsDark(newIsDark)
		document.documentElement.classList.toggle("dark", newIsDark)
		localStorage.setItem("sparkify-theme", newIsDark ? "dark" : "light")
	}

	return (
		<button className={styles.themeToggler} type="button" onClick={handleToggleTheme}>
			{isDark ? <LightModeIcon /> : <DarkModeIcon />}
		</button>
	)
}
