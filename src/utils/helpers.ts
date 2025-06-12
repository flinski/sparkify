export function formatTime(time: number, unit: "s" | "ms" = "ms"): string {
	let timeMilliseconds = null

	if (unit === "s") {
		timeMilliseconds = time * 1000
	} else {
		timeMilliseconds = time
	}

	const minutes = Math.floor(timeMilliseconds / 60000)
	const seconds = Math.round((timeMilliseconds / 1000) % 60)

	const formattedMinutes = String(minutes).padStart(2, "0")
	const formattedSeconds = String(seconds).padStart(2, "0")

	return `${formattedMinutes}:${formattedSeconds}`
}
