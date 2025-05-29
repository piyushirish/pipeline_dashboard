import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import WellboreDataPage from './components/Dashboard/b-12-13-1.jsx'
import B_12_13_2 from './components/Dashboard/B_12_13_2.jsx'
import B_12_13_3 from './components/Dashboard/B_12_13_3.jsx'
import B1213 from './components/Dashboard/B1213.jsx'
import B12171 from './components/Dashboard/B_12_17/B12171.jsx'
import B1217 from './components/Dashboard/b-12-17.jsx'
import B12172 from './components/Dashboard/B_12_17/B12172.jsx'
import B12173 from './components/Dashboard/B_12_17/B12173.jsx'
import B12174 from './components/Dashboard/B_12_17/B12174.jsx'
import B12176 from './components/Dashboard/B_12_17/B12176.jsx'
import B12175 from './components/Dashboard/B_12_17/B12175.jsx'
import B12151 from './components/Dashboard/B_12_15/B12151.jsx'
import B12152 from './components/Dashboard/B_12_15/B12152.jsx'
import B12153 from './components/Dashboard/B_12_15/B12153.jsx'
import B12154 from './components/Dashboard/B_12_15/B12154.jsx'
import B12155 from './components/Dashboard/B_12_15/B12155.jsx'
import B1215 from './components/Dashboard/B1215.jsx'
import B12111 from './components/Dashboard/B_12_11/B12111.jsx'
import B12112 from './components/Dashboard/B_12_11/B12112.jsx'
import B12113 from './components/Dashboard/B_12_11/B12113.jsx'
import B12114 from './components/Dashboard/B_12_11/B12114.jsx'
import B12115 from './components/Dashboard/B_12_11/B12115.jsx'
import B12116 from './components/Dashboard/B_12_11/B12116.jsx'
import B1211 from './components/Dashboard/B1211.jsx'
import C24P3 from './components/Dashboard/C24P3.jsx'
import C24P31 from './components/Dashboard/C_24_P3/C24P31.jsx'
import C24P32 from './components/Dashboard/C_24_P3/C24P32.jsx'
import C24P33 from './components/Dashboard/C_24_P3/C24P33.jsx'
import C24P34 from './components/Dashboard/C_24_P3/C24P34.jsx'
import C24P35 from './components/Dashboard/C_24_P3/C24P35.jsx'
import C24P4 from './components/Dashboard/C24P4.jsx'
import C24P41 from './components/Dashboard/C_24_P4/C24P41.jsx'
import C24P42 from './components/Dashboard/C_24_P4/C24P42.jsx'
import C24P43 from './components/Dashboard/C_24_P4/C24P43.jsx'
import C24P11 from './components/Dashboard/C_24_P1/C24P11.jsx'
import C24P12 from './components/Dashboard/C_24_P1/C24P12.jsx'
import C24P13 from './components/Dashboard/C_24_P1/C24P13.jsx'
import C24P14 from './components/Dashboard/C_24_P1/C24P14.jsx'
import C24P15 from './components/Dashboard/C_24_P1/C24P15.jsx'
import C24P16 from './components/Dashboard/C_24_P1/C24P16.jsx'
import C24P1 from './components/Dashboard/C24P1.jsx'
import C26 from './components/Dashboard/C26.jsx'
import C261 from './components/Dashboard/C_26/C261.jsx'
import C262 from './components/Dashboard/C_26/C262.jsx'
import C263 from './components/Dashboard/C_26/C263.jsx'
import C264 from './components/Dashboard/C_26/C264.jsx'
import C265 from './components/Dashboard/C_26/C265.jsx'
import C266 from './components/Dashboard/C_26/C266.jsx'
import C24P2 from './components/Dashboard/C24P2.jsx'
import C24P22Z from './components/Dashboard/C_24_P2/C24P22Z.jsx'
import C24P24 from './components/Dashboard/C_24_P2/C24P24.jsx'
import C24P27Z from './components/Dashboard/C_24_P2/C24P27Z.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}  >
      <Route path='' element={<Home/>} />
      <Route path='dash' element={<Dashboard/>} />
      <Route path='/b-12-13' element={<B1213/>} />
      <Route path='/b-12-17' element={<B1217/>} />
      <Route path='/b-12-15' element={<B1215/>} />
      <Route path='/b-12-11' element={<B1211/>} />
      <Route path='/c-24-p3' element={<C24P3/>} />
      <Route path='/c-24-p4' element={<C24P4/>} />
      <Route path='/c-24-p1' element={<C24P1/>} />
      <Route path='/c-26' element={<C26/>} />
      <Route path='/c-24-p2' element={<C24P2/>} />
      <Route path='/b-12-13-1' element={<WellboreDataPage/>} />
      <Route path='/b-12-13-2' element={<B_12_13_2/>} />
      <Route path='/b-12-13-3' element={<B_12_13_3/>} />
      <Route path='/b-12-17-1' element={<B12171/>} />
      <Route path='/b-12-17-2' element={<B12172/>} />
      <Route path='/b-12-17-3' element={<B12173/>} />
      <Route path='/b-12-17-4' element={<B12174/>} />
      <Route path='/b-12-17-5' element={<B12175/>} />
      <Route path='/b-12-17-6' element={<B12176/>} />
      <Route path='/b-12-15-1' element={<B12151/>} />
      <Route path='/b-12-15-2' element={<B12152/>} />
      <Route path='/b-12-15-3' element={<B12153/>} />
      <Route path='/b-12-15-4' element={<B12154/>} />
      <Route path='/b-12-15-5' element={<B12155/>} />
      <Route path='/b-12-11-1' element={<B12111/>} />
      <Route path='/b-12-11-2' element={<B12112/>} />
      <Route path='/b-12-11-3' element={<B12113/>} />
      <Route path='/b-12-11-4' element={<B12114/>} />
      <Route path='/b-12-11-5' element={<B12115/>} />
      <Route path='/b-12-11-6' element={<B12116/>} />
      <Route path='/c-24-p3-1' element={<C24P31/>} />
      <Route path='/c-24-p3-2' element={<C24P32/>} />
      <Route path='/c-24-p3-3' element={<C24P33/>} />
      <Route path='/c-24-p3-4' element={<C24P34/>} />
      <Route path='/c-24-p3-5' element={<C24P35/>} />
      <Route path='/c-24-p4-1' element={<C24P41/>} />
      <Route path='/c-24-p4-2' element={<C24P42/>} />
      <Route path='/c-24-p4-3' element={<C24P43/>} />
      <Route path='/c-24-p1-1' element={<C24P11/>} />
      <Route path='/c-24-p1-2' element={<C24P12/>} />
      <Route path='/c-24-p1-3' element={<C24P13/>} />
      <Route path='/c-24-p1-4' element={<C24P14/>} />
      <Route path='/c-24-p1-5' element={<C24P15/>} />
      <Route path='/c-24-p1-6' element={<C24P16/>} />
      <Route path='/c-26-1' element={<C261/>} />
      <Route path='/c-26-2' element={<C262/>} />
      <Route path='/c-26-3' element={<C263/>} />
      <Route path='/c-26-4' element={<C264/>} />
      <Route path='/c-26-5' element={<C265/>} />
      <Route path='/c-26-6' element={<C266/>} />
      <Route path='/c-24-p2-2z' element={<C24P22Z/>} />
      <Route path='/c-24-p2-4' element={<C24P24/>} />
      <Route path='/c-24-p2-7z' element={<C24P27Z/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
