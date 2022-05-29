import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notificationSlice',
    initialState: { notification: {
        message: '',
        type: '',
        open: false
    } },
    reducers: {
        showNotification(state, action) {
            state.notification = {
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open
            }
        },
        closeNotification(state) {
            state.notification = {
                message: '',
                type: '',
                open: false
            }
        }
    }
})

export const { showNotification, closeNotification } = notificationSlice.actions
export default notificationSlice