import { showNotification } from './notification-slice'
import { replaceData } from './cart-slice'

export const fetchCartData = () => {
    return async (dispatch) => {
        const handleFetch = async() => {
            const res = await fetch('https://redux-fe380-default-rtdb.firebaseio.com/cartItems.json')
            const data = res.json()
            return data
        }
        try {
           const cartData = await handleFetch()
           dispatch(replaceData(cartData))
        } catch (error) {
            dispatch(showNotification({
                message: 'The data fetching is failed',
                type: 'error',
                open: true
            }))
        }
    } 
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(showNotification({
            message: 'Sending the request',
            type: 'warning',
            open: true
        }))
        const sendRequest = async () => {
            const res = await fetch('https://redux-fe380-default-rtdb.firebaseio.com/cartItems.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            })
            const data = res.json()
            dispatch(showNotification({
                message: 'The request is sent successfully',
                type: 'success',
                open: true
            }))
        }
        try {
            await sendRequest()
        } catch (error) {
            dispatch(showNotification({
                message: 'The request is sent failed',
                type: 'error',
                open: true
            }))
        }
    }
}