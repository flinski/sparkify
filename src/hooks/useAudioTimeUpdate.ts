import { useEffect } from "react"

import { setCurrentTime } from "@/store/audioPlayerSlice"
import { useDispatch } from "react-redux"

export function useAudioTimeUpdate(audio: HTMLAudioElement | null, isPlaying: boolean) {
	const dispatch = useDispatch()

	useEffect(() => {
		if (!audio || !isPlaying) return

		const updateTime = () => {
			dispatch(setCurrentTime(audio.currentTime))
		}

		const intervalId = setInterval(updateTime, 1000)

		return () => clearInterval(intervalId)
	}, [audio, isPlaying, dispatch])
}
