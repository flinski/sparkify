import type { TApiArtist } from "@/types/app"
import ArtistItem from "../ArtistItem/ArtistItem"
import styles from "./ArtistList.module.scss"

interface Props {
	artists: TApiArtist[]
}

export default function ArtistList({ artists }: Props) {
	return (
		<ul className={styles.artistList}>
			{artists.map((artist) => (
				<ArtistItem key={artist.id} artist={artist} />
			))}
		</ul>
	)
}
