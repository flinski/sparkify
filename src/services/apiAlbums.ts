import type { TApiAlbum } from "@/types/app"
import supabase from "./supabase"
import type { PostgrestError } from "@supabase/supabase-js"

export async function getAlbums(): Promise<TApiAlbum[]> {
	const { data, error }: { data: TApiAlbum[] | null; error: PostgrestError | null } = await supabase
		.from("albums")
		.select("*")

	if (error || data === null) {
		console.error(error)
		throw new Error("Albums could not be loaded")
	}

	return data
}
