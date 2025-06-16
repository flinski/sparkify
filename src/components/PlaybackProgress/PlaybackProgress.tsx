import { useAppSelector } from "@/hooks/redux-hooks"
import styles from "./PlaybackProgress.module.scss"
import { formatTime } from "@/utils/helpers"
import { useDispatch } from "react-redux"
import { setCurrentTime } from "@/store/audioPlayerSlice"

interface Props {
	audioRef: React.RefObject<HTMLAudioElement | null>
}

export default function PlaybackProgress({ audioRef }: Props) {
	const dispatch = useDispatch()
	const { currentTime, duration } = useAppSelector((state) => state.audioPlayer)
	const progressPosition = (currentTime / duration) * 100

	const handleChangeCurrentTime = (e: React.MouseEvent<HTMLElement>) => {
		const progressBar = e.currentTarget as HTMLElement
		const rect = progressBar.getBoundingClientRect()
		const clickX = e.clientX - rect.x
		const positionPercent = (clickX / rect.width) * 100
		const newTime = (duration * positionPercent) / 100
		if (audioRef.current) {
			audioRef.current.currentTime = newTime
		}
		dispatch(setCurrentTime(newTime))
	}

	return (
		<div className={styles.playbackProgress}>
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
