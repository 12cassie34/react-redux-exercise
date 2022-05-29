import { createSlice } from '@reduxjs/toolkit'

import { showNotification } from './notification-slice'

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
        isChanged: false
    },
    reducers: {
        replaceData(state, action) {
            state.totalQuantity = action.payload.totalQuantity
            state.itemsList = action.payload.itemsList
        },
        addToCart(state, action) {
            state.isChanged = true
            const newItem = action.payload
            const existedItem = state.itemsList.find(item => item.id === newItem.id)

            if (existedItem) {
                existedItem.quantity += 1
                existedItem.totalPrice += newItem.price
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
            }
            state.totalQuantity++
        },
        removeFromCart(state, action) {
            state.isChanged = true
            const id = action.payload
            const existedItem = state.itemsList.find(item => item.id === id)

            if (existedItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(item => item.id !== id)
            }

            if (existedItem) {
                existedItem.quantity -= 1
                existedItem.totalPrice -= existedItem.price
            }

            state.totalQuantity--
        },
        toggleShowCart(state) {
            state.showCart = !state.showCart
        }
    }
})

export const { addToCart, removeFromCart, toggleShowCart, replaceData } = cartSlice.actions
export default cartSlice