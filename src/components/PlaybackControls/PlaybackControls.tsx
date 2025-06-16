import PlaybackButtons from "@/components/PlaybackButtons/PlaybackButtons"
import PlaybackProgress from "@/components/PlaybackProgress/PlaybackProgress"
import styles from "./PlaybackControls.module.scss"

interface Props {
	audioRef: React.RefObject<HTMLAudioElement | null>
}

export default function PlaybackControls({ audioRef }: Props) {
	return (
		<div className={styles.playbackControls}>
			<PlaybackButtons />
			<PlaybackProgress audioRef={audioRef} />
		</div>
	)
}
