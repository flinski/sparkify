import styles from "./SongHeader.module.scss"

export default function SongHeader() {
	return (
		<li className={styles.songHeader}>
			<div className={styles.songIndex}>#</div>
			<div></div>
			<div className={styles.songTitle}>Title</div>
			<div className={styles.songArtist}>Artist</div>
			<div className={styles.songAlbum}>Album</div>
			<div className={styles.songDuration}>Time</div>
		</li>
	)
}
