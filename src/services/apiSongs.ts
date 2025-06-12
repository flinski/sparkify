import supabase from "./supabase"
import type { PostgrestError } from "@supabase/supabase-js"
import type { TApiFormattedSong, TApiSong } from "@/types/app"

export async function getSongs(): Promise<TApiFormattedSong[]> {
	const { data, error }: { data: TApiSong[] | null; error: PostgrestError | null } =
		await supabase.from("songs").select(`
			*,
			album:albums (*),
			artists:song_artists (
      artist:artists (*)
    )
	`)

	if (error || data === null) {
		console.error(error)
		throw new Error("Songs could not be loaded")
	}

	const songs = data.map((song) => ({
		...song,
		artists: song.artists.map((a) => a.artist)
	}))

	return songs
}
