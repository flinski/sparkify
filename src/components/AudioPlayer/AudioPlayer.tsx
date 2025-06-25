import { useRef } from "react"

import { useDispatch } from "react-redux"
import { nextSong, play, setDuration, startLoading, stopLoading } from "@/store/audioPlayerSlice"
import { useAppSelector } from "@/hooks/redux-hooks"

import { useAudioPlayback } from "@/hooks/useAudioPlayback"
import { useAudioTimeUpdate } from "@/hooks/useAudioTimeUpdate"
import { useAudioLoop } from "@/hooks/useAudioLoop"

import SongInfo from "@/components/SongInfo/SongInfo"
import PlaybackControls from "@/components/PlaybackControls/PlaybackControls"
import ActionControls from "@/components/ActionControls/ActionControls"

import styles from "./AudioPlayer.module.scss"

export default function AudioPlayer() {
	const audioRef = useRef<HTMLAudioElement>(null)
	const dispatch = useDispatch()
	const { queue, currentIndex, isPlaying, isRepeating } = useAppSelector(
		(state) => state.audioPlayer
	)
	const song = queue[currentIndex]

	useAudioPlayback(audioRef.current, isPlaying)
	useAudioTimeUpdate(audioRef.current, isPlaying)
	useAudioLoop(audioRef.current, isRepeating)

	const handleLoadMetadata = () => {
		if (!audioRef.current) return

		dispatch(stopLoading())
		dispatch(setDuration(audioRef.current.duration))
		dispatch(play())
		audioRef.current.play()
	}

	const handleEnd = () => {
		dispatch(nextSong())
		dispatch(startLoading())
	}

	if (!song) return null

	return (
		<div className={styles.audioPlayer}>
			<audio
				ref={audioRef}
				src={song.audio_url}
				onLoadedMetadata={handleLoadMetadata}
				onEnded={handleEnd}
			></audio>

			<SongInfo />
			<PlaybackControls audio={audioRef.current} />
			<ActionControls />
		</div>
	)
}
