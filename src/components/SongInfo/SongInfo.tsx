import { useAppSelector } from "@/hooks/redux-hooks"

import Spinner from "@/components/Spinner/Spinner"

import styles from "./SongInfo.module.scss"

export default function SongInfo() {
	const { queue, currentIndex, isLoading } = useAppSelector((state) => state.audioPlayer)
	const song = queue[currentIndex]
	// TODO Заменить на ссылки
	const artists = song.artists.map((artist) => artist.name).join(" & ")

	return (
		<div className={styles.songInfo}>
			{isLoading ? (
				<div className={styles.songPlaceholder}>
					<Spinner options={{ isCentered: true, color: "var(--gray-300)", size: 20 }} />
				</div>
			) : (
				<>
					<div className={styles.songCover}>
						<img src={song.cover_url} alt={`${song.title} by ${artists}`} />
					</div>
					<div className={styles.songTitleAndArtist}>
						<div className={styles.songTitle}>{song.title}</div>
						<div className={styles.songArtist}>{artists}</div>
					</div>
				</>
			)}
		</div>
	)
}
