import { configureStore } from "@reduxjs/toolkit"
import audioPlayerReducer from "./audioPlayerSlice"

const store = configureStore({
	reducer: {
		audioPlayer: audioPlayerReducer
	}
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
