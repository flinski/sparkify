import SongHeader from "../SongHeader/SongHeader"
import SongItem from "@/components/SongItem/SongItem"
import styles from "./SongList.module.scss"
import type { TApiFormattedSong } from "@/types/app"

interface Props {
	songs: TApiFormattedSong[]
}

export default function SongList({ songs }: Props) {
	return (
		<ul className={styles.songList}>
			<SongHeader />
			{songs.map((song, index) => (
				<SongItem key={song.id} song={song} index={index} />
			))}
		</ul>
	)
}
