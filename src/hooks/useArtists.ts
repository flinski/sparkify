import { useQuery } from "@tanstack/react-query"
import { getArtists } from "@/services/apiArtists"

export function useArtists() {
	const {
		isLoading,
		error,
		data: artists
	} = useQuery({ queryKey: ["artists"], queryFn: getArtists })

	return { isLoading, error, artists }
}
