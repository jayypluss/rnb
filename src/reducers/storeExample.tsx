import {configureStore} from '@reduxjs/toolkit'
import messageReducer from './messageExample'
import usersReducer from './usersExample'

export const storeExample = configureStore({
	reducer: {
		message: messageReducer,
		users: usersReducer,
	},
})

export type RootState = ReturnType<typeof storeExample.getState>
