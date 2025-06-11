import { useSongs } from "@/hooks/useSongs"
import Spinner from "@/components/Spinner/Spinner"
import Message from "@/components/Message/Message"

export default function SongsPage() {
	const { isLoading, error, songs } = useSongs()

	if (isLoading) {
		return <Spinner options={{ color: "var(--gray-300)", isCentered: true }} />
	}

	if (error) {
		return (
			<Message options={{ isCentered: true }}>
				Something went wrong. Please try again later.
			</Message>
		)
	}

	console.log(songs)

	return <div>Songs Page</div>
}
