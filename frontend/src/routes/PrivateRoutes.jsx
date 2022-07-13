/* eslint-disable react/prop-types */
import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoutes({ children }) {
  const auth = localStorage.getItem('token')
  if (!auth) {
    return <Navigate to="/auth/login" replace />
  }
  return children
}

export default PrivateRoutes
