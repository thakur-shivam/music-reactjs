import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "./Layout.jsx"
import App from './App.jsx'
import Courses from './pages/Courses.jsx'
import Contact from './pages/Contact.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<App />} />
      <Route path='courses' element={<Courses />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
