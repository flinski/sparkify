import LogoIcon from "@/components/icons/LogoIcon"
import styles from "./Logo.module.scss"

export default function Logo() {
	return (
		<div className={styles.logo}>
			<LogoIcon />
			<span>Shimify</span>
		</div>
	)
}
