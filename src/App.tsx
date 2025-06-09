import { Route, Routes } from "react-router"

import AppLayout from "@/components/AppLayout/AppLayout"

import SongsPage from "@/pages/SongsPage/SongsPage"
import AlbumsPage from "@/pages/AlbumsPage/AlbumsPage"
import ArtistsPage from "@/pages/ArtistsPage/ArtistsPage"

export default function App() {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route index element={<SongsPage />} />
				<Route path="albums" element={<AlbumsPage />} />
				<Route path="artists" element={<ArtistsPage />} />
			</Route>
		</Routes>
	)
}
