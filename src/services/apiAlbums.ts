import supabase from "./supabase"
import type { TApiAlbum, TApiFormattedAlbum } from "@/types/app"
import type { PostgrestError } from "@supabase/supabase-js"

export async function getAlbums(): Promise<TApiFormattedAlbum[]> {
	const { data, error }: { data: TApiAlbum[] | null; error: PostgrestError | null } =
		await supabase.from("albums").select(`
				*,
				artists:album_artists (
      	artist:artists (*)
    	)
		`)

	if (error || data === null) {
		console.error(error)
		throw new Error("Albums could not be loaded")
	}

	const albums = data.map((album) => ({
		...album,
		artists: album.artists.map((a) => a.artist)
	}))

	return albums
}
