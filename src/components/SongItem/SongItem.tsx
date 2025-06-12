import { formatTime } from "@/utils/helpers"
import styles from "./SongItem.module.scss"
import type { TApiFormattedSong } from "@/types/app"

interface Props {
	song: TApiFormattedSong
	index: number
}

export default function SongItem({ song, index }: Props) {
	const artists = song.artists.map((artist) => artist.name).join(" & ")

	return (
		<li className={styles.songItem}>
			<div className={styles.songIndex}>{index + 1}</div>
			<div className={styles.songCover}>
				<img src={song.cover_url} alt={`${song.title} by ${artists}`} />
			</div>
			<div className={styles.songTitle}>{song.title}</div>
			<div className={styles.songArtist}>{artists}</div>
			<div className={styles.songAlbum}>{song.album ? song.album.title : "Single"}</div>
			<div className={styles.songDuration}>{formatTime(song.duration)}</div>
		</li>
	)
}
