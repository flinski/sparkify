import { useAlbums } from "@/hooks/useAlbums"
import Spinner from "@/components/Spinner/Spinner"
import Message from "@/components/Message/Message"
import Heading from "@/components/Heading/Heading"
import AlbumList from "@/components/AlbumList/AlbumList"

export default function AlbumsPage() {
	const { isLoading, error, albums } = useAlbums()

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

	console.log(albums)

	return (
		<div>
			<Heading>Albums</Heading>
			{albums ? <AlbumList albums={albums} /> : null}
		</div>
	)
}
