import PlaybackButtons from "@/components/PlaybackButtons/PlaybackButtons"
import PlaybackProgress from "@/components/PlaybackProgress/PlaybackProgress"
import styles from "./PlaybackControls.module.scss"

interface Props {
	audio: HTMLAudioElement | null
}

export default function PlaybackControls({ audio }: Props) {
	return (
		<div className={styles.playbackControls}>
			<PlaybackButtons />
			<PlaybackProgress audio={audio} />
		</div>
	)
}
