import { useEffect, useRef } from "react"

import { useDispatch } from "react-redux"
import {
	nextSong,
	play,
	setCurrentTime,
	setDuration,
	startLoading,
	stopLoading
} from "@/store/audioPlayerSlice"
import { useAppSelector } from "@/hooks/redux-hooks"

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
	const audio = audioRef.current
	const song = queue[currentIndex]

	useEffect(() => {
		if (!audio) return

		if (isPlaying) {
			audio.play()
		} else {
			audio.pause()
		}
	}, [audio, isPlaying])

	useEffect(() => {
		if (!audio || !isPlaying) return

		const updateTime = () => {
			dispatch(setCurrentTime(audio.currentTime))
		}

		const intervalId = setInterval(updateTime, 1000)

		return () => clearInterval(intervalId)
	}, [audio, isPlaying, dispatch])

	useEffect(() => {
		if (!audio) return

		audio.loop = isRepeating
	}, [audio, isRepeating])

	const handleLoadMetadata = () => {
		if (!audio) return

		dispatch(setDuration(audio.duration))
		dispatch(stopLoading())
		dispatch(play())
		audio.play()
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
			<PlaybackControls audioRef={audioRef} />
			<ActionControls />
		</div>
	)
}
