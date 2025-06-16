import { useAppSelector } from "@/hooks/redux-hooks"
import styles from "./PlaybackProgress.module.scss"
import { formatTime } from "@/utils/helpers"

export default function PlaybackProgress() {
	const { duration } = useAppSelector((state) => state.audioPlayer)

	return (
		<div className={styles.playbackProgress}>
			<div className={styles.currentTime}>0:00</div>
			<div className={styles.progress}></div>
			<div className={styles.duration}>{formatTime(duration * 1000)}</div>
		</div>
	)
}
