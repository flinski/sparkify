import Spinner from "../Spinner/Spinner"
import styles from "./SongInfo.module.scss"

interface Props {
	song: any
	isLoading: boolean
}

export default function SongInfo({ song, isLoading }: Props) {
	const artists = song.artists.map((artist) => artist.name).join(" & ")

	return (
		<div className={styles.songInfo}>
			<div className={styles.songCover}>
				{isLoading ? (
					<Spinner options={{ isCentered: true, color: "var(--gray-300)" }} />
				) : (
					<img src={song.cover_url} alt={`${song.title} by ${artists}`} />
				)}
			</div>
			<div className={styles.songTitleAndArtist}>
				<div className={styles.songTitle}>{song.title}</div>
				<div className={styles.songArtist}>{artists}</div>
			</div>
		</div>
	)
}
