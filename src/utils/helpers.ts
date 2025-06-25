import type { TApiFormattedSong } from "@/types/app"

export function formatTime(time: number): string {
	const minutes = Math.floor(time / 60000)
	const seconds = Math.floor((time / 1000) % 60)

	const formattedMinutes = String(minutes).padStart(2, "0")
	const formattedSeconds = String(seconds).padStart(2, "0")

	return `${formattedMinutes}:${formattedSeconds}`
}

export function shuffleSongs(songs: TApiFormattedSong[]): TApiFormattedSong[] {
	const shuffled = structuredClone(songs)

	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
	}

	console.log(shuffled)
	console.log(songs.map((song) => song.title))
	console.log(shuffled.map((shuffledSong) => shuffledSong.title))

	return shuffled
}
