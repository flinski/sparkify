import { useEffect } from "react"

export function useAudioLoop(audio: HTMLAudioElement | null, isRepeating: boolean) {
	useEffect(() => {
		if (!audio) return

		audio.loop = isRepeating
	}, [audio, isRepeating])
}
