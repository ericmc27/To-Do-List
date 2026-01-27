import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from '../routes.js'
import { RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}><App/></RouterProvider>
)
