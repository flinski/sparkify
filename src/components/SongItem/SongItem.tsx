import { useState } from "react"
import { useDispatch } from "react-redux"
import { formatTime } from "@/utils/helpers"
import { setCurrentIndex, setQueue } from "@/store/audioPlayerSlice"
import type { TApiFormattedSong } from "@/types/app"
import PlayIcon from "../icons/PlayIcon"
import styles from "./SongItem.module.scss"

interface Props {
	songs: TApiFormattedSong[]
	song: TApiFormattedSong
	index: number
}

export default function SongItem({ songs, song, index }: Props) {
	const [isHovered, setIsHovered] = useState(false)
	const dispatch = useDispatch()
	const artists = song.artists.map((artist) => artist.name).join(" & ")

	const handleToggleSong = () => {
		console.log(song.title)
		dispatch(setQueue(songs))
		dispatch(setCurrentIndex(index))
		// dispatch(playCurrentSong())
	}

	return (
		<li
			className={styles.songItem}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className={styles.songIndex}>
				{isHovered ? (
					<button className={styles.songButton} onClick={handleToggleSong}>
						<PlayIcon />
					</button>
				) : (
					<div>{index + 1}</div>
				)}
			</div>
			<div className={styles.songCover}>
				<img src={song.cover_url} alt={`${song.title} by ${artists}`} />
			</div>
			<div className={styles.songTitle}>
				<span>{song.title}</span>
			</div>
			<div className={styles.songArtist}>{artists}</div>
			<div className={styles.songAlbum}>{song.album ? song.album.title : "Single"}</div>
			<div className={styles.songDuration}>{formatTime(song.duration)}</div>
		</li>
	)
}
