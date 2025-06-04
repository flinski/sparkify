import { Route, Routes } from "react-router"

import AppLayout from "@/components/AppLayout/AppLayout"

import TracksPage from "@/pages/TracksPage/TracksPage"
import AlbumsPage from "@/pages/AlbumsPage/AlbumsPage"
import ArtistsPage from "@/pages/ArtistsPage/ArtistsPage"

export default function App() {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route index element={<TracksPage />} />
				<Route path="albums" element={<AlbumsPage />} />
				<Route path="artists" element={<ArtistsPage />} />
			</Route>
		</Routes>
	)
}
