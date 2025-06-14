import { createSlice } from "@reduxjs/toolkit"

const initialState = {
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
		}
	}
})

export const { setQueue, setCurrentIndex } = audioPlayerSlice.actions
export default audioPlayerSlice.reducer
