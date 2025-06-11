import styles from "./Spinner.module.scss"

interface Props {
	options?: {
		size?: number
		thickness?: number
		color?: string
		isCentered?: boolean
	}
}

export default function Spinner({
	options: { size = 32, thickness = 3, color = "red", isCentered = false } = {}
}: Props) {
	const style = {
		width: `${size}px`,
		height: `${size}px`,
		borderWidth: `${thickness}px`,
		color: color
	}

	if (isCentered) {
		return (
			<div className={styles.spinnerWrapper}>
				<div className={styles.spinner} style={style}></div>
			</div>
		)
	}

	return <div className={styles.spinner} style={style}></div>
}
