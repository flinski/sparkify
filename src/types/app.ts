import type { Database } from "@/types/supabase"

export type TApi1 = Database["public"]["Tables"]["songs"]["Row"]
export type TApi2 = Database["public"]["Tables"]["albums"]["Row"]
export type TApi3 = Database["public"]["Tables"]["artists"]["Row"]

export type TApiArtist = {
	avatar_url: string
	bio: string | null
	created_at: string
	id: string
	name: string
}

export type TApiAlbum = {
	cover_url: string
	created_at: string
	id: string
	release_date: string
	title: string
}

export type TApiSong = {
	album: TApiAlbum | null
	album_id: string | null
	artists: {
		artist: TApiArtist
	}[]
	audio_url: string
	cover_url: string
	created_at: string
	duration: number
	id: string
	title: string
}

export type TApiFormattedSong = {
	album: TApiAlbum | null
	album_id: string | null
	artists: TApiArtist[]
	audio_url: string
	cover_url: string
	duration: number
	id: string
	title: string
}
