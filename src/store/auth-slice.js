import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'authSlice',
    initialState: { isLoggedIn: false },
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            state.isLoggedIn = false
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice