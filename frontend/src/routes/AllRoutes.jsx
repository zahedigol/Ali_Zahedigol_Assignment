import React, { Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Spin } from 'antd'
import PrivateRoute from './PrivateRoutes'
import { Login, Statistics, UserInformation } from './LazyRoutes'

function AllRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin />}>
        <Routes>
          <Route exact path="/auth/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <Statistics />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/new-data"
            element={
              <PrivateRoute>
                <UserInformation />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AllRoutes
