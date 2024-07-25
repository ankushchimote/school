import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Academic from './components/Academic/Academic.jsx'
import Admission from './components/Admission/Admission.jsx'
import Faculty from './components/Faculty/Faculty.jsx'
import Student from './components/Student/Student.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Contact from './components/Contact/Contact.jsx'
import { createRoutesFromElements,createBrowserRouter, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='academic' element={<Academic />}/>
      <Route path='admission' element={<Admission />}/>
      <Route path='faculty' element={<Faculty />}/>
      <Route path='student' element={<Student />}/>
      <Route path='gallery' element={<Gallery />}/>
      <Route path='contact' element={<Contact />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
