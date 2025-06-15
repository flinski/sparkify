import { useDispatch } from "react-redux"
import { useAppSelector } from "@/hooks/redux-hooks"
import { pause, play } from "@/store/audioPlayerSlice"

import NextSongIcon from "@/components/icons/NextSongIcon"
import PrevSongIcon from "@/components/icons/PrevSongIcon"
import PauseIcon from "@/components/icons/PauseIcon"
import PlayIcon from "@/components/icons/PlayIcon"

import styles from "./PlaybackButtons.module.scss"

export default function PlaybackButtons() {
	const dispatch = useDispatch()
	const { isPlaying, isLoading } = useAppSelector((state) => state.audioPlayer)

	const handleToggleSong = () => {
		if (isPlaying) {
			dispatch(pause())
		} else {
			dispatch(play())
		}
	}

	return (
		<div className={styles.playbackButtons}>
			<button className={styles.previousSongButton}>
				<PrevSongIcon />
			</button>
			<button className={styles.playPauseButton} onClick={handleToggleSong} disabled={isLoading}>
				{isPlaying ? <PauseIcon /> : <PlayIcon />}
			</button>
			<button className={styles.nextSongButton}>
				<NextSongIcon />
			</button>
		</div>
	)
}
