import { useDispatch } from "react-redux"
import { useAppSelector } from "@/hooks/redux-hooks"
import { nextSong, pause, play, prevSong, startLoading } from "@/store/audioPlayerSlice"

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

	const handleNextSong = () => {
		dispatch(nextSong())
		dispatch(startLoading())
	}

	const handlePrevSong = () => {
		dispatch(prevSong())
		dispatch(startLoading())
	}

	return (
		<div className={styles.playbackButtons}>
			<button className={styles.prevSongButton} onClick={handlePrevSong}>
				<PrevSongIcon />
			</button>
			<button className={styles.playPauseButton} disabled={isLoading} onClick={handleToggleSong}>
				{isPlaying ? <PauseIcon /> : <PlayIcon />}
			</button>
			<button className={styles.nextSongButton} onClick={handleNextSong}>
				<NextSongIcon />
			</button>
		</div>
	)
}
