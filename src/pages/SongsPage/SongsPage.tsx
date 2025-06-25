import { useSongs } from "@/hooks/useSongs"

import Spinner from "@/components/Spinner/Spinner"
import Message from "@/components/Message/Message"
import Heading from "@/components/Heading/Heading"
import SongList from "@/components/SongList/SongList"

export default function SongsPage() {
	const { isLoading, error, songs } = useSongs()

	if (isLoading) {
		return <Spinner options={{ color: "var(--gray-300)", isCentered: true }} />
	}

	if (error) {
		console.error(error)

		return (
			<Message options={{ isCentered: true }}>
				Something went wrong. Please try again later.
			</Message>
		)
	}

	console.log("songs:", songs)

	return (
		<div>
			<Heading>Songs</Heading>
			{songs && songs.length !== 0 ? (
				<SongList songs={songs} />
			) : (
				<Message options={{ isCentered: true }}>No songs found.</Message>
			)}
		</div>
	)
}
