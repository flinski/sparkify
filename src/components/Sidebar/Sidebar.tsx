import { NavLink } from "react-router"

import SidebarGroup from "@/components/SidebarGroup/SidebarGroup"
import SongsIcon from "@/components/icons/SongsIcon"
import AlbumsIcon from "@/components/icons/AlbumsIcon"
import ArtistsIcon from "@/components/icons/ArtistsIcon"

import styles from "./Sidebar.module.scss"

export default function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<SidebarGroup title="Menu">
				<NavLink to="/">
					<SongsIcon />
					<span>Songs</span>
				</NavLink>
				<NavLink to="/albums">
					<AlbumsIcon />
					<span>Albums</span>
				</NavLink>
				<NavLink to="/artists">
					<ArtistsIcon />
					<span>Artists</span>
				</NavLink>
			</SidebarGroup>
		</aside>
	)
}
