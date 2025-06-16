import RepeatIcon from "../icons/RepeatIcon"
import ShuffleIcon from "../icons/ShuffleIcon"
import styles from "./ActionControls.module.scss"

export default function ActionControls() {
	return (
		<div className={styles.actionControls}>
			<button className={styles.shuffleButton}>
				<ShuffleIcon />
			</button>
			<button className={styles.repeatButton}>
				<RepeatIcon />
			</button>
		</div>
	)
}
