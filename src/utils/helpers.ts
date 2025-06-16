export function formatTime(time: number): string {
	const minutes = Math.floor(time / 60000)
	const seconds = Math.floor((time / 1000) % 60)

	const formattedMinutes = String(minutes).padStart(2, "0")
	const formattedSeconds = String(seconds).padStart(2, "0")

	return `${formattedMinutes}:${formattedSeconds}`
}
