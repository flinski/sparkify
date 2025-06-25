import { useDispatch } from "react-redux"
import { setRepeating } from "@/store/audioPlayerSlice"

import RepeatIcon from "../icons/RepeatIcon"
import ShuffleIcon from "../icons/ShuffleIcon"

import styles from "./ActionControls.module.scss"
import { useAppSelector } from "@/hooks/redux-hooks"

export default function ActionControls() {
	const dispatch = useDispatch()
	const { isRepeating } = useAppSelector((state) => state.audioPlayer)

	const handleRepeatSong = () => {
		dispatch(setRepeating(!isRepeating))
	}

	return (
		<div className={styles.actionControls}>
			<button className={styles.shuffleButton}>
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
