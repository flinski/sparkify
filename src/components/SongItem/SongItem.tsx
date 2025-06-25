import { useState } from "react"
import { useDispatch } from "react-redux"
import { useAppSelector } from "@/hooks/redux-hooks"
import { formatTime } from "@/utils/helpers"
import { pause, play, setCurrentIndex, setQueue, startLoading } from "@/store/audioPlayerSlice"
import PlayIcon from "../icons/PlayIcon"
import PauseIcon from "../icons/PauseIcon"
import styles from "./SongItem.module.scss"
import type { TApiFormattedSong } from "@/types/app"

interface Props {
	songs: TApiFormattedSong[]
	song: TApiFormattedSong
	index: number
}

export default function SongItem({ song, index, songs }: Props) {
	const [isHovered, setIsHovered] = useState(false)
	const dispatch = useDispatch()
	const { currentIndex, isPlaying, isLoading } = useAppSelector((state) => state.audioPlayer)
	const artists = song.artists.map((artist) => artist.name).join(" & ")
	const isActive = currentIndex === index

	const handleToggleSong = () => {
		dispatch(setQueue(songs))
		dispatch(setCurrentIndex(index))
		// dispatch(setCurrentSongId(song.id))

		if (!isActive) {
			dispatch(pause())
			dispatch(startLoading())
		}

		if (isPlaying && isActive) {
			dispatch(pause())
		} else {
			dispatch(play())
		}
	}

	return (
		<li
			className={styles.songItem}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className={styles.songIndex}>
				{isHovered ? (
					<button
						className={`${styles.songButton} ${isActive ? "active" : ""}`}
						disabled={isActive && isLoading}
						onClick={handleToggleSong}
					>
						{isPlaying && isActive ? <PauseIcon /> : <PlayIcon />}
					</button>
				) : (
					<div className={isActive ? "active" : ""}>{index + 1}</div>
				)}
			</div>
			<div className={styles.songCover} onClick={handleToggleSong}>
				<img src={song.cover_url} alt={`${song.title} by ${artists}`} />
			</div>
			<div className={styles.songTitle}>
				<span className={isActive ? "active" : ""}>{song.title}</span>
			</div>
			<div className={styles.songArtist}>{artists}</div>
			<div className={styles.songAlbum}>{song.album ? song.album.title : "Single"}</div>
			<div className={styles.songDuration}>{formatTime(song.duration)}</div>
		</li>
	)
}
