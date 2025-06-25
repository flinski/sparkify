import { useAppSelector } from "@/hooks/redux-hooks"
import styles from "./PlaybackProgress.module.scss"
import { formatTime } from "@/utils/helpers"
import { useDispatch } from "react-redux"
import { setCurrentTime } from "@/store/audioPlayerSlice"

interface Props {
	audio: HTMLAudioElement | null
}

export default function PlaybackProgress({ audio }: Props) {
	const dispatch = useDispatch()
	const { currentTime, duration, isLoading } = useAppSelector((state) => state.audioPlayer)
	const progressPosition = (currentTime / duration) * 100

	const handleChangeCurrentTime = (e: React.MouseEvent<HTMLElement>) => {
		const progressBar = e.currentTarget as HTMLElement
		const rect = progressBar.getBoundingClientRect()
		const clickX = e.clientX - rect.x
		const positionPercent = (clickX / rect.width) * 100
		const newTime = (duration * positionPercent) / 100

		if (audio) {
			audio.currentTime = newTime
		}

		dispatch(setCurrentTime(newTime))
	}

	return (
		<div className={`${styles.playbackProgress} ${isLoading ? "disabled" : ""}`}>
			<div className={styles.currentTime}>{formatTime(currentTime * 1000)}</div>
			<div className={styles.progressBarWrapper} onClick={handleChangeCurrentTime}>
				<div className={styles.progressBar}>
					<div className={styles.progress} style={{ width: `${progressPosition}%` }}></div>
					<div className={styles.progressKnob} style={{ left: `${progressPosition}%` }}></div>
				</div>
			</div>
			<div className={styles.duration}>{formatTime(duration * 1000)}</div>
		</div>
	)
}
