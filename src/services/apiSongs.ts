import supabase from "./supabase"
import type { PostgrestError } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

type TApiSongs = Database["public"]["Tables"]["songs"]["Row"]

export async function getSongs(): Promise<TApiSongs[] | null> {
	const { data, error }: { data: TApiSongs[] | null; error: PostgrestError | null } = await supabase
		.from("songs")
		.select("*")

	if (error) {
		console.error(error)
		throw new Error("Songs could not be loaded")
	}

	return data
}
