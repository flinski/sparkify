import { useEffect } from "react"

export function useAudioPlayback(audio: HTMLAudioElement | null, isPlaying: boolean) {
	useEffect(() => {
		if (!audio) return

		if (isPlaying) {
			audio.play()
		} else {
			audio.pause()
		}
	}, [audio, isPlaying])
}
