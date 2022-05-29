import { configureStore } from '@reduxjs/toolkit'

import authSlice from './auth-slice'
import cartSlice from './cart-slice'
import notificationSlice from './notification-slice'

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        notification: notificationSlice.reducer
    }
})

export default store