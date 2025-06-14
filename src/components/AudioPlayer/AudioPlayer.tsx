import { useAppSelector } from "@/hooks/redux-hooks"
import SongInfo from "../SongInfo/SongInfo"
import styles from "./AudioPlayer.module.scss"

export default function AudioPlayer() {
	const { queue, currentIndex, isPlaying, isLoading } = useAppSelector((store) => store.audioPlayer)
	const currentSong = queue[currentIndex]

	if (!currentSong) return

	return (
		<div className={styles.audioPlayer}>
			<SongInfo isLoading={isLoading} song={currentSong} />
			<div>Controls</div>
			<div>Actions</div>
		</div>
	)
}
