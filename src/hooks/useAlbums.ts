import { useQuery } from "@tanstack/react-query"
import { getAlbums } from "@/services/apiAlbums"

export function useAlbums() {
	const { isLoading, error, data: albums } = useQuery({ queryKey: ["albums"], queryFn: getAlbums })

	return { isLoading, error, albums }
}
