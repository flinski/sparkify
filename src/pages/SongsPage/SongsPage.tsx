import { useQuery } from "@tanstack/react-query"
import { getSongs } from "@/services/apiSongs"
import Spinner from "@/components/Spinner/Spinner"

export default function SongsPage() {
	const { isLoading, error, data: songs } = useQuery({ queryKey: ["songs"], queryFn: getSongs })

	if (isLoading) {
		return <Spinner options={{ color: "var(--gray-300)", isCentered: true }} />
	}

	if (error) {
		return <div>Something went wrong. Please try again later.</div>
	}

	console.log(songs)

	return <div>Songs Page</div>
}
