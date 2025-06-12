import DarkModeIcon from "../icons/DarkModeIcon"
import LightModeIcon from "../icons/LightModeIcon"
import styles from "./ThemeToggler.module.scss"

export default function ThemeToggler() {
	return (
		<button className={styles.themeToggler} type="button">
			<DarkModeIcon />
		</button>
	)
}
