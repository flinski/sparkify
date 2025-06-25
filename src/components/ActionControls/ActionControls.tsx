import { useDispatch } from "react-redux"
import { setCurrentIndex, setQueue, setRepeating, setShuffling } from "@/store/audioPlayerSlice"

import RepeatIcon from "../icons/RepeatIcon"
import ShuffleIcon from "../icons/ShuffleIcon"

import styles from "./ActionControls.module.scss"
import { useAppSelector } from "@/hooks/redux-hooks"
import { shuffleSongs } from "@/utils/helpers"

export default function ActionControls() {
	const dispatch = useDispatch()
	const { queue, isRepeating, isShuffling } = useAppSelector((state) => state.audioPlayer)

	const handleShuffleSongs = () => {
		dispatch(setShuffling(!isShuffling))
		
		if (!isShuffling) {
			const shuffledSongs = shuffleSongs(queue)
			dispatch(setCurrentIndex(0))
			dispatch(setQueue(shuffledSongs))
		}
	}

	const handleRepeatSong = () => {
		dispatch(setRepeating(!isRepeating))
	}

	return (
		<div className={styles.actionControls}>
			<button
				className={`${styles.shuffleButton} ${isShuffling ? "active" : ""}`}
				onClick={handleShuffleSongs}
			>
				<ShuffleIcon />
			</button>
			<button
				className={`${styles.repeatButton} ${isRepeating ? "active" : ""}`}
				onClick={handleRepeatSong}
			>
				<RepeatIcon />
			</button>
		</div>
	)
}
