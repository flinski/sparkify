import { useAppSelector } from "@/hooks/redux-hooks"
import styles from "./PlaybackProgress.module.scss"
import { formatTime } from "@/utils/helpers"

export default function PlaybackProgress() {
	const { currentTime, duration } = useAppSelector((state) => state.audioPlayer)
	const progressPosition = (currentTime / duration) * 100

	return (
		<div className={styles.playbackProgress}>
			<div className={styles.currentTime}>{formatTime(currentTime * 1000)}</div>
			<div className={styles.progressBar}>
				<div className={styles.progress} style={{ width: `${progressPosition}%` }}></div>
				<div className={styles.progressKnob} style={{ left: `${progressPosition}%` }}></div>
			</div>
			<div className={styles.duration}>{formatTime(duration * 1000)}</div>
		</div>
	)
}
