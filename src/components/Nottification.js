import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "@mui/material"

import { closeNotification } from '../store/notification-slice'

const Notification = ({ type, message }) => {
  const notification = useSelector(state => state.notification.notification)
  
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(closeNotification())
  }

  return (
    <div>
      { notification.open && <Alert onClick={handleClose} severity={type}>{message}</Alert> }
    </div>
  );
};

export default Notification;