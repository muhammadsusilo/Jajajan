import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css"
import HomePage from './pages/Home'

const router = createBrowserRouter ([
  {
    path:"/",
    element: <HomePage />
  },
  {
    path:"",
    element: <HomePage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
