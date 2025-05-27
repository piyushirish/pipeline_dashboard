import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import WellboreDataPage from './components/Dashboard/b-12-13.jsx'
import WellboreDataPageb_12_17 from './components/Dashboard/b-12-17.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}  >
      <Route path='' element={<Home/>} />
      <Route path='dash' element={<Dashboard/>} />
      <Route path='/b-12-13' element={<WellboreDataPage/>} />
      <Route path='/b-12-17' element={<WellboreDataPageb_12_17/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
