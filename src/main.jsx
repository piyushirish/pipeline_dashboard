import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import WellboreDataPage from './components/Dashboard/b-12-13-1.jsx'
import WellboreDataPageb_12_17 from './components/Dashboard/b-12-17.jsx'
import B_12_13_2 from './components/Dashboard/B_12_13_2.jsx'
import B_12_13_3 from './components/Dashboard/B_12_13_3.jsx'
import B1213 from './components/Dashboard/B1213.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}  >
      <Route path='' element={<Home/>} />
      <Route path='dash' element={<Dashboard/>} />
      <Route path='/b-12-13' element={<B1213/>} />
      <Route path='/b-12-17' element={<WellboreDataPageb_12_17/>} />
      <Route path='/b-12-13-1' element={<WellboreDataPage/>} />
      <Route path='/b-12-13-2' element={<B_12_13_2/>} />
      <Route path='/b-12-13-3' element={<B_12_13_3/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
