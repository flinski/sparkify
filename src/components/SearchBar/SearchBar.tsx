import SearchIcon from "@/components/icons/SearchIcon"
import styles from "./SearchBar.module.scss"

export default function SearchBar() {
	return (
		<div className={styles.searchBar}>
			<div className={styles.searchBarWrapper}>
				<button>
					<SearchIcon />
				</button>
				<input type="text" placeholder="Search music..." name="search" />
			</div>
		</div>
	)
}
