import type { TApiAlbum } from "@/types/app"
import AlbumItem from "@/components/AlbumItem/AlbumItem"
import styles from './AlbumList.module.scss'

interface Props {
	albums: TApiAlbum[]
}

export default function AlbumList({ albums }: Props) {
	return (
		<ul className={styles.albumList}>
			{albums.map((album) => (
				<AlbumItem key={album.id} album={album} />
			))}
		</ul>
	)
}
