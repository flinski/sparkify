import supabase from "./supabase"
import type { TApiArtist } from "@/types/app"
import type { PostgrestError } from "@supabase/supabase-js"

export async function getArtists(): Promise<TApiArtist[]> {
	const { data, error }: { data: TApiArtist[] | null; error: PostgrestError | null } =
		await supabase.from("artists").select("*")

	if (error || data === null) {
		console.error(error)
		throw new Error("Artists could not be loaded")
	}

	return data
}
