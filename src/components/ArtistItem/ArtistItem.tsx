import type { TApiArtist } from "@/types/app"
import styles from "./ArtistItem.module.scss"

interface Props {
	artist: TApiArtist
}

export default function ArtistItem({ artist }: Props) {
	return (
		<li className={styles.artistItem}>
			<div className={styles.artistAvatar}>
				<img src={artist.avatar_url} alt={artist.name} />
			</div>
			<div className={styles.artistName}>{artist.name}</div>
			<div className={styles.artistTitle}>Artist</div>
		</li>
	)
}
