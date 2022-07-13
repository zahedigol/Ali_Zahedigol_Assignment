import React from 'react'
import ReactDOM from 'react-dom/client'
// import axios from "axios";
import GlobalStyle from './config/GlobalStyle'
import AllRoutes from './routes/AllRoutes'
import 'antd/dist/antd.css'
// import "antd/dist/antd.less";

const root = ReactDOM.createRoot(document.getElementById('root'))

// const token = localStorage.getItem("token");
// const auth = "Bearer ".concat(token);

root.render(
  <React.StrictMode>
    <AllRoutes />
    <GlobalStyle />
  </React.StrictMode>
)
