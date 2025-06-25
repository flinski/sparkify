import type { TApiFormattedSong } from "@/types/app"
import { createSlice } from "@reduxjs/toolkit"

interface IState {
	queue: TApiFormattedSong[]
	currentIndex: number
	currentSongId: string
	duration: number
	currentTime: number
	isPlaying: boolean
	isRepeating: boolean
	isShuffling: boolean
	isLoading: boolean
}

const initialState: IState = {
	queue: [],
	currentIndex: -1,
	currentSongId: "",
	duration: 0,
	currentTime: 0,
	isPlaying: false,
	isRepeating: false,
	isShuffling: false,
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
		setCurrentSongId(state, action) {
			state.currentSongId = action.payload
		},
		setDuration(state, action) {
			state.duration = action.payload
		},
		setCurrentTime(state, action) {
			state.currentTime = action.payload
		},
		setLoading(state, action) {
			state.isLoading = action.payload
		},
		setRepeating(state, action) {
			state.isRepeating = action.payload
		},
		setShuffling(state, action) {
			state.isShuffling = action.payload
		},
		play(state) {
			state.isPlaying = true
		},
		pause(state) {
			state.isPlaying = false
		},
		nextSong(state) {
			if (state.currentIndex === state.queue.length - 1) {
				state.currentIndex = 0
			} else {
				state.currentIndex += 1
			}
		},
		prevSong(state) {
			if (state.currentIndex === 0) {
				state.currentIndex = state.queue.length - 1
			} else {
				state.currentIndex -= 1
			}
		}
	}
})

export const {
	setQueue,
	setCurrentIndex,
	setCurrentSongId,
	setDuration,
	setCurrentTime,
	setLoading,
	setRepeating,
	setShuffling,
	play,
	pause,
	nextSong,
	prevSong
} = audioPlayerSlice.actions
export default audioPlayerSlice.reducer
