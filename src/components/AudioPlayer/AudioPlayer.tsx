import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { nextSong, play, setCurrentTime, setDuration, setLoading } from "@/store/audioPlayerSlice"
import { useAppSelector } from "@/hooks/redux-hooks"

import SongInfo from "@/components/SongInfo/SongInfo"
import PlaybackControls from "@/components/PlaybackControls/PlaybackControls"
import ActionControls from "@/components/ActionControls/ActionControls"

import styles from "./AudioPlayer.module.scss"

export default function AudioPlayer() {
	const audioRef = useRef<HTMLAudioElement>(null)
	const dispatch = useDispatch()
	const { queue, currentIndex, isPlaying, isLoading, isRepeating } = useAppSelector(
		(state) => state.audioPlayer
	)
	const song = queue[currentIndex]

	const handleLoadSong = () => {
		dispatch(setLoading(false))
		dispatch(setDuration(audioRef.current?.duration))
		dispatch(play())
		audioRef.current?.play()
	}

	const handleEndSong = () => {
		dispatch(nextSong())
		dispatch(setLoading(true))
	}

	useEffect(() => {
		if (isPlaying) {
			audioRef.current?.play()
		} else if (currentIndex !== -1) {
			audioRef.current?.pause()
		}
	}, [isPlaying, currentIndex])

	useEffect(() => {
		let intervalId: NodeJS.Timeout
		if (isPlaying) {
			intervalId = setInterval(() => {
				dispatch(setCurrentTime(audioRef.current?.currentTime))
			}, 1000)
		}
		return () => clearInterval(intervalId)
	}, [isPlaying, dispatch])

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.loop = isRepeating
		}
	}, [isRepeating])

	if (!song) return

	return (
		<div className={styles.audioPlayer}>
			<SongInfo isLoading={isLoading} song={song} />
			<audio
				ref={audioRef}
				src={song.audio_url}
				onLoadedMetadata={handleLoadSong}
				onEnded={handleEndSong}
			></audio>
			<PlaybackControls audioRef={audioRef} />
			<ActionControls />
		</div>
	)
}
