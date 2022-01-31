import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

interface Users {
	id: number
	email: string
	first_name: string
	last_name: string
	avatar: string
}

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		users: [] as Users[],
		loading: false,
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchUsers.pending, state => {
			state.loading = true
		})
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.users = action.payload
			state.loading = false
		})
		builder.addCase(fetchUsers.rejected, state => {
			state.loading = false
		})
	},
})

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const response = await fetch('https://reqres.in/api/users?delay=1')
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	return (await response.json()).data as Users[]
})

export default usersSlice.reducer
