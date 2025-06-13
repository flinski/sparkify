import type { TApiAlbum } from "@/types/app"
import styles from "./AlbumItem.module.scss"

interface Props {
	album: TApiAlbum
}

export default function AlbumItem({ album }: Props) {
	return (
		<li className={styles.albumItem}>
			<div className={styles.albumCover}>
				<img src={album.cover_url} alt={album.title} />
			</div>
			<div className={styles.albumTitle}>{album.title}</div>
			<div className={styles.albumReleaseDateAndArtist}>
				<span className={styles.albumReleaseDate}>
					{new Date(album.release_date).getFullYear()}
				</span>
				<span> • </span>
				<span className={styles.albumArtist}>Artist</span>
			</div>
		</li>
	)
}
