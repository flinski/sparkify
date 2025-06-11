import { useQuery } from "@tanstack/react-query"
import { getSongs } from "@/services/apiSongs"

export function useSongs() {
	const { isLoading, error, data: songs } = useQuery({ queryKey: ["songs"], queryFn: getSongs })

	return { isLoading, error, songs }
}
