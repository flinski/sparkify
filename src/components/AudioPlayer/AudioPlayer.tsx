import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { pause, play, setLoading } from "@/store/audioPlayerSlice"
import { useAppSelector } from "@/hooks/redux-hooks"
import SongInfo from "../SongInfo/SongInfo"
import styles from "./AudioPlayer.module.scss"

export default function AudioPlayer() {
	const audioRef = useRef<HTMLAudioElement>(null)
	const dispatch = useDispatch()
	const { queue, currentIndex, isPlaying, isLoading } = useAppSelector((state) => state.audioPlayer)
	const song = queue[currentIndex]

	const handleLoadSong = () => {
		dispatch(setLoading(false))
		dispatch(play())
		audioRef.current?.play()
	}

	useEffect(() => {
		if (isPlaying) {
			dispatch(play())
			audioRef.current?.play()
		} else {
			dispatch(pause())
			audioRef.current?.pause()
		}
	}, [isPlaying, dispatch])

	if (!song) return

	return (
		<div className={styles.audioPlayer}>
			<SongInfo isLoading={isLoading} song={song} />
			<div>
				<audio
					ref={audioRef}
					src={song.audio_url}
					controls
					onLoadedMetadata={handleLoadSong}
				></audio>
			</div>
			<div>Actions</div>
		</div>
	)
}
