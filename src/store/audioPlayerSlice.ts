import type { TApiFormattedSong } from "@/types/app"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface IState {
	queue: TApiFormattedSong[]
	currentIndex: number
	duration: number
	currentTime: number
	volume: number
	isMuted: boolean
	isPlaying: boolean
	isRepeating: boolean
	isShuffling: boolean
	isLoading: boolean
}

const initialState: IState = {
	queue: [],
	currentIndex: -1,
	duration: 0,
	currentTime: 0,
	volume: 0.8,
	isMuted: false,
	isPlaying: false,
	isRepeating: false,
	isShuffling: false,
	isLoading: false
}

const audioPlayerSlice = createSlice({
	name: "audioPlayer",
	initialState,
	reducers: {
		setQueue: (state, action: PayloadAction<TApiFormattedSong[]>) => {
			state.queue = action.payload
		},
		setCurrentIndex: (state, action: PayloadAction<number>) => {
			state.currentIndex = action.payload
		},
		setDuration: (state, action: PayloadAction<number>) => {
			state.duration = action.payload
		},
		setCurrentTime: (state, action: PayloadAction<number>) => {
			state.currentTime = action.payload
		},
		startLoading: (state) => {
			state.isLoading = true
		},
		stopLoading: (state) => {
			state.isLoading = false
		},
		setRepeating: (state, action: PayloadAction<boolean>) => {
			state.isRepeating = action.payload
		},
		setShuffling: (state, action: PayloadAction<boolean>) => {
			state.isShuffling = action.payload
		},
		mute: (state) => {
			state.isMuted = true
		},
		unmute: (state) => {
			state.isMuted = false
		},
		play: (state) => {
			state.isPlaying = true
		},
		pause: (state) => {
			state.isPlaying = false
		},
		nextSong: (state) => {
			if (state.currentIndex === state.queue.length - 1) {
				state.currentIndex = 0
			} else {
				state.currentIndex += 1
			}
		},
		prevSong: (state) => {
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
	setDuration,
	setCurrentTime,
	startLoading,
	stopLoading,
	setRepeating,
	setShuffling,
	mute,
	unmute,
	play,
	pause,
	nextSong,
	prevSong
} = audioPlayerSlice.actions
export default audioPlayerSlice.reducer
