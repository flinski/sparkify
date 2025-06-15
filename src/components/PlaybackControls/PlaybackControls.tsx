import PlaybackButtons from "@/components/PlaybackButtons/PlaybackButtons"
import PlaybackProgress from "@/components/PlaybackProgress/PlaybackProgress"
import styles from './PlaybackControls.module.scss'

export default function PlaybackControls() {
	return (
		<div className={styles.playbackControls}>
			<PlaybackButtons />
			<PlaybackProgress />
		</div>
	)
}
