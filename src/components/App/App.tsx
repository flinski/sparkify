import { BrowserRouter, Route, Routes } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Provider } from "react-redux"
import store from "@/store/store"

import AppLayout from "@/components/AppLayout/AppLayout"

import SongsPage from "@/pages/SongsPage/SongsPage"
import AlbumsPage from "@/pages/AlbumsPage/AlbumsPage"
import ArtistsPage from "@/pages/ArtistsPage/ArtistsPage"
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage"

const queryClient = new QueryClient()

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route element={<AppLayout />}>
							<Route index element={<SongsPage />} />
							<Route path="albums" element={<AlbumsPage />} />
							<Route path="artists" element={<ArtistsPage />} />
						</Route>
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</BrowserRouter>
			</Provider>
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	)
}
