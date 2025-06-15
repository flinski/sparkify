import type { TApiFormattedSong } from "@/types/app"
import { createSlice } from "@reduxjs/toolkit"

interface IState {
	queue: TApiFormattedSong[]
	currentIndex: number
	duration: number
	currentTime: number
	isPlaying: boolean
	isLoading: boolean
}

const initialState: IState = {
	queue: [],
	currentIndex: -1,
	duration: 0,
	currentTime: 0,
	isPlaying: false,
	isLoading: false
}

const audioPlayerSlice = createSlice({
	name: "audioPlayer",
	initialState,
	reducers: {
		setQueue(state, action) {
			state.queue = action.payload
		},
		setCurrentIndex(state, action) {
			state.currentIndex = action.payload
		},
		setLoading(state, action) {
			state.isLoading = action.payload
		},
		play(state) {
			state.isPlaying = true
		},
		pause(state) {
			state.isPlaying = false
		}
	}
})

export const { setQueue, setCurrentIndex, setLoading, play, pause } = audioPlayerSlice.actions
export default audioPlayerSlice.reducer
