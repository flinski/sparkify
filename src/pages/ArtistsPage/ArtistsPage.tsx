import { useArtists } from "@/hooks/useArtists"
import Heading from "@/components/Heading/Heading"
import Message from "@/components/Message/Message"
import Spinner from "@/components/Spinner/Spinner"
import ArtistList from "@/components/ArtistList/ArtistList"

export default function ArtistsPage() {
	const { isLoading, error, artists } = useArtists()

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

	console.log(artists)

	return (
		<div>
			<Heading>Artists</Heading>
			{artists ? <ArtistList artists={artists} /> : null}
		</div>
	)
}
