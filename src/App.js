import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { sendCartData, fetchCartData } from './store/cart-actions'

import "./App.css";

import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Nottification";

let isFirstRender = true

function App() {
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.notification.notification)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false
      return
    }
    if (cart.isChanged) {
      dispatch(sendCartData(cart))
    }
  }, [cart])
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <div className="App">
      { notification && <Notification type={notification.type} message={notification.message} /> }
      { isLoggedIn ? <Layout /> : <Auth /> }
    </div>
  );
}

export default App;
