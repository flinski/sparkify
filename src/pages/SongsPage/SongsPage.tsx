import { useQuery } from "@tanstack/react-query"
import { getSongs } from "@/services/apiSongs"

export default function SongsPage() {
	const { isLoading, error, data: songs } = useQuery({ queryKey: ["songs"], queryFn: getSongs })

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Something went wrong. Please try again later.</div>
	}

	console.log(songs)

	return <div>Songs Page</div>
}
